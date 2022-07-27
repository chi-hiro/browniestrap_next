import { memo, useMemo, useState, useEffect, forwardRef, useRef } from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'
import { inputSize, styles, colorVariant } from './form.style'
import Icon from '@/components/UI/icon'

type Props = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    type?: string
    model?: string
    name: string
    value?: string | number,
    option?: Array<{ value: string | number, label?: string }>,
    label?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    maxlength?: number
    readonly?: boolean
    help?: string
    feedback?: { color: string, message?: string }
    startIcon?: JSX.Element
    endIcon?: JSX.Element
}

const TextField = forwardRef((props: Props, ref: React.Ref<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const boxRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const [size, setSize] = useState<string>('md')
    const [isFocus, setFocus] = useState<boolean>(false)
    const [length, setLength] = useState<number>(0)
    const [passType, setPassType] = useState<string>('password')

    const togglePassword = () => {
        setPassType(passType === 'password' ? 'text' : 'password')
    }

    const isInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFocus(e.currentTarget.value ? true : false)
        props.maxlength && setLength(e.currentTarget.value.length)
    }

    const resizeInput = () => {
        const textarea = ref ? ref as React.RefObject<HTMLTextAreaElement> : textareaRef
        if (textarea.current) {
            setFocus(textarea.current.value ? true : false)
            props.maxlength && setLength(textarea.current.value.length)
            textarea.current.style.height = 'auto'
            textarea.current.style.height = textarea.current.scrollHeight > textarea.current.offsetHeight
                ? `${textarea.current.scrollHeight}px`
                : `${variables.input[size].height}px`
        }
    }

    const setInputLength = () => {
        const input = props.type === 'textarea'
            ? ref ? ref as React.RefObject<HTMLTextAreaElement> : textareaRef
            : ref ? ref as React.RefObject<HTMLInputElement> : inputRef
        input.current && setLength(input.current.value.length)
    }

    const boxCSS = useMemo(() => {
        const arr = [boxStyles.box, boxSizeVariant(size)]
        props.feedback && arr.push(feedbackColorVariant(props.feedback.color))
        props.startIcon && arr.push(boxWithStartIcon(size))
        if (props.endIcon || props.type === 'password') arr.push(boxWithEndIcon(size))
        isFocus && arr.push(boxStyles.boxFocused)
        return arr
    }, [props.type, props.model, props.feedback, props.startIcon, props.endIcon, size, isFocus])

    const inputCSS = useMemo(() => {
        const arr = [styles.input, inputSize[size]]
        props.type === 'select' && arr.push(styles.select)
        props.type === 'textarea' && arr.push(styles.textarea)
        props.feedback && arr.push(colorVariant(props.feedback.color))
        props.startIcon && arr.push(inputWithStartIcon(size))
        if (props.endIcon || props.type === 'password') arr.push(inputWithEndIcon(size))
        !isFocus && arr.push(boxStyles.input)
        return arr
    }, [props.type, props.model, props.feedback, props.startIcon, props.endIcon, size, isFocus])

    useEffect(() => {
        setSize(props.model ? props.model : 'md')
    }, [props.model])

    useEffect(() => {
        if (props.disabled || props.readonly || props.feedback || props.type === 'select') setFocus(true)
        if (props.type === 'textarea') resizeInput()
        if (props.type !== 'select' && props.maxlength) setInputLength()
    }, [props.disabled, props.readonly, props.feedback, props.type])

    const renderInput = () => {
        if (props.type === 'select') {
            return (
                <select
                    ref={ref as React.Ref<HTMLSelectElement>}
                    css={inputCSS}
                    name={props.name}
                    id={`textfield-${props.name}`}
                    value={props.value}
                    required={props.required}
                    disabled={props.disabled}
                    onChange={props.onChange && props.onChange}
                >
                    {props.option && props.option.map(item => (
                        <option key={item.value} value={item.value}>{item.label ? item.label : item.value}</option>
                    ))}
                </select>
            )
        } else if (props.type === 'textarea') {
            return (
                <textarea
                    ref={ref ? ref as React.Ref<HTMLTextAreaElement> : textareaRef}
                    css={inputCSS}
                    rows={1}
                    name={props.name}
                    id={`textfield-${props.name}`}
                    value={props.value}
                    placeholder={props.placeholder && props.placeholder}
                    required={props.required}
                    disabled={props.disabled}
                    readOnly={props.readonly}
                    maxLength={props.maxlength}
                    onInput={resizeInput}
                    onChange={props.onChange && props.onChange}
                />
            )
        } else {
            return (
                <input
                    ref={ref ? ref as React.Ref<HTMLInputElement> : inputRef}
                    css={inputCSS}
                    type={props.type ? (props.type === 'password' ? passType : props.type) : 'text'}
                    name={props.name}
                    value={props.value}
                    id={`textfield-${props.name}`}
                    placeholder={props.placeholder && props.placeholder}
                    required={props.required}
                    disabled={props.disabled}
                    readOnly={props.readonly}
                    maxLength={props.maxlength}
                    onInput={isInput}
                    onChange={props.onChange && props.onChange}
                />
            )
        }
    }

    return (
        <div ref={boxRef} css={boxCSS}>
            {renderInput()}

            {(props.label || props.feedback || props.maxlength) && (<label css={inputSize[props.model ? props.model : 'md']} htmlFor={`textfield-${props.name}`}>
                {props.label && props.label}
                {props.required && '*'}
                {props.maxlength && <span className="length">{`(${length}/${props.maxlength})`}</span>}
                {props.feedback?.message && <span css={[styles.feedback, feedbackMessageVariant(props.feedback.color)]}>{props.feedback.message}</span>}
            </label>)}

            {props.startIcon && <span css={[boxStyles.icon, boxStyles.startIcon, iconSizeVariant(size)]}>{props.startIcon}</span>}
            {props.endIcon && <span css={[boxStyles.icon, boxStyles.endIcon, iconSizeVariant(size)]}>{props.endIcon}</span>}

            {props.type === 'password' && (
                <button css={[boxStyles.icon, boxStyles.iconBtn, boxStyles.endIcon, iconSizeVariant(size)]} type="button" tabIndex={-1} onClick={togglePassword}>
                    <Icon value={passType === 'password' ? 'visibility_off' : 'visibility'} />
                </button>
            )}

            {props.help && <small css={styles.help}>{props.help}</small>}
        </div>
    )
})

export default memo(TextField)

const focusLabelStyle = `
    top: ${-variables.input.md.padding + (12 / 2)}px;
    left: ${variables.input.inputPaddingX + variables.borderWidth}px;
    padding: 0 0.25rem !important;
    font-size: 0.75rem;
    height: auto;
    line-height: 1;
    color: inherit;
    background-color: white;
    pointer-events: none;

    display: flex;
    align-items: flex-end;
    gap: 0.25rem;

    ${mixins.darkmode(`
        background-color: black;
    `)}

    .length {
        display: inline-block;
    }
`

export const boxStyles: { [key: string]: FlattenSimpleInterpolation } = {
    box: css`
        position: relative;

        label {
            position: absolute;
            z-index: 2;
            top: ${variables.borderWidth}px;
            left: ${variables.borderWidth}px;
            pointer-events: none;

            font-weight: normal;
            color: ${variables.theme.mutedColor};

            ${mixins.darkmode(`
                color: ${variables.darkTheme.mutedColor};
            `)}

            .length {
                display: none;
            }
        }
    `,

    boxFocused: css`
        label {
            ${focusLabelStyle}
        }
    `,

    input: css`
        &:focus + label {
            ${focusLabelStyle}
        }
    `,

    icon: css`
        position: absolute;
        z-index: 2;
        top: 0;
        pointer-events: none;

        > * {
            transform: scale(0.75);
        }

        img {
            width: 24px;
            height: 24px;
            object-fit: cover;
        }
    `,

    iconBtn: css`
        pointer-events: auto;
        appearance: none;
        border: none;
        background: none;
        cursor: pointer;
        display: block;

        ${mixins.hoverMouse(`
            color: ${variables.linkHoverColor};
        `)}
    `,

    startIcon: css`
        left: 0;
    `,

    endIcon: css`
        right: 0;
    `
}

const boxSizeVariant = (size: string) => {
    return `
        label {
            ${inputSize[size]}
        }
    `
}

const boxWithStartIcon = (size: string) => {
    return `
        label {
            ${inputWithStartIcon(size)}
        }
    `
}

const boxWithEndIcon = (size: string) => {
    return `
        label {
            ${inputWithEndIcon(size)}
        }
    `
}

const iconSizeVariant = (size: string) => {
    switch (size) {
        case 'sm':
            return `
                width: ${variables.input.sm.height}px;
                height: ${variables.input.sm.height}px;
                padding: ${(variables.input.sm.height - variables.iconSize) / 2}px;
            `
        case 'lg':
            return `
                width: ${variables.input.lg.height}px;
                height: ${variables.input.lg.height}px;
                padding: ${(variables.input.lg.height - variables.iconSize) / 2}px;
            `
        default:
            return `
                width: ${variables.input.md.height}px;
                height: ${variables.input.md.height}px;
                padding: ${(variables.input.md.height - variables.iconSize) / 2}px;
            `
    }
}

const feedbackColorVariant = (color: string) => {
    return `
        color: ${variables.color[color]};
    `
}

const feedbackMessageVariant = (color: string) => {
    return `
        background-color: ${variables.color[color]};

        &::after {
            border-color: transparent transparent ${variables.color[color]} transparent;
        }
    `
}

const inputWithStartIcon = (size: string) => {
    switch (size) {
        case 'sm':
            return `padding-left: ${variables.input.sm.height}px;`
        case 'lg':
            return `padding-left: ${variables.input.lg.height}px;`
        default:
            return `padding-left: ${variables.input.md.height}px;`
    }
}

const inputWithEndIcon = (size: string) => {
    switch (size) {
        case 'sm':
            return `padding-right: ${variables.input.sm.height}px;`
        case 'lg':
            return `padding-right: ${variables.input.lg.height}px;`
        default:
            return `padding-right: ${variables.input.md.height}px;`
    }
}