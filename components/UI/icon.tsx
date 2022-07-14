import { memo } from 'react'

type Props = {
    value: string
}

const type: string = 'rounded'

const materialClass: {[key: string]: string} = {
    'rounded': 'material-icons-round',
    'outlined': 'material-icons-outlined',
    'sharp': 'material-icons-sharp',
    'two-tone': 'material-icons-two-tone',
    'default': 'material-icons'
}

const Icon = (props: Props) => <span className={`${materialClass[type]} font-icon`}>{props.value}</span>

export default memo(Icon)