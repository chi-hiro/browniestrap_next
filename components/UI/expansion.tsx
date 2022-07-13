import { memo, useMemo, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { env } from 'lib/env'
import Icon from '@/components/UI/icon'

type Props = {
    children: React.ReactNode
    type?: string
    title?: string
    href?: string
    hover?: boolean
    opened?: boolean
    locked?: boolean
}

const Expansion = (props: Props) => {
    // State
    const [isShow, setShow] = useState<boolean>(false)
    const [height, setHeight] = useState<string>('')

    // Methods
    const beforeEnter = () => setHeight('0')
    const enter = (e: HTMLElement) => setHeight(e.scrollHeight + 'px')
    const afterEnter = () => setHeight('')
    const beforeLeave = (e: HTMLElement) => setHeight(e.scrollHeight + 'px')
    const leave = () => setHeight('0')

    const show = () => !props.locked && setShow(true)
    const hide = () => !props.locked && setShow(false)

    const toggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.currentTarget as HTMLElement

        if (!props.href) {
            target.blur()
        } else {
            window.location.href = props.href
        }

        if (!props.locked) setShow(!isShow)
    }

    const showHover = () => (props.hover && !env('touch')) && show()
    const hideHover = () => props.hover && hide()

    const expansionClass = useMemo(() => {
        const classes = ['expansion']
        isShow && classes.push('show')
        props.locked && classes.push('lock')
        props.type && classes.push(`expansion-${props.type}`)
        return classes.join(' ')
    }, [isShow, props.type, props.locked])

    // Hooks
    useEffect(() => {
        props.opened && setShow(true)
    }, [props.opened])

    useEffect(() => {
        if (props.type === 'popup') {
            isShow && window.setTimeout(() => document.body.addEventListener('click', hide), 300)
            return () => document.body.removeEventListener('click', hide)
        }
    }, [isShow])

    // Render
    return (
        <div className={expansionClass} onMouseLeave={hideHover}>
            <button type="button" className="expansion-toggler" onClick={toggle} onMouseEnter={showHover} tabIndex={props.locked ? -1 : 0}>
                {props.title && props.title}

                {!props.locked && (<span className="icon">
                    <Icon value={props.type === 'popup' ? 'more_horiz' : 'expand_more'} />
                </span>)}
            </button>

            <CSSTransition classNames="expansion-body" in={isShow} timeout={300} onEnter={beforeEnter} onEntering={enter} onEntered={afterEnter} onExit={beforeLeave} onExiting={leave} unmountOnExit>
                <div className="expansion-body" style={{ height }}>
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    )
}

export default memo(Expansion)