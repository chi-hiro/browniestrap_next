import { memo, useMemo, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { env } from 'lib/env'
import Icon from '@/components/UI/icon'
import { styles } from './expansion.style'

type Props = {
    children: React.ReactNode
    model?: string
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

    const expansionCSS = useMemo(() => {
        const arr = [styles.expansion]
        props.model && arr.push(styles[props.model])
        return arr
    }, [props.model])

    const expansionClass = useMemo(() => {
        const arr = []
        isShow && arr.push('show')
        props.locked && arr.push('lock')
        return arr.join(' ')
    }, [isShow, props.locked])

    // Hooks
    useEffect(() => {
        props.opened && setShow(true)
    }, [props.opened])

    useEffect(() => {
        if (props.model === 'popup') {
            isShow && window.setTimeout(() => document.body.addEventListener('click', hide), 300)
            return () => document.body.removeEventListener('click', hide)
        }
    }, [isShow])

    // Render
    return (
        <div css={expansionCSS} className={expansionClass} onMouseLeave={hideHover}>
            <button type="button" className="expansion-toggler" onClick={toggle} onMouseEnter={showHover} tabIndex={props.locked ? -1 : 0}>
                {props.title && props.title}

                {!props.locked && (<span className="icon">
                    <Icon value={props.model === 'popup' ? 'more_horiz' : 'expand_more'} />
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