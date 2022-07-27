import { memo, useMemo } from 'react'
import Icon from '@/components/UI/icon'
import { styles, colorVariant } from './card.style'

type Props = {
    children: React.ReactNode
    model?: string
    color?: string
    href?: string
    title?: string
    icon?: string
    src?: string,
    addClass?: string
}

const Card = (props: Props) => {
    const cardCSS = useMemo(() => {
        const arr = [styles.card]
        props.href && arr.push(styles.link)
        props.color && arr.push(colorVariant(props.color, props.model ? props.model : 'bg'))
        return arr
    }, [props.model, props.color, props.href])

    const cardClass = useMemo(() => {
        const arr = []
        props.href && arr.push('hover-border')
        props.addClass && arr.push(props.addClass)
        return arr.join(' ')
    }, [props.addClass, props.href])

    const renderBody = (
        <>
            {props.src && (
                <figure className="embed embed-16by9 card-thumb">
                    <img src={props.src} alt={props.title ? props.title : ''} />
                </figure>
            )}

            <div className="card-body">
                {props.icon && (
                    <span className="icon">
                        <Icon value={props.icon} />
                    </span>
                )}

                <div className="body">
                    {props.children}
                </div>
            </div>
        </>
    )

    return props.href ? (
        <a css={cardCSS} className={cardClass} href={props.href}>
            {renderBody}
        </a>
    ) : (
        <div css={cardCSS} className={cardClass}>
            {renderBody}
        </div>
    )
}

export default memo(Card)