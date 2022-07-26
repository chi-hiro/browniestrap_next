import { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react'
import { env } from 'lib/env'
import { getTouchPosition } from 'lib/getTouchPosition'
import { scrollerStyles } from './carousel.style'

export type Props = {
    divide?: boolean
    syncScrollbarMove: (value: number) => void
    syncScrollbarEnd: (value: number) => void
}

export type CarouselScrollbarRefTypes = {
    updateScrollbar: (snapLength: number, snapIndex: number) => void
    dragMove: (value: number) => void
}

export const CarouselScrollbar = forwardRef((props: Props, ref) => {
    // Ref
    const el = useRef<HTMLDivElement>(null)

    // State
    const [isDrag, setDrag] = useState<boolean>(false)
    const [barW, setBarW] = useState<number>(0)
    const [barL, setBarL] = useState<number>(0)
    const [isAnimate, setAnimate] = useState<boolean>(false)
    const [points, setPoints] = useState<number>(0)
    const [active, setActive] = useState<number>(0)

    // Methods
    const handleDown = () => {
        setDrag(true)
    }

    const handleMove = (event: React.TouchEvent<HTMLDivElement> | Event) => {
        const e = event as Event

        !env('touch') && e.preventDefault()

        if (el.current && isDrag) {
            let currentPos = getTouchPosition(e, 'X') - el.current.getBoundingClientRect().left - (barW / 2)
            if (currentPos < 0) currentPos = 0
            if (currentPos > el.current.offsetWidth - barW) currentPos = el.current.offsetWidth - barW
            setBarL(currentPos)

            let per: number = currentPos * (100 / (el.current.offsetWidth - barW)) / 100
            if (per > 1) per = 1
            props.syncScrollbarMove(per)
        }
    }

    const handleUp = (event: React.TouchEvent<HTMLDivElement> | Event) => {
        const e = event as Event

        if (el.current && isDrag) {
            setDrag(false)

            props.syncScrollbarEnd(Math.floor((getTouchPosition(e, 'X') - el.current.getBoundingClientRect().left) / barW))
        }
    }

    const updateScrollbar = (snapLength: number, snapIndex: number) => {
        setAnimate(true)

        if (el.current) {
            const width = el.current.offsetWidth / snapLength
            const left = width * snapIndex
            setBarW(width)
            setBarL(left)
            setPoints(Math.round(el.current.offsetWidth / width))
            setActive(left / (el.current.offsetWidth / Math.round(el.current.offsetWidth / width)))
        }

        window.setTimeout(() => setAnimate(false), 300)
    }

    const dragMove = (value: number) => {
        if (el.current) setBarL((el.current.offsetWidth - barW) * value)
    }

    // Hooks
    useEffect(() => {
        if (!env('touch')) {
            if (isDrag) {
                document.addEventListener('mouseup', handleUp)
                document.addEventListener('mousemove', handleMove)
            }

            return () => {
                document.removeEventListener('mouseup', handleUp)
                document.removeEventListener('mousemove', handleMove)
            }
        }
    }, [isDrag])

    // Binding
    useImperativeHandle(ref, () => ({
        updateScrollbar,
        dragMove
    }))

    // Render
    const renderPoint = () => {
        const doms = []

        for (let i = 0; i < points; i++) {
            doms.push(<span key={`carousel-scrollbar-point${i}`} className={`carousel-scrollbar-point-item ${i === active ? 'active' : ''}`}></span>)
        }

        return doms
    }

    return (
        <div ref={el} css={scrollerStyles.wrapper} onTouchStart={handleDown} onTouchMove={handleMove} onTouchEnd={handleUp} onTouchCancel={handleUp} onMouseDown={handleDown}>
            <span
                css={scrollerStyles.bar}
                className={isAnimate ? 'transition' : ''}
                style={{ width: `${barW}px`, transform: `translateX(${barL}px)` }}
            ></span>

            {(props.divide && points) && (
                <div css={scrollerStyles.point}>
                    {renderPoint()}
                </div>
            )}
        </div>
    )
})