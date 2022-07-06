import { memo, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { toast } from 'lib/toast'
import Loader from 'components/loader'

type Props = {
    src: string
    isShow: boolean
    width: number
    height: number
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

    // Render
    return (
        <>
            <CSSTransition classNames="img-lazy" in={isLoaded} timeout={300} unmountOnExit>
                <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
            </CSSTransition>

            {!isLoaded && (
                <span className="embed embed-16by9 img-lazy">
                    <Loader type="spin" />
                </span>
            )}
        </>
    )
}

export default memo(ImgLazy)