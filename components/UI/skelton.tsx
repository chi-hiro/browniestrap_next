import { memo, useMemo } from 'react'

type Props = {
    variant?: string
    animation?: boolean
    theme?: string
    width?: number
    height?: number
}

const Skelton = (props: Props) => {
    const skeltonClass = useMemo(() => {
        const classes = ['skelton']
        props.variant && classes.push('skelton-' + props.variant)
        props.animation && classes.push('animation')
        props.theme && classes.push(props.theme)
        return classes.join(' ')
    }, [props.variant, props.animation, props.theme])

    const skeltonStyle = useMemo(() => {
        const styles = { width: '', height: '' }
        if (props.width) styles.width = props.width + 'px'
        if (props.height) styles.height = props.height + 'px'
        return styles
    }, [props.width, props.height])

    return (
        <span className={skeltonClass} style={skeltonStyle} />
    )
}

export default memo(Skelton)