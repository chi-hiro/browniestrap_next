import { memo, useMemo } from 'react'

type Props = {
    variant: string
    theme?: string
    progress?: number
}

const Loader = (props: Props) => {
    const radius = useMemo(() => {
        return (24 / 2) - (2 * 2)
    }, [props.progress])

    const array = useMemo(() => {
        return radius * 2 * Math.PI
    }, [props.progress])

    const offset = useMemo(() => {
        return array - (props.progress ? props.progress : 0) / 100 * array
    }, [props.progress])

    switch (props.variant) {
        case 'dot':
            return (
                <div className={`loader loader-dot ${props.theme}`}>
                    <span></span><span></span><span></span>
                </div>
            )

        case 'line':
            return (
                <div className={`loader loader-line ${props.theme}`}>
                    <span className="loader-line-active"></span>
                </div>
            )

        case 'bar':
            return (
                <div className={`loader loader-bar ${props.theme} ${props.progress ? 'animate' : ''}`}>
                    <span className="loader-bar-active" style={{ width: `${props.progress}%` }}></span>
                </div>
            )

        case 'circle':
            return (
                <div className={`loader loader-circle ${props.theme} ${props.progress ? 'animate' : ''}`}>
                    <svg className="loader-circle-base">
                        <circle cx="12" cy="12" fill="transparent" r={radius} />
                    </svg>

                    <svg className="loader-circle-active">
                        <circle cx="12" cy="12" fill="transparent" r={radius} strokeDasharray={array} strokeDashoffset={offset} />
                    </svg>
                </div>
            )

        default:
            return (
                <svg className={`loader loader-spin ${props.theme}`} viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
                </svg>
            )
    }
}

export default memo(Loader)