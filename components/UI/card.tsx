import { memo, forwardRef } from 'react'
import Link from 'next/link'
import Icon from '@/components/UI/icon'

type Props = {
    children: React.ReactNode
    href?: string
    title?: string
    icon?: string
    src?: string
    theme?: string
}

const Card = forwardRef((props: Props, ref) => {
    // Render
    const renderBody = (
        <>
            {(props.src && props.title) && (
                <figure className="embed embed-16by9 card-thumb">
                    <img src={props.src} alt={props.title} width="640" height="360" />
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
        <Link href={props.href}>
            <a className={`card hover-border ${props.theme}`}>
                {renderBody}
            </a>
        </Link>
    ) : (
        <div className={`card ${props.theme}`}>
            {renderBody}
        </div>
    )
})

export default memo(Card)