import { memo, useMemo, forwardRef } from 'react'

type Props = {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    type: string
    size?: string
    name: string
    placeholder: string,
    theme?: string
}

const ComboBox = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const inputClass = useMemo(() => {
        const classes = ['form-control']
        props.size && classes.push(`form-control-${props.size}`)
        props.theme && classes.push(props.theme)
        return classes.join(' ')
    }, [props.size, props.theme])

    return (
        <div className="form-combine">
            <input ref={ref} type={props.type} name={props.name} id={`form-combine-${props.name}`} className={inputClass} />
            <label htmlFor={`form-combine-${props.name}`}>{ props.placeholder }</label>
        </div>
    )
})

export default memo(ComboBox)