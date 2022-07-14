import { forwardRef, useState, useEffect, useMemo, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { toggleScrollbarSpacer } from 'lib/toggleScrollbarSpacer'
import Icon from '@/components/UI/icon'

type Props = {
    children: React.ReactNode
    title?: string
    close?: boolean
}

export type ModalRefTypes = {
    show: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
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
            <div className={`modal ${isDouble ? 'modal-double' : ''}`}>
                <div className="modal-mask" style={positionStyle}>
                    <div className="modal-inner">
                        {props.title && (
                            <div className="modal-header">
                                <h6 className="modal-header-title">{props.title}</h6>

                                {props.close && (
                                    <button v-if="props.closebtn" type="button" className="btn btn-icon-only modal-close" onClick={hide}>
                                        <Icon value="close" />
                                    </button>
                                )}
                            </div>
                        )}

                        {props.children}
                    </div>

                    <span className="modal-over" onClick={() => props.close && hide()} />
                </div>
            </div>
        </CSSTransition>,
        portal
    ) : null
})

export const ModalBody = (props: { children: React.ReactNode, scroll?: boolean, theme?: string }) => (
    <div className={`modal-body ${props.scroll ? 'scroll' : ''}`}>
        <div className={`inner ${props.theme ? props.theme : ''}`}>
            {props.children}
        </div>
    </div>
)

export const ModalFooter = (props: { children: React.ReactNode }) => (
    <div className="modal-footer">
        {props.children}
    </div>
)