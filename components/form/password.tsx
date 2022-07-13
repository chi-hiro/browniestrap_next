import { memo, useMemo, useState, forwardRef } from 'react'
import Icon from '@/components/UI/icon'


type Props = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    size?: string
    combobox?: boolean,
    placeholder: string
}

const FormPassword = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const [type, setType] = useState<string>('password')

    const toggle = () => {
        setType(type === 'password' ? 'text' : 'password')
    }

    const inputClass = useMemo(() => {
        const classes = ['form-control']
        props.size && classes.push(`form-control-${props.size}`)
        return classes.join(' ')
    }, [props.size])

    return (
        <div className="form-combine form-combine-after">
            <input ref={ref} type={type} name="password" id="form-combine-password" placeholder={!props.combobox ? props.placeholder : ''} onChange={(e) => props.onChange && props.onChange(e)} className={inputClass} />

            {props.combobox && <label htmlFor="form-combine-password">{props.placeholder}</label>}

            <button type="button" className="form-combine-icon" onClick={toggle} tabIndex={-1}>
                <Icon value={type === 'password' ? 'visibility_off' : 'visibility'} />
            </button>
        </div>
    )
})

export default memo(FormPassword)