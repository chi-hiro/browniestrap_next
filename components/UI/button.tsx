import { memo, useMemo } from 'react'
import UI from '.'
import { styles, colorVariant } from './button.style'

type Props = {
    onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void
    children: React.ReactNode
    model?: string
    color?: string
    startIcon?: JSX.Element
    endIcon?: JSX.Element
    href?: string
    addClass?: string,
    loading?: boolean
    disabled?: boolean
}

const Button = (props: Props) => {
    const buttonCSS = useMemo(() => {
        const arr = [styles.button]
        const models = (props.model ? props.model : 'bg md')
        const modelArr = models.split(/\s/)
        modelArr.map(item => arr.push(styles[`button_${item}`]))
        if (props.color) {
            arr.push(colorVariant(props.color, models))
        }
        return arr
    }, [props.model, props.color])

    const buttonClass = useMemo(() => {
        const arr = []
        props.addClass && arr.push(props.addClass)
        props.loading && arr.push('connecting')
        props.disabled && arr.push('disabled')
        return arr.join(' ')
    }, [props.addClass, props.loading])

    const loaderColor = useMemo(() => {
        if (props.model?.includes('bg')) {
            return props.color === 'white' ? 'primary' : 'white'
        } else if (props.model?.includes('border')) {
            return props.color === 'white' ? 'white' : props.color
        } else {
            return 'primary'
        }
    }, [props.model, props.color])

    const content = props.loading ? (
        <UI.Loader model="spin" color={loaderColor} />
    ) : (
        <>
            {props.startIcon && <span className="icon">{props.startIcon}</span>}
            <span className="text">{props.children}</span>
            {props.endIcon && <span className="icon">{props.endIcon}</span>}
        </>
    )

    return props.href
        ? <a href={props.href} css={buttonCSS} className={buttonClass} onClick={props.onClick && props.onClick}>{content}</a>
        : <button css={buttonCSS} className={buttonClass} type="button" onClick={props.onClick && props.onClick} disabled={props.disabled}>{content}</button>
}

export default memo(Button)