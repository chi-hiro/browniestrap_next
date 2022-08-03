import { memo, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { toast } from 'lib/toast'
import Loader from '@/components/UI/loader'
import { css } from 'styled-components'
import { mixins } from 'lib/styleUtl'

type Props = {
    src: string
    isShow: boolean
    width: string
    height: string
    alt: string
}

const ImgLazy = (props: Props) => {
    const [isLoaded, setLoaded] = useState<boolean>(false)

    const loadImage = () => {
        if (props.isShow == true && isLoaded == false) {
            const img = new Image()
            img.onload = () => setLoaded(true)
            img.onerror = error => toast('danger', error as string)
            img.src = props.src
        }
    }

    useEffect(() => loadImage(), [props.isShow])

    return (
        <>
            <CSSTransition classNames="img-lazy" in={isLoaded} timeout={300} unmountOnExit>
                <span css={style}>
                    <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
                </span>
            </CSSTransition>

            {!isLoaded && <span css={style}><Loader model="spin" /></span>}
        </>
    )
}

export default memo(ImgLazy)

const style = css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    width: 100%;
    height: 100%;

    ${mixins.transition(['opacity'])}
    opacity: 0;

    &.img-lazy-enter,
    &.img-lazy-exit {
        will-change: opacity;
    }

    &.img-lazy-enter-active,
    &.img-lazy-enter-done {
        opacity: 1;
    }
`