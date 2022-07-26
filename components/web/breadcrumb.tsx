import { memo } from 'react'
import Link from 'next/link'
import Icon from '@/components/UI/icon'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

type Props = {
    homeicon?: boolean
    src: Array<{
        name: string,
        url: string
    }>
}

const Breadcrumb = (props: Props) => {
    return (
        <ol itemScope itemType="http://schema.org/BreadcrumbList" css={styles}>
            {props.src.map((item, index) => (
                <li className={Number(index) + 1 === props.src.length ? 'active' : ''} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" key={`breadcrumb-item${index}`}>
                    {(props.homeicon && index === 0) && <Icon value="home" />}
                    <Link href={item.url}>
                        <a itemProp="item"><span itemProp="name">{item.name}</span></a>
                    </Link>
                    <meta itemProp="position" content={String(Number(index) + 1)} />
                </li>
            ))}
        </ol>
    )
}

export default memo(Breadcrumb)

const styles: FlattenSimpleInterpolation = css`
    margin: 1rem 0;
    padding: 0;
    list-style: none;
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;

    li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        font-size: 0.875rem;
        line-height: ${variables.iconSize}px;
        ${mixins.textKerning()}

        a {
            color: ${variables.theme.bodyColor};

            ${mixins.focusMouse(`
                color: ${variables.linkHoverColor}
            `)}
        }

        + li::before {
            display: block;
            padding-right: 0.75rem;
            padding-left: 0.75rem;
            content: "/";
            opacity: 0.3;
        }
    }
`