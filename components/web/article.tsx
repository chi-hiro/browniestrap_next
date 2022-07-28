import { memo, useMemo } from 'react'
import UI from '@/components/UI'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { darken, lighten } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'

type Props = {
    children: React.ReactNode
    title: string
    date: string
    badge?: { label: string, color: string }
}

const Article = (props: Props) => {
    // Computed
    const formatDate = useMemo((): string => {
        const date = new Date(props.date as string)
        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate()
        return `${y}.${m}.${d}`
    }, [props.date])

    // Render
    return (
        <article css={styles} itemScope itemType="http://schema.org/NewsArticle">
            <div className="article-detail">
                <time itemProp="datepublished" dateTime={props.date} className="article-date">{formatDate}</time>
                {props.badge && <UI.Badge model="bg sm" color={props.badge.color}>{props.badge.label}</UI.Badge>}
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

const styles: FlattenSimpleInterpolation = css`
    font-size: 1rem;
    line-height: 2;

    .article-detail {
        display: flex;
        justify-content: between;
        align-items: center;
        gap: 1rem;
        color: ${lighten(0.2, variables.theme.bodyColor)};
        margin-bottom: 1rem;

        ${mixins.darkmode(`
            color: ${darken(0.2, variables.darkTheme.bodyColor)};
        `)}
    }

    .article-date {
        font-size: 1.1em;
        line-height: ${variables.iconSize}px;
    }

    .article-title {
        font-size: 1.2em;
        line-height: 1.5;

        ${mixins.breakpointUp(`
            font-size: 1.7em;
            margin-bottom: 1.5rem;
        `)}
    }

    .article-body {
        img {
            ${mixins.imgFluid()}
        }

        > *:last-child {
            margin-bottom: 0;
        }
    }
`