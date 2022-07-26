import { forwardRef, useState, useEffect, useMemo, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { toggleScrollbarSpacer } from 'lib/toggleScrollbarSpacer'
import Icon from '@/components/UI/icon'
import { styles } from './modal.style'
import UI from '../UI'

type Props = {
    children: React.ReactNode
    title?: string
    close?: boolean
}

export type ModalRefTypes = {
    show: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void,
    hide: () => void
}

export const Modal = forwardRef((props: Props, ref) => {
    // State
    const [portal, setPortal] = useState<HTMLElement>()
    const [pos, setPos] = useState<number[]>([0, 0])
    const [isShow, setShow] = useState<boolean>(false)
    const [isDouble, setDouble] = useState<boolean>(false)

    // Methods
    const show = async(e: MouseEvent) => {
        e && setPos([
            Math.round(100 / window.innerWidth * e.clientX),
            Math.round(100 / window.innerHeight * e.clientY)
        ])

        setShow(true)
        return await controlScrollbar(true)
    }

    const hide = async() => {
        setShow(false)
        return await controlScrollbar(false)
    }

    const controlScrollbar = async(value: boolean) => {
        let doubleCheck: boolean

        if (value) {
            doubleCheck = document.body.classList.contains('hide_scrollbar') ? true : false
            setDouble(doubleCheck)
        } else {
            doubleCheck = isDouble
        }

        if (doubleCheck) {
            return false
        } else {
            return await toggleScrollbarSpacer(value)
        }
    }

    // Hooks
    const positionStyle = useMemo((): {[key: string]: string} => {
        return { '--path': `${pos[0]}% ${pos[1]}%` }
    }, [pos])

    useEffect(() => {
        setPortal(document.body)
    }, [])

    // Binding
    useImperativeHandle(ref, () => ({
        show,
        hide
    }))

    // Render
    return portal ? createPortal(
        <CSSTransition classNames="modal" in={isShow} timeout={400} unmountOnExit>
            <div css={styles.modal} className={isDouble ? 'modal-double' : ''}>
                <div css={styles.mask} style={positionStyle}>
                    <div css={styles.inner}>
                        {props.title && (
                            <div css={styles.header}>
                                <h6 className="modal-header-title">{props.title}</h6>

                                {props.close && (
                                    <UI.Button model="icon" addClass="modal-close" onClick={hide}>
                                        <Icon value="close" />
                                    </UI.Button>
                                )}
                            </div>
                        )}

                        {props.children}
                    </div>

                    <span css={styles.overlay} onClick={() => props.close && hide()} />
                </div>
            </div>
        </CSSTransition>,
        portal
    ) : null
})

export const ModalBody = (props: { children: React.ReactNode, scroll?: boolean, theme?: string }) => (
    <div css={styles.body} className={props.scroll ? 'scroll' : ''}>
        <div className={`inner ${props.theme ? props.theme : ''}`}>
            {props.children}
        </div>
    </div>
)

export const ModalFooter = (props: { children: React.ReactNode }) => (
    <div css={styles.footer}>
        {props.children}
    </div>
)