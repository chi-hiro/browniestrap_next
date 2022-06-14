import { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { EnvTypes } from 'store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination, Lazy } from 'swiper'
import { initSwiperOption } from 'lib/swiperUtl'
import { elementInScreen } from 'lib/elementInScreen'
import Loader from 'components/loader'
import CarouselItem from 'components/carousel-item'
import { CarouselScrollbar, CarouselScrollbarRefTypes } from 'components/carousel-scrollbar'

let isResize: number = 0

type Props = {
    src: Array<{
        src: string,
        src_lg?: string,
        url?: string,
        embed?: string
    }>,
    mode: string,
    zoom?: boolean,
    duration?: number,
    nav?: boolean,
    timer?: boolean,
    pagination?: boolean
}

const Carousel = (props: Props) => {
    // Store
    const store = useSelector((state: { env: EnvTypes }) => state.env)

    // Ref
    const el = useRef<HTMLDivElement>(null)
    const scrollbar = useRef<CarouselScrollbarRefTypes>(null)

    // State
    const [swiperOption, setSwiperOption] = useState<{[key: string]: any}>({})
    const [mySwiper, setMySwiper] = useState<any>()
    const [lazyLoading, setLazyLoading] = useState<boolean>(false)
    const [isShow, setShow] = useState<boolean>(false)
    const [isPause, setPause] = useState<boolean>(false)
    const [beforeW, setBeforeW] = useState<number>(0)
    const [timerProgress, setTimerProgress] = useState<number>(0)

    // Methods
    const durationStyle = (): {[key: string]: string} => {
        if (props.duration) {
            return {
                '--carousel-duration': (props.mode === 'visual') ? `${(props.duration + 2000)}ms` : `${props.duration}ms`,
                '--carousel-timer-duration': `${props.duration}ms`
            }
        } else {
            return {}
        }
    }

    const toggleResponsive = () => {
        if ((!store.mobile && beforeW < 1024) || (store.mobile && beforeW >= 1024)) {
            setShow(false)
            window.setTimeout(() => setShow(true), 100)
        }
        setBeforeW(window.innerWidth)
    }

    const toggleAutoplay = (value: boolean) => {
        if (value) {
            if (isPause) {
                setPause(false)
                mySwiper.autoplay.start()
                setTimer(100)
            }
        } else {
            if (!isPause) {
                setPause(true)
                mySwiper.autoplay.stop()
                setTimer(0)
            }
        }
    }

    const setTimer = (value: number) => {
        if (props.timer && props.duration) setTimerProgress(value)
    }

    const inScreen = () => {
        el.current && toggleAutoplay(elementInScreen(el.current))
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

    // Hooks
    useEffect(() => {
        setSwiperOption(initSwiperOption(props.mode, props.duration, props.nav, props.pagination))
        setBeforeW(window.innerWidth)
        setShow(true)

        window.addEventListener('resize', () => {
            window.clearTimeout(isResize)
            isResize = window.setTimeout(() => toggleResponsive(), 200)
        })
    }, [])

    useEffect(() => {
        mySwiper && updateScrollbar()
    }, [mySwiper])

    useEffect(() => {
        if (mySwiper) {
            if (isShow) {
                if (props.duration) {
                    inScreen()
                    window.addEventListener('scroll', inScreen)
                }

                if (el.current && !el.current.classList.contains('reveal-active')) {
                    el.current.classList.add('reveal-active')
                }
            }

            if (props.duration) {
                return () => window.removeEventListener('scroll', inScreen)
            }
        }
    }, [isShow, mySwiper])

    // Render
    return (
        <div ref={el} className={`carousel carousel-${props.mode} reveal ${props.zoom ? 'effect-zoom' : ''}`} style={durationStyle()}>
            {isShow && (
                <Swiper
                    {...swiperOption}
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
                            <CarouselItem src={item} />
                        </SwiperSlide>
                    ))}

                    {props.timer && (
                        <div className={`carousel-loader ${lazyLoading ? 'hide' : ''}`}>
                            <Loader type="circle" progress={timerProgress} />
                        </div>
                    )}
                </Swiper>
            )}

            {(isShow && props.nav && !swiperOption.loop) && (
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

export default Carousel