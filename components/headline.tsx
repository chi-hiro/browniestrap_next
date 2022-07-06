import { memo, useMemo } from 'react'
import Link from 'next/link'
import UI from 'components/UIKit'

type Props = {
    children: React.ReactNode
    date?: string
    href?: string
    badge?: { label: string, theme: string }
    border?: boolean
    rows?: number
}

const Headline = (props: Props) => {
    // Computed
    const formatDate = useMemo(() => {
        const date = new Date(props.date as string)
        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate()
        return `${y}.${m}.${d}`
    }, [props.date])

    // Render
    const renderBody = (
        <div className="headline-item-body">
            <div className="detail">
                {props.badge && <UI.Badge theme={props.badge.theme}>{props.badge.label}</UI.Badge>}
                {props.date && <time itemProp="datePublished" dateTime={props.date} className="date">{formatDate}</time>}
            </div>

            <h6 itemProp="headline" className={`title ${props.rows ? `text-clamp-${props.rows}` : ''}`}>
                {props.href
                    ? <span className="hover-underline">{props.children}</span>
                    : props.children
                }
            </h6>
        </div>
    )

    return (
        <div className={`headline-item reveal reveal-fade-up ${props.border ? 'border-y' : ''}`} itemScope itemType="http://schema.org/NewsArticle">
            {props.href ? (
                <Link href={props.href}>
                    <a itemProp="url" className="hover-icon-right">
                        {renderBody}
                    </a>
                </Link>
            ) : (
               renderBody
            )}
        </div>
    )
}

export default memo(Headline)