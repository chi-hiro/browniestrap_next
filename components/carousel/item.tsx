import { memo } from 'react'
import { useSelector } from 'react-redux'
import { EnvTypes } from 'store'
import { utility } from 'lib/styleUtl'

type Props = {
    src: {
        src: string
        src_lg?: string
        url?: string
    }
    ratio?: number[]
}

const CarouselItem = (props: Props) => {
    const store = useSelector((state: { env: EnvTypes }) => state.env)

    const renderBody = props.ratio ? (
        <span css={utility.embed(props.ratio[0], props.ratio[1])}>
            <img data-src={props.src.src} width="100%" height="100%" alt="" className="swiper-lazy" />
        </span>
    ) : (
        <img data-src={store.mobile ? props.src.src : (props.src.src_lg ? props.src.src_lg : props.src.src)} width="100%" height="100%" alt="" className="swiper-lazy" />
    )

    return (
        <>
            {props.src.url
                ? <a href={props.src.url} tabIndex={-1}>{renderBody}</a>
                : renderBody
            }

            <span className="swiper-lazy-preloader" />
        </>
    )
}

export default memo(CarouselItem)