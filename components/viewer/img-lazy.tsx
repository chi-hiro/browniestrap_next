import { memo, useState, useEffect } from 'react'
import { toast } from 'lib/toast'
import Loader from '@/components/UI/loader'
import styled from 'styled-components'

type Props = {
    src: string
    isShow: boolean
    width: string
    height: string
    alt: string
}

const ImgLazy = (props: Props) => {
    // State
    const [isLoaded, setLoaded] = useState<boolean>(false)

    // Methods
    const loadImage = () => {
        if (props.isShow == true && isLoaded == false) {
            const img = new Image()
            img.onload = () => setLoaded(true)
            img.onerror = error => toast('danger', error as string)
            img.src = props.src
        }
    }

    // Hooks
    useEffect(() => {
        props.isShow && loadImage()
    }, [props.isShow])

    // CSS
    const StyledImgLazy = styled.span`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-item: center;
        width: 100%;
        height: 100%;
    `

    // Render
    return (
        <StyledImgLazy>
            {!isLoaded ? (
                <Loader model="spin" />
            ) : (
                <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
            )}
        </StyledImgLazy>
    )
}

export default memo(ImgLazy)