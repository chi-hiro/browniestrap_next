import { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react'
import { env } from 'lib/env'
import { getTouchPosition } from 'lib/getTouchPosition'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { darken, lighten } from 'polished'
import { variables, mixins, easing } from '@/lib/styleUtl'

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
        <div ref={el} css={styles.wrapper} onTouchStart={handleDown} onTouchMove={handleMove} onTouchEnd={handleUp} onTouchCancel={handleUp} onMouseDown={handleDown}>
            <span
                css={styles.bar}
                className={isAnimate ? 'transition' : ''}
                style={{ width: `${barW}px`, transform: `translateX(${barL}px)` }}
            ></span>

            {(props.divide && points) && (
                <span css={styles.point}>{renderPoint()}</span>
            )}
        </div>
    )
})

const scrollerH = 2

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    wrapper: css`
        cursor: ew-resize;
        user-select: none;
        overflow: hidden;
        position: relative;
        height: ${variables.componentHeight}px;
        width: 100%;
        max-width: 75vw;
        margin: 1.5rem auto 0;

        ${mixins.breakpointUp(`
            max-width: 400px;
        `)}

        &::after {
            content: '';
            position: absolute;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            height: ${scrollerH}px;
            background-color: ${darken(0.15, variables.theme.bodyBg)};

            ${mixins.darkmode(`
                background-color: ${lighten(0.15, variables.darkTheme.bodyBg)};
            `)}
        }

        .reveal & {
            transform: scale(0, 1);
            transform-origin: center;
        }

        .reveal-active & {
            transform: none;
            transition: transform 800ms ${easing.easeInOutQuart};
        }
    `,

    bar: css`
        position: relative;
        z-index: 5;
        display: block;
        height: ${variables.componentHeight}px;
        padding: ${(variables.componentHeight - scrollerH) / 2}px 0;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            height: ${scrollerH}px;
            background-color: ${variables.color.primary};
        }

        &.transition {
            ${mixins.transition(['transform'])}
        }
    `,

    point: css`
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .carousel-scrollbar-point-item {
            flex: 1 1 100%;
            position: relative;
            text-align: center;
            height: ${scrollerH}px;

            border-left: 1px solid ${variables.theme.bodyBg};
            border-right: 1px solid ${variables.theme.bodyBg};

            ${mixins.darkmode(`
                border-color: ${variables.darkTheme.bodyBg};
            `)}
        }
    `
}