import { memo, useState } from 'react'
import Icon from '@/components/UI/icon'

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string
}

const FormPassword = (props: Props) => {
    const [type, setType] = useState<string>('password')

    const toggle = () => {
        setType(type === 'password' ? 'text' : 'password')
    }

    return (
        <div className="form-combine form-combine-after">
            <input type={type} className="form-control" placeholder={props.placeholder} onChange={(e) => props.onChange(e)} />

            <button type="button" className="form-combine-icon" onClick={toggle} tabIndex={-1}>
                <Icon value={type === 'password' ? 'visibility_off' : 'visibility'} />
            </button>
        </div>
    )
}

export default memo(FormPassword)