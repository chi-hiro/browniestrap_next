import { memo, useMemo } from 'react'
import Icon from '@/components/UI/icon'
import { FlattenSimpleInterpolation } from 'styled-components'
import { styles, colorVariant } from './card.style'
import { utility } from 'lib/styleUtl'

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
    const cardCSS = useMemo((): FlattenSimpleInterpolation[] => {
        const arr = [styles.card]
        props.href && arr.push(styles.link)
        props.href && arr.push(utility.hoverBorder)
        props.color && arr.push(colorVariant(props.color, props.model ? props.model : 'bg'))
        return arr
    }, [props.model, props.color, props.href])

    const cardClass = useMemo((): string => {
        const arr = []
        props.addClass && arr.push(props.addClass)
        return arr.join(' ')
    }, [props.addClass, props.href])

    const renderBody = (
        <>
            {props.src && (
                <figure css={utility.embed(16, 9)} className="card-thumb">
                    <img src={props.src} alt={props.title ? props.title : ''} width="640" height="360" loading="lazy" />
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