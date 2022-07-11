import { memo, useRef, useState, useEffect } from 'react'

type Props = {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    placeholder?: string
}

const TextareaAutoSize = (props: Props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [isComposing, setComposing] = useState<boolean>(false)

    const resizeInput = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'

            if (textareaRef.current.scrollHeight > textareaRef.current.offsetHeight) {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
            } else {
                textareaRef.current.style.height = `${48}px`
            }
        }
    }

    useEffect(() => {
        resizeInput()
    }, [])

    return (
        <textarea
            ref={textareaRef}
            className="form-control textarea-autosize"
            rows={1}
            placeholder={props.placeholder}
            onInput={resizeInput}
            onChange={(e) => props.onChange(e)}
            onCompositionStart={() => setComposing(true)}
            onCompositionEnd={() => setComposing(false)}
        />
    )
}

export default memo(TextareaAutoSize)