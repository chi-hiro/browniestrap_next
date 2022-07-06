import { useRef, useState, useMemo, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import Icon from 'components/icon'

type Props = {
    theme: string
    children: React.ReactNode
    position?: string
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

    // Computed
    const icon = useMemo(() => {
        switch (props.theme) {
            case 'success':
                return 'check_circle'

            case 'warning':
                return 'warning'

            case 'danger':
                return 'cancel'

            default:
                return 'info'
        }
    }, [props.theme])

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
            <div ref={el} className={`card card-notification bg-${props.theme}`}>
                <div className="flex justify-between items-center card-body">
                    <span className="icon">
                        <Icon value={icon} />
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