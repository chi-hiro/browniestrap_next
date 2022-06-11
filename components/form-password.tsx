import { memo, useRef, useState } from 'react'
import Icon from 'components/icon'

type Props = {
    children: React.ReactNode
}

const FormPassword = (props: Props) => {
    const [type, setType] = useState<string>('password')

    const toggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const form = (e.currentTarget as HTMLElement).parentElement?.querySelector('.form-control')

        if (form) {
            const newtype = form.getAttribute('type') == 'password' ? 'text' : 'password'
            setType(newtype)
            form.setAttribute('type', newtype)
        }
    }

    return (
        <div className="form-combine form-combine-after">
            {props.children}

            <button type="button" className="form-combine-icon" onClick={toggle} tabIndex={-1}>
                <Icon value={type === 'password' ? 'visibility_off' : 'visibility'} />
            </button>
        </div>
    )
}

export default memo(FormPassword)