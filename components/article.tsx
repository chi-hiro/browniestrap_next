import { memo, useMemo } from 'react'
import UI from 'components/UIKit'

type Props = {
    children: React.ReactNode
    title: string
    date: string
    badge?: { label: string, theme: string }
}

const Article = (props: Props) => {
    // Computed
    const formatDate = useMemo(() => {
        const date = new Date(props.date as string)
        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate()
        return `${y}.${m}.${d}`
    }, [props.date])

    // Render
    return (
        <article className="article" itemScope itemType="http://schema.org/NewsArticle">
            <div className="flex justify-between items-center article-detail">
                <time itemProp="datepublished" dateTime={props.date} className="article-date">{formatDate}</time>
                {props.badge && <UI.Badge theme={props.badge.theme}>{props.badge.label}</UI.Badge>}
            </div>

            <h1 itemProp="name" className="article-title">
                {props.title}
            </h1>

            <div itemProp="articleBody" className="article-body">
                {props.children}
            </div>
        </article>
    )
}

export default memo(Article)