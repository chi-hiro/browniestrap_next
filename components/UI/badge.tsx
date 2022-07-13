import { memo, useMemo } from 'react'

type Props = {
    children: React.ReactNode
    type?: string
    theme?: string
    href?: string
}

const Badge = (props: Props) => {
    const badgeClass = useMemo(() => {
        const classes = ['badge']
        props.type && classes.push(`badge-${props.type}`)
        props.theme && classes.push(props.theme)
        return classes.join(' ')
    }, [props.type, props.theme])

    return (
        props.href
            ? <a className={badgeClass} href={props.href}>{props.children}</a>
            : <span className={badgeClass}>{props.children}</span>
    )
}

export default memo(Badge)