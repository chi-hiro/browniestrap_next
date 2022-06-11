import { useRef, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { env } from 'lib/env'
import { getTouchPosition } from 'lib/getTouchPosition'
import { scrollElement } from 'lib/pageScroll'
import { toggleScrollbarSpacer } from 'lib/toggleScrollbarSpacer'
import ImgLazy from 'components/img-lazy'
import Icon from 'components/icon'

type Props = {
    mode: string,
    items: string[],
    activeItem: number
}

let stateActive: number

const Viewer = (props: Props) => {
    // Ref
    const el = useRef<HTMLDivElement>(null)

    // State
    const [isShow, setShow] = useState<boolean>(false)
    const [isDrag, setDrag] = useState<boolean>(false)
    const [isAnimate, setAnimate] = useState<boolean>(false)

    const total = props.items.length
    const [active, setActive] = useState<number>(props.activeItem)
    const [container, setContainer] = useState<number>(0)

    const [posX, setPosX] = useState<number>(0)
    const [pageX, setPageX] = useState<number>(0)
    const [beginX, setBeginX] = useState<number>(0)

    const [videoPlaying, setVideoPlaying] = useState<boolean>(false)
    const [scrollPos, setScrollPos] = useState<number>(0)

    // Methods
    const sizing = () => {
        setContainer(window.innerWidth * total)
        setPosX(-(window.innerWidth * stateActive))
    }

    const dismiss = async() => {
        setVideoPlaying(false)
        setShow(false)

        await toggleScrollbarSpacer(false)

        document.body.classList.remove('show_viewer')
        scrollElement().scrollTo({ top: scrollPos })

        //el.current && el.current.remove()
        document.querySelector('#viewer-container')?.remove()
    }

    const toggle = (index: number) => {
        stateActive = stateActive + index
        setActive(active + index)
        slide()
    }

    const slide = () => {
        setAnimate(true)
        setPosX(-(window.innerWidth * stateActive))
        window.setTimeout(() => setAnimate(false), 300)
    }

    const playVideo = (e: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
        const video = e.target as HTMLVideoElement

        if (!videoPlaying) {
            setVideoPlaying(true)
            video.play()
            video.addEventListener('ended', () => setVideoPlaying(false))
        } else {
            setVideoPlaying(false)
            video.pause()
        }
    }

    const handleDown = (event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const e = event as unknown as Event

        setDrag(true)
        setBeginX(posX)
        setPageX(getTouchPosition(e, 'X'))
    }

    const handleMove = (event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const e = event as unknown as Event

        if (isDrag && props.items.length > 1) {
            !env('touch') && e.preventDefault()
            setPosX(beginX + (getTouchPosition(e, 'X') - pageX))
        }
    }

    const handleUp = () => {
        if (isDrag) {
            setDrag(false)

            const currentX = -(window.innerWidth * stateActive)
            let nextIndex: number

            if (posX < currentX) {
                nextIndex = stateActive + 1
            } else if (posX > currentX) {
                nextIndex = stateActive - 1
            } else {
                nextIndex = stateActive
            }

            if (nextIndex < 0) nextIndex = 0
            if (nextIndex > (total - 1)) nextIndex = total - 1

            stateActive = nextIndex
            setActive(nextIndex)
            slide()
        }
    }

    // Hooks
    useEffect(() => {
        stateActive = props.activeItem
        window.addEventListener('resize', sizing)
        sizing()

        setShow(true)
        toggleScrollbarSpacer(true)
        setScrollPos(scrollElement().scrollTop)
        document.body.classList.add('show_viewer')
    }, [])

    // Render
    return (
        <CSSTransition classNames="viewer" in={isShow} timeout={300} unmountOnExit>
            <div id="viewer" ref={el}>
                <div id="viewer-body">
                    <div
                        id="viewer-body-container"
                        className={`${isAnimate ? 'transition' : ''} ${total === 1 ? 'single' : ''}`}
                        style={{ width: `${container}px`, transform: `translate3d(${posX}px, 0, 0)` }}
                        onTouchStart={handleDown}
                        onTouchMove={handleMove}
                        onTouchEnd={handleUp}
                        onTouchCancel={handleUp}
                        onMouseDown={handleDown}
                        onMouseMove={handleMove}
                        onMouseUp={handleUp}
                        onMouseLeave={handleUp}
                    >
                        {props.items.map((item, index) => (
                            <div key={`viewer-item${index}`} className={`viewer-item ${index === active ? 'viewer-item-active' : ''}`}>
                                {props.mode === 'image' && (
                                    <div className="img">
                                        <ImgLazy src={item} width={1920} height={1080} alt="" isShow={index === active ? true : false} />
                                    </div>
                                )}

                                {props.mode === 'video' && (
                                    <div className="video">
                                        <video src={item} onClick={playVideo} controls controlsList="nodownload nofullscreen" disablePictureInPicture webkit-playsinline="true" playsInline></video>
                                    </div>
                                )}

                                {props.mode === 'youtube' && (
                                    <div className="video">
                                        <div className="embed embed-16by9">
                                            <iframe width="100%" height="100%" src={item.replace('watch?v=', 'embed/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {(total > 1 && active !== 0) && (
                    <button type="button" id="viewer-prev" onClick={() => toggle(-1)}>
                        <span className="btn btn-icon-only is-link">
                            <Icon value="chevron_left" />
                        </span>
                    </button>
                )}

                {(total > 1 && active !== (total - 1)) && (
                    <button type="button" id="viewer-next" onClick={() => toggle(+1)}>
                        <span className="btn btn-icon-only is-link">
                            <Icon value="chevron_right" />
                        </span>
                    </button>
                )}

                <button type="button" id="viewer-close" onClick={dismiss}>
                    <span className="btn btn-icon-only is-link">
                        <Icon value="close" />
                    </span>
                </button>

                <CSSTransition classNames="viewer-nav" in={total > 1} timeout={300} unmountOnExit>
                    <div id="viewer-index">
                        <span>{ active + 1 } / { total }</span>
                    </div>
                </CSSTransition>
            </div>
        </CSSTransition>
    )
}

export default Viewer