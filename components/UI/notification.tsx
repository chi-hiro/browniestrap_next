import { useRef, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import Icon from '@/components/UI/icon'
import { styles, colorVariant } from './card.style'

type Props = {
    color: string
    children: React.ReactNode
    position?: string
}

const icon: {[key: string]: string} = {
    info: 'info',
    success: 'check_circle',
    warning: 'warning',
    danger: 'cancel'
}

const Notification = (props: Props) => {
    // Ref
    const el = useRef<HTMLDivElement>(null)

    // State
    const [isShow, setShow] = useState<boolean>(false)

    // Methods
    const show = () => {
        setShow(true)
        window.setTimeout(() => hide(), 4000)
    }

    const hide = () => {
        setShow(false)
        window.setTimeout(() => dismiss(), 300)
    }

    const dismiss = () => {
        el.current?.remove()
        const container = document.querySelector('.notification-container')
        container?.childNodes.length == 0 && container.remove()
    }

    // Hooks
    useEffect(() => {
        if (!document.querySelector('.notification-container')) {
            const container = document.createElement('div')
            container.classList.add('notification-container', props.position ? props.position : 'top')
            document.body.appendChild(container)
        }

        document.querySelector('.notification-container')?.insertAdjacentElement('beforeend', el.current!)
        document.querySelector('.notification-dummy')?.remove()
        window.setTimeout(() => show(), 100)
    }, [])

    // Render
    return (
        <CSSTransition classNames="notification" in={isShow} timeout={300}>
            <div ref={el} css={[styles.card, styles.notification, colorVariant(props.color, 'bg')]}>
                <div className="flex justify-between items-center card-body">
                    <span className="icon">
                        <Icon value={icon[props.color]} />
                    </span>

                    <div className="flex-1 body">
                        {props.children}
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Notification