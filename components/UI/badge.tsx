import { memo, useMemo } from 'react'
import { styles, colorVariant } from './badge.style'

type Props = {
    children: React.ReactNode
    model: string
    color?: string
    addClass?: string
    href?: string
}

const Badge = (props: Props) => {
    const badgeCSS = useMemo(() => {
        const arr = [styles.badge]
        props.model && props.model.split(/\s/).map(model => arr.push(styles[model]))
        props.href && arr.push(styles.link)
        props.color && arr.push(colorVariant(props.color, props.model, props.href))
        return arr
    }, [props.model, props.color, props.href])

    const badgeClass = useMemo(() => {
        const arr = []
        props.addClass && arr.push(props.addClass)
        return arr.join(' ')
    }, [props.addClass])

    return props.href
        ? <a css={badgeCSS} className={badgeClass} href={props.href}>{props.children}</a>
        : <span css={badgeCSS} className={badgeClass}>{props.children}</span>
}

export default memo(Badge)