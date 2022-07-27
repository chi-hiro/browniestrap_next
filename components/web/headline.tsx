import { memo, useMemo } from 'react'
import UI from '@/components/UI'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

type Props = {
    children: React.ReactNode
    model?: string
    date?: string
    href?: string
    badge?: { label: string, color: string }
    rows?: number
}

const Headline = (props: Props) => {
    const formatDate = useMemo(() => {
        const date = new Date(props.date as string)
        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate()
        return `${y}.${m}.${d}`
    }, [props.date])

    const headlineCSS = useMemo(() => {
        const arr = [styles.headline]
        props.model && props.model.split(/\s/).map(model => arr.push(styles[model]))
        return arr
    }, [props.model])

    const renderBody = (
        <div className="headline-item-body">
            <div className="detail">
                {props.badge && <UI.Badge model="bg sm long" color={props.badge.color}>{props.badge.label}</UI.Badge>}
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
        <div css={headlineCSS} className="reveal reveal-fade-up" itemScope itemType="http://schema.org/NewsArticle">
            {props.href ? (
                <a href={props.href} itemProp="url" css={styles.link}>
                    {renderBody}
                </a>
            ) : (
               renderBody
            )}
        </div>
    )
}

export default memo(Headline)

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    headline: css`
        position: relative;

        .headline-item-body {
            position: relative;

            ${mixins.breakpointUp(`
                display: flex;
                align-items: flex-start;
                gap: 2rem;
            `)}

            .detail {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                margin-bottom: 0.75rem;

                ${mixins.breakpointUp(`
                    flex: 0 0 auto;
                    min-width: 200px;
                    margin: 0;
                `)}
            }

            .date {
                display: block;
                font-size: 1rem;
                font-weight: normal;
                color: ${variables.theme.bodyColor};
                line-height: 1;

                ${mixins.transition(['color'])}

                ${mixins.darkmode(`
                    color: ${variables.darkTheme.bodyColor};
                `)}
            }

            .icon {
                position: absolute;
                top: 0;
                right: 0;
                pointer-events: none;

                background-color: ${variables.linkColor};
                ${mixins.rounded('9999px')}
                padding: ${(variables.iconSize - 12 / 2)}px;
                color: white;
                line-height: 0;

                > * {
                    font-size: 12px;
                }
            }

            .title {
                margin: 0;
                font-size: 1rem;
                font-weight: normal;
                line-height: 1.5;
                color: ${variables.theme.headingsColor};

                ${mixins.breakpointUp(`
                    flex: 1 1 auto;
                    font-size: 1rem;
                `)}

                ${mixins.darkmode(`
                    color: ${variables.darkTheme.headingsColor};
                `)}
            }
        }
    `,

    link: css`
        display: block;
        min-height: 100%;

        .hover-underline {
            background-image: url(data:image/svg+xml;charset=utf8,%3Csvg%20height%3D%221%22%20viewBox%3D%220%200%201%201%22%20width%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22m0%200h1v1h-1z%22%20fill%3D%22${mixins.base64encode(variables.theme.headingsColor)}%22%20fill-rule%3D%22evenodd%22%20%2F%3E%3C%2Fsvg%3E);
            background-repeat: no-repeat;
            background-position: right bottom;
            background-size: 0 1px;

            ${mixins.transition(['background-size'])}

            ${mixins.darkmode(`
                background-image: url(data:image/svg+xml;charset=utf8,%3Csvg%20height%3D%221%22%20viewBox%3D%220%200%201%201%22%20width%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22m0%200h1v1h-1z%22%20fill%3D%22${mixins.base64encode(variables.darkTheme.headingsColor)}%22%20fill-rule%3D%22evenodd%22%20%2F%3E%3C%2Fsvg%3E);
            `)}
        }

        ${mixins.focusMouse(`
            .hover-underline {
                background-size: 100% 1px;
            }
        `)}
    `,

    border: css`
        border-top: 1px solid ${variables.theme.borderColor};
        border-bottom: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}

        .headline-item-body {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;

            ${mixins.breakpointUp(`
                padding-top: 2rem;
                padding-bottom: 2rem;
            `)}
        }

        + * {
            border-top: none;
        }
    `
}