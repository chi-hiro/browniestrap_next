import { memo, useMemo } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import { styles, colorVariant } from './loader.style'

type Props = {
    model: string
    color?: string,
    addClass?: string
    rounded?: boolean
    progress?: number
}

const Loader = (props: Props) => {
    const radius = useMemo((): number => {
        return (24 / 2) - (2 * 2)
    }, [props.progress])

    const array = useMemo((): number => {
        return radius * 2 * Math.PI
    }, [props.progress])

    const offset = useMemo((): number => {
        return array - (props.progress ? props.progress : 0) / 100 * array
    }, [props.progress])

    const loaderCSS = useMemo((): FlattenSimpleInterpolation[] => {
        const arr = [styles[props.model]]
        props.color && arr.push(colorVariant(props.color, props.model))
        props.rounded && arr.push(styles[`${props.model}_rounded`])
        return arr
    }, [props.model, props.color, props.progress])

    const loaderClass = useMemo((): string => {
        const arr = []
        props.addClass && arr.push(props.addClass)
        props.progress && arr.push('animate')
        return arr.join(' ')
    }, [props.addClass, props.progress])

    switch (props.model) {
        case 'dot':
            return (
                <div css={loaderCSS} className={loaderClass}>
                    <span></span><span></span><span></span>
                </div>
            )

        case 'line':
            return (
                <div css={loaderCSS} className={loaderClass}>
                    <span className="loader-line-active"></span>
                </div>
            )

        case 'bar':
            return (
                <div css={loaderCSS} className={loaderClass}>
                    <span className="loader-bar-active" style={{ width: `${props.progress}%` }}></span>
                </div>
            )

        case 'circle':
            return (
                <div css={loaderCSS} className={loaderClass}>
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
                <svg css={loaderCSS} className={loaderClass} viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
                </svg>
            )
    }
}

export default memo(Loader)