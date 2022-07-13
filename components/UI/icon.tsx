import { memo, useMemo } from 'react'

type Props = {
    value: string
}

const Icon = (props: Props) => {
    const type: string = 'rounded'

    const materialClass: {[key: string]: string} = {
        'rounded': 'material-icons-round',
        'outlined': 'material-icons-outlined',
        'sharp': 'material-icons-sharp',
        'two-tone': 'material-icons-two-tone',
        'default': 'material-icons'
    }

    return <span className={[materialClass[type], 'font-icon'].join(' ')}>{props.value}</span>
}

export default memo(Icon)