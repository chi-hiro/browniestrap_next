import { memo, useMemo, forwardRef } from 'react'

type Props = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string
    name: string
    value: string
    label: string
    checked?: boolean
    theme?: string
}

const Checkbox = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    return (
        <div className={`form-control-checkbox ${props.theme}`}>
            <input ref={ref} type={props.type ? props.type : 'checkbox'} name={props.name} id={props.value} defaultChecked={props.checked} onChange={(e) => props.onChange && props.onChange(e)} />
            <label htmlFor={props.value}>{props.label}</label>
        </div>
    )
})

export default memo(Checkbox)