import { memo, useRef, useState, useEffect, forwardRef } from 'react'

type Props = {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    name: string
    combobox?: boolean
    placeholder: string
}

const TextareaAutoSize = forwardRef((props: Props, ref: React.Ref<HTMLTextAreaElement>) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [isComposing, setComposing] = useState<boolean>(false)

    const resizeInput = () => {
        const textarea = ref ? ref as React.RefObject<HTMLTextAreaElement> : textareaRef

        if (textarea.current) {
            textarea.current.style.height = 'auto'

            if (textarea.current.scrollHeight > textarea.current.offsetHeight) {
                textarea.current.style.height = `${textarea.current.scrollHeight}px`
            } else {
                textarea.current.style.height = `${48}px`
            }
        }
    }

    useEffect(() => {
        resizeInput()
    }, [])

    const renderTextarea = (
        <textarea
            ref={ref ? ref : textareaRef}
            name={props.name}
            className="form-control textarea-autosize"
            rows={1}
            placeholder={!props.combobox ? props.placeholder : ''}
            onInput={resizeInput}
            onChange={(e) => props.onChange && props.onChange(e)}
            onCompositionStart={() => setComposing(true)}
            onCompositionEnd={() => setComposing(false)}
        />
    )

    return props.combobox ? (
        <div className="form-combine">
            {renderTextarea}
            <label htmlFor={`form-combine-${props.name}`}>{props.placeholder}</label>
        </div>
    ) : (
        <>{renderTextarea}</>
    )
})

export default memo(TextareaAutoSize)