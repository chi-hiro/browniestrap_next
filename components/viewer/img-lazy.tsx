import { memo, useState, useEffect } from 'react'
import { toast } from 'lib/toast'
import Loader from '@/components/UI/loader'
import { css } from 'styled-components'

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

    useEffect(() => {
        props.isShow && loadImage()
    }, [props.isShow])

    return (
        <span css={style}>
            {!isLoaded ? (
                <Loader model="spin" />
            ) : (
                <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
            )}
        </span>
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
`