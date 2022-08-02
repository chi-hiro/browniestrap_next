import { memo, useMemo } from 'react'
import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins, utility } from '@/lib/styleUtl'

type Props = {
    model?: string
    animate?: boolean
    line?: number
    ratio?: number[]
    addClass?: string
    width?: string
    height?: string
}

const Skelton = (props: Props) => {
    const skeltonCSS = useMemo((): FlattenSimpleInterpolation[] => {
        const arr = [styles.skelton]
        props.model && props.model.split(/\s/).map(model => arr.push(styles[model]))
        props.ratio && arr.push(utility.embed(props.ratio[0], props.ratio[1]))
        props.animate && arr.push(styles.animate)
        return arr
    }, [props.model, props.animate])

    const skeltonClass = useMemo((): string => {
        const arr = []
        props.addClass && arr.push(props.addClass)
        return arr.join(' ')
    }, [props.addClass])

    const skeltonStyle = useMemo((): {[key: string]: string | undefined} => {
        const styles = {
            width: props.width && props.width,
            height: props.height && props.height
        }
        if (props.model === 'text' && props.line) styles.height = `${variables.base.fontSize * props.line + (variables.base.fontSize * variables.base.lineHeight - variables.base.fontSize) * (props.line - 1)}px`
        return styles
    }, [props.width, props.height])

    return (
        <span css={skeltonCSS} className={skeltonClass} style={skeltonStyle} />
    )
}

export default memo(Skelton)

const theme = {
    bg: 'rgba(0,0,0,0.1)',
    darkBg: 'rgba(255,255,255,0.1)',
    anime: keyframes`
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    `
}

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    skelton: css`
        display: block;
        background-color: ${theme.bg};

        ${mixins.darkmode(`
            background-color: ${theme.darkBg};
        `)}
    `,

    animate: css`
        animation: ${theme.anime} 1s linear infinite;
    `,

    rounded: css`
        border-radius: 9999px;
    `,

    text: css`
        min-height: ${variables.base.fontSize}px;
        background-color: transparent;
        background-image: repeating-linear-gradient(0deg, ${theme.bg}, ${theme.bg} ${variables.base.fontSize}px, transparent ${variables.base.fontSize}px, transparent ${variables.base.fontSize * variables.base.lineHeight}px);

        ${mixins.darkmode(`
            background-color: transparent;
            background-image: repeating-linear-gradient(0deg, ${theme.darkBg}, ${theme.darkBg} ${variables.base.fontSize}px, transparent ${variables.base.fontSize}px, transparent ${variables.base.fontSize * variables.base.lineHeight}px);
        `)}
    `,

    h1: css`
        height: ${variables.fontSize.h1.sm};

        ${mixins.breakpointUp(`
            height: ${variables.fontSize.h1.lg};
        `)}
    `,

    h2: css`
        height: ${variables.fontSize.h2.sm};

        ${mixins.breakpointUp(`
            height: ${variables.fontSize.h2.lg};
        `)}
    `,

    h3: css`
        height: ${variables.fontSize.h3.sm};

        ${mixins.breakpointUp(`
            height: ${variables.fontSize.h3.lg};
        `)}
    `,

    h4: css`
        height: ${variables.fontSize.h4.sm};

        ${mixins.breakpointUp(`
            height: ${variables.fontSize.h4.lg};
        `)}
    `,

    h5: css`
        height: ${variables.fontSize.h5.sm};

        ${mixins.breakpointUp(`
            height: ${variables.fontSize.h5.lg};
        `)}
    `,

    h6: css`
        height: ${variables.fontSize.h6.sm};

        ${mixins.breakpointUp(`
            height: ${variables.fontSize.h6.lg};
        `)}
    `
}