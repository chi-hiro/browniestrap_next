import { memo, useMemo } from 'react'
import { styles } from './skelton.style'

type Props = {
    model?: string
    animation?: boolean
    addClass?: string
    width?: number
    height?: number
}

const Skelton = (props: Props) => {
    const skeltonCSS = useMemo(() => {
        const arr = [styles.skelton]
        props.model && arr.push(styles[`skelton_${props.model}`])
        return arr
    }, [props.model])

    const skeltonClass = useMemo(() => {
        const arr = ['skelton']
        props.animation && arr.push('animation')
        props.addClass && arr.push(props.addClass)
        return arr.join(' ')
    }, [props.animation, props.addClass])

    const skeltonStyle = useMemo(() => {
        const styles = { width: 'auto', height: 'auto' }
        if (props.width) styles.width = props.width + 'px'
        if (props.height) styles.height = props.height + 'px'
        return styles
    }, [props.width, props.height])

    return (
        <span css={skeltonCSS} className={skeltonClass} style={skeltonStyle} />
    )
}

export default memo(Skelton)