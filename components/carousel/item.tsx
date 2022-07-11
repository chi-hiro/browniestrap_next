import { memo } from 'react'
import { useSelector } from 'react-redux'
import { EnvTypes } from 'store'
import Loader from '@/components/UI/loader'

type Props = {
    src: {
        src: string
        src_lg?: string
        url?: string
        embed?: string
    }
}

const CarouselItem = (props: Props) => {
    // Store
    const store = useSelector((state: { env: EnvTypes }) => state.env)

    // Render
    const renderBody = (
        props.src.embed ? (
            <span className={`embed ${props.src.embed}`}>
                <img data-src={props.src.src} width="900" height="900" alt="" className="swiper-lazy" />
            </span>
        ) : (
            <img data-src={store.mobile ? props.src.src : (props.src.src_lg ? props.src.src_lg : props.src.src)} width={store.mobile ? 900 : 1920} height={store.mobile ? 900 : 1080} alt="" className="swiper-lazy" />
        )
    )

    return (
        <>
            {props.src.url ? (
                <a href={props.src.url} tabIndex={-1}>
                    {renderBody}
                </a>
            ) : (
                renderBody
            )}

            <div className="swiper-lazy-preloader">
                <Loader type="line" />
            </div>
        </>
    )
}

export default memo(CarouselItem)