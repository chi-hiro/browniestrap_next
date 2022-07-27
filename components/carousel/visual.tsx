import { memo, useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { EnvTypes } from 'store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination, Lazy } from 'swiper'
import { initSwiperOption } from 'lib/swiperUtl'
import { elementInScreen } from 'lib/elementInScreen'
import UI from '@/components/UI'
import { styles } from './carousel.style'

let isPause: boolean = false

type Props = {
    src: Array<{
        src: string,
        src_lg?: string,
        url?: string
    }>
    zoom?: boolean
    duration?: number
    timer?: boolean
}

const VisualCarousel = (props: Props) => {
    const el = useRef<HTMLDivElement>(null)
    const store = useSelector((state: { env: EnvTypes }) => state.env)
    const [swiperOption, setSwiperOption] = useState<{[key: string]: any}>({})
    const [mySwiper, setMySwiper] = useState<any>()
    const [lazyLoading, setLazyLoading] = useState<boolean>(false)
    const [timerProgress, setTimerProgress] = useState<number>(0)

    const durationStyle = (): {[key: string]: string} => {
        if (props.duration) {
            return {
                '--carousel-duration': `${(props.duration + 2000)}ms`,
                '--carousel-timer-duration': `${props.duration}ms`
            }
        } else {
            return {}
        }
    }

    const toggleAutoplay = (value: boolean) => {
        if (value) {
            if (isPause) {
                isPause = false
                mySwiper.autoplay.start()
                setTimer(100)
            }
        } else {
            if (!isPause) {
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
        if (el.current && mySwiper) toggleAutoplay(elementInScreen(el.current))
    }

    const changeStart = () => {
        setTimer(0)
    }

    const changeEnd = () => {
        setTimer(100)
    }

    useEffect(() => {
        setSwiperOption(initSwiperOption('visual', props.duration, false, false))
    }, [])

    useEffect(() => {
        if (mySwiper) {
            //inScreen()
            //window.addEventListener('scroll', inScreen)

            if (el.current && !el.current.classList.contains('reveal-active')) {
                el.current.classList.add('reveal-active')
            }
        }
    }, [mySwiper])

    return (
        <div
            ref={el}
            css={styles[`carousel_visual`]}
            className={`reveal ${props.zoom ? 'effect-zoom' : ''}`}
            style={durationStyle()}
        >
            <Swiper
                {...swiperOption}
                modules={[Autoplay, EffectFade, Navigation, Pagination, Lazy]}
                onSwiper={(swiper) => setMySwiper(swiper)}
                onTransitionStart={changeStart}
                onTransitionEnd={changeEnd}
                onLazyImageLoad={() => setLazyLoading(true)}
                onLazyImageReady={() => setLazyLoading(false)}
            >
                {props.src.map((item, index) => (
                    <SwiperSlide key={`carousel-item${index}`}>
                        <img data-src={store.mobile ? item.src : (item.src_lg ? item.src_lg : item.src)} width="100%" height="100%" alt="" className="swiper-lazy" />
                        <span className="swiper-lazy-preloader" />
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
        </div>
    )
}

export default memo(VisualCarousel)