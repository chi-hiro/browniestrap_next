import { memo, useMemo } from 'react'

type Props = {
    children: React.ReactNode
    variant?: string
    theme?: string
    href?: string
}

const Badge = (props: Props) => {
    const badgeClass = useMemo(() => {
        const classes = ['badge']
        props.variant && classes.push(`badge-${props.variant}`)
        props.theme && classes.push(props.theme)
        return classes.join(' ')
    }, [props.variant, props.theme])

    return props.href
        ? <a className={badgeClass} href={props.href}>{props.children}</a>
        : <span className={badgeClass}>{props.children}</span>
}

export default memo(Badge)