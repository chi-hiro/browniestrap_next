import { memo, useMemo } from 'react'

type Props = {
    type: string,
    progress?: number
    rounded?: boolean
}

const Loader = (props: Props) => {
    // Methods
    const radius = () => {
        return (24 / 2) - (2 * 2)
    }

    const array = () => {
        return radius() * 2 * Math.PI
    }

    // Computed
    const offset = useMemo(() => {
        return array() - (props.progress ? props.progress : 0) / 100 * array()
    }, [props.progress])

    const renderLoader = useMemo(() => {
        switch (props.type) {
            case 'dot':
                return (
                    <div className={`loader loader-dot ${props.rounded ? 'rounded-full' : ''}`}>
                        <span></span><span></span><span></span>
                    </div>
                )

            case 'line':
                return (
                    <div className={`loader loader-line ${props.rounded ? 'rounded-full' : ''}`}>
                        <span className="loader-line-active"></span>
                    </div>
                )

            case 'bar':
                return (
                    <div className={`loader loader-bar ${props.rounded ? 'rounded-full' : ''} ${props.progress ? 'animate' : ''}`}>
                        <span className="loader-bar-active" style={{ width: `${props.progress}%` }}></span>
                    </div>
                )

            case 'circle':
                return (
                    <div className={`loader loader-circle ${props.progress ? 'animate' : ''}`}>
                        <svg className="loader-circle-base">
                            <circle cx="12" cy="12" fill="transparent" r={radius()}></circle>
                        </svg>

                        <svg className="loader-circle-active">
                            <circle cx="12" cy="12" fill="transparent" r={radius()} strokeDasharray={array()} strokeDashoffset={offset}></circle>
                        </svg>
                    </div>
                )

            default:
                return (
                    <svg className={`loader loader-spin`} viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                )
        }
    }, [props.progress])

    // Render
    return renderLoader
}

export default memo(Loader)