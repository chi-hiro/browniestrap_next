import { memo, useMemo } from 'react'

type Props = {
    children: React.ReactNode
    model?: string
    theme?: string
    href?: string
}

const Badge = (props: Props) => {
    const badgeClass = useMemo(() => {
        const classes = ['badge']
        props.model && classes.push(`badge-${props.model}`)
        props.theme && classes.push(props.theme)
        return classes.join(' ')
    }, [props.model, props.theme])

    return (
        props.href
            ? <a className={badgeClass} href={props.href}>{props.children}</a>
            : <span className={badgeClass}>{props.children}</span>
    )
}

export default memo(Badge)