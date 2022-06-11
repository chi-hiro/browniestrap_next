import { memo } from 'react'

type Props = {
    children: React.ReactNode,
    theme: string,
    href?: string
}

const Badge = (props: Props) => {
    return (
        props.href ? (
            <a className={`badge ${props.theme}`} href={props.href}>{props.children}</a>
        ) : (
            <span className={`badge ${props.theme}`}>{props.children}</span>
        )
    )
}

export default memo(Badge)