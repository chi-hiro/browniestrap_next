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
        const arr = [props.href ? styles.linkBadge : styles.badge]
        const modelArr = props.model.split(/\s/)
        modelArr.map(item => arr.push(styles[`badge_${item}`]))
        if (props.color) {
            arr.push(colorVariant(props.color, props.model, props.href))
        }
        return arr
    }, [props.model, props.color, props.href])

    return props.href
        ? <a css={badgeCSS} className={props.addClass ? props.addClass : ''} href={props.href}>{props.children}</a>
        : <span css={badgeCSS} className={props.addClass ? props.addClass : ''}>{props.children}</span>
}

export default memo(Badge)