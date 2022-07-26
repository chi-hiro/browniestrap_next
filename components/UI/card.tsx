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
        const arr = [props.href ? styles.linkCard : styles.card]
        arr.push(colorVariant(props.color ? props.color : 'white', props.model ? props.model : 'bg'))
        return arr
    }, [props.model, props.color, props.href])

    const renderBody = (
        <>
            {props.src && (
                <figure className="embed embed-16by9 card-thumb">
                    <img src={props.src} alt={props.title ? props.title : ''} />
                </figure>
            )}

            <div className={`flex justify-between card-body ${props.icon ? 'items-center' : ''}`}>
                {props.icon && (
                    <span className="icon">
                        <Icon value={props.icon} />
                    </span>
                )}

                <div className="flex-1 body">
                    {props.children}
                </div>
            </div>
        </>
    )

    return props.href ? (
        <a css={cardCSS} className={`hover-border ${props.addClass ? props.addClass : ''}`} href={props.href}>
            {renderBody}
        </a>
    ) : (
        <div css={cardCSS} className={props.addClass ? props.addClass : ''}>
            {renderBody}
        </div>
    )
}

export default memo(Card)