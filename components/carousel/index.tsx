import { memo, useMemo, useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination, Lazy } from 'swiper'
import { initialSwiperOption } from 'lib/swiperUtl'
import CarouselItem from '@/components/carousel/item'
import { CarouselScrollbar, CarouselScrollbarRefTypes } from '@/components/carousel/scrollbar'
import { FlattenSimpleInterpolation } from 'styled-components'
import { styles } from './carousel.style'
import { elementInScreen } from 'lib/elementInScreen'
import UI from '@/components/UI'

let isResize: number = 0
let beforeW: number = 0
let isPause: boolean = false

type Props = {
    model: string,
    src: Array<{
        src: string,
        src_lg?: string,
        url?: string
    }>
    duration?: number
    zoom?: boolean
    timer?: boolean
    nav?: boolean
    pagination?: boolean
    ratio?: number[]
}

const Carousel = (props: Props) => {
    const el = useRef<HTMLDivElement>(null)
    const scrollbar = useRef<CarouselScrollbarRefTypes>(null)

    const [isShow, setShow] = useState<boolean>(true)
    const [mySwiper, setMySwiper] = useState<any>()
    const [lazyLoading, setLazyLoading] = useState<boolean>(false)
    const [timerProgress, setTimerProgress] = useState<number>(0)

    // Methods: View
    const toggleResponsive = () => {
        const breakpoint = 1024
        const isMobile = window.innerWidth < breakpoint
        if ((!isMobile && beforeW < breakpoint) || (isMobile && beforeW >= breakpoint)) {
            setShow(false)
            window.setTimeout(() => setShow(true), 100)
        }
        beforeW = window.innerWidth
    }

    // Methods: Carousel
    const toggleAutoplay = (value: boolean) => {
        if (value) {
            if (isPause && !mySwiper.destroyed) {
                isPause = false
                mySwiper.autoplay.start()
                setTimer(100)
            }
        } else {
            if (!isPause && !mySwiper.destroyed) {
                isPause = true
                mySwiper.autoplay.stop()
                setTimer(0)
            }
        }
    }

    const setTimer = (value: number) => {
        if (props.timer && props.duration) setTimerProgress(value)
    }

    const inScreen = () => {
        if (el.current && props.duration) toggleAutoplay(elementInScreen(el.current))
    }

    const changeStart = () => {
        updateScrollbar()
        setTimer(0)
    }

    const changeEnd = () => {
        setTimer(100)
    }

    // Methods: Scrollbar
    const updateScrollbar = () => {
        scrollbar.current?.updateScrollbar(mySwiper.snapGrid.length, mySwiper.snapIndex)
    }

    const dragMove = () => {
        scrollbar.current?.dragMove(-mySwiper.translate * (100 / mySwiper.snapGrid[mySwiper.snapGrid.length - 1]) / 100)
    }

    const syncScrollbarMove = (value: number) => {
        mySwiper.setTranslate(-(mySwiper.snapGrid[mySwiper.snapGrid.length - 1] * value))
    }

    const syncScrollbarEnd = (value: number) => {
        mySwiper.slideTo(value)
    }

    // Computed
    const carouselCSS = useMemo((): FlattenSimpleInterpolation[] => {
        const arr = [styles.carousel]
        props.model && arr.push([styles[props.model]])
        return arr
    }, [props.model])

    const carouselClass = useMemo((): string => {
        const arr = ['reveal']
        props.zoom && arr.push('effect-zoom')
        return arr.join(' ')
    }, [props.zoom])

    const carouselStyle = useMemo((): {[key: string]: string} => {
        return props.duration ? {
            '--carousel-duration': (props.model === 'visual') ? `${(props.duration + 2000)}ms` : `${props.duration}ms`,
            '--carousel-timer-duration': `${props.duration}ms`
        } : {}
    }, [props.duration])

    // Hooks
    useEffect(() => {
        beforeW = window.innerWidth

        window.addEventListener('resize', () => {
            window.clearTimeout(isResize)
            isResize = window.setTimeout(() => toggleResponsive(), 200)
        })
    }, [])

    useEffect(() => {
        if (mySwiper && !mySwiper.destroyed) {
            updateScrollbar()
            inScreen()
            window.addEventListener('scroll', inScreen)

            if (el.current && !el.current.classList.contains('reveal-active')) {
                el.current.classList.add('reveal-active')
            }
        }
    }, [mySwiper])

    // Render
    return (
        <div ref={el} css={carouselCSS} className={carouselClass} style={carouselStyle}>
            {isShow && (
                <Swiper
                    {...initialSwiperOption(props.model, props.duration, props.nav, props.pagination)}
                    modules={[Autoplay, EffectFade, Navigation, Pagination, Lazy]}
                    onSwiper={(swiper) => setMySwiper(swiper)}
                    onSliderMove={dragMove}
                    onTransitionStart={changeStart}
                    onTransitionEnd={changeEnd}
                    onLazyImageLoad={() => setLazyLoading(true)}
                    onLazyImageReady={() => setLazyLoading(false)}
                >
                    {props.src.map((item, index) => (
                        <SwiperSlide key={`carousel-item${index}`}>
                            <CarouselItem src={item} ratio={props.ratio} />
                        </SwiperSlide>
                    ))}

                    {props.timer && (
                        <UI.Loader
                            model="circle"
                            color="white"
                            addClass={`carousel-loader ${lazyLoading ? 'hide' : ''}`}
                            progress={timerProgress}
                        />
                    )}
                </Swiper>
            )}

            {(isShow && mySwiper && props.nav) && (
                <CarouselScrollbar
                    ref={scrollbar}
                    divide={true}
                    syncScrollbarMove={(value) => syncScrollbarMove(value)}
                    syncScrollbarEnd={(value) => syncScrollbarEnd(value)}
                />
            )}
        </div>
    )
}

export default memo(Carousel)