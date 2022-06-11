import { memo, useMemo } from 'react'

type Props = {
    value: string
}

const Icon = (props: Props) => {
    const font: string = 'rounded'

    const materialClass = useMemo(() => {
        switch(font) {
            case 'rounded':
                return 'material-icons-round'

            case 'outlined':
                return 'material-icons-outlined'

            case 'sharp':
                return 'material-icons-sharp'

            case 'two-tone':
                return 'material-icons-two-tone'

            default:
                return 'material-icons'
        }
    }, [])

    return <span className={materialClass}>{props.value}</span>
}

export default memo(Icon)