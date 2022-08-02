import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

export const inputSize: { [key: string]: FlattenSimpleInterpolation } = {
    md: css`
        height: ${variables.input.md.height}px;
        padding: ${variables.input.md.padding}px ${variables.input.inputPaddingX}px;
        font-size: ${variables.input.md.fontSize};
        line-height: ${variables.iconSize}px;
    `,

    sm: css`
        height: ${variables.input.sm.height}px;
        padding: ${variables.input.sm.padding}px ${variables.input.inputPaddingX}px;
        font-size: ${variables.input.sm.fontSize};
        line-height: ${variables.iconSize}px;
    `,

    lg: css`
        height: ${variables.input.lg.height}px;
        padding: ${variables.input.lg.padding}px ${variables.input.inputPaddingX}px;
        font-size: ${variables.input.lg.fontSize};
        line-height: ${variables.iconSize}px;
    `
}

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    input: css`
        appearance: none;
        display: block;
        width: 100%;
        line-height: ${variables.iconSize}px;
        color: ${variables.theme.bodyColor};
        background-color: white;
        background-image: none;
        background-clip: padding-box;
        border: ${variables.borderWidth}px solid ${variables.theme.inputBorderColor};

        ${mixins.rounded(`${variables.input.borderRadius}px`)}

        ${mixins.darkmode(`
            color: ${variables.darkTheme.bodyColor};
            background-color: black;
            border-color: ${variables.darkTheme.inputBorderColor};
        `)}

        &:focus {
            color: ${variables.theme.bodyColor};
            border-color: ${variables.theme.bodyColor};

            ${mixins.darkmode(`
                color: ${variables.darkTheme.bodyColor};
                border-color: ${variables.darkTheme.bodyColor};
            `)}
        }

        &::placeholder {
            color: ${variables.theme.mutedColor};
            opacity: 1;

            ${mixins.darkmode(`
                color: ${variables.darkTheme.mutedColor};
            `)}
        }

        &:-webkit-autofill {
            -webkit-text-fill-color: ${variables.theme.bodyColor};
            caret-color: ${variables.theme.bodyColor};
            transition: background 9999s;

            ${mixins.darkmode(`
                -webkit-text-fill-color: ${variables.darkTheme.bodyColor};
                caret-color: ${variables.darkTheme.bodyColor};
            `)}
        }

        &:disabled,
        &[readonly] {
            background-color: ${variables.theme.mutedBg};
            border-color: ${variables.theme.mutedBg};
            opacity: 1;
            box-shadow: none;

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.mutedBg};
                border-color: ${variables.darkTheme.mutedBg};
            `)}
        }

        &:disabled {
            color: ${variables.theme.mutedColor};

            ${mixins.darkmode(`
                color: ${variables.darkTheme.mutedColor};
            `)}
        }
    `,

    textarea: css`
        resize: none;
        height: auto;
    `,

    select: css`
        cursor: pointer;

        &:not([multiple]) {
            background-image: url(data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%228%22%20height%3D%2210%22%20viewBox%3D%220%200%208%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4%200l4%204h-8l4-4zm0%2010l-4-4h8l-4%204z%22%20fill%3D%22${mixins.base64encode('#909090')}%22%2F%3E%3C%2Fsvg%3E);
            background-repeat: no-repeat;
            background-size: 8px 10px;
            background-position: right 0.5rem center;
            padding-right: ${variables.input.inputPaddingX} + mixins.spacer(1)}px !important;
        }

        &[multiple] {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            height: auto !important;
        }
    `,

    file: css`
        line-height: 18px;
    `,

    label: css`
        color: ${variables.theme.headingsColor};
        font-weight: bold;
        line-height: ${variables.iconSize}px;
        display: flex;
        align-items: center;
        margin-bottom: 0.25rem;

        ${mixins.darkmode(`
            color: ${variables.darkTheme.headingsColor};
        `)}

        [class*='badge'] {
            vertical-align: top;
            margin: 0 0.25rem;
            padding: 0 0.25rem;
            line-height: 18px;
        }
    `,

    feedback: css`
        user-select: none;
        display: inline-block;
        background-color: ${variables.color.primary};
        color: #FFFFFF;
        font-size: 0.85rem;
        font-weight: bold;
        padding: 0 0.25rem;
        margin-top: -2px;
    `,

    help: css`
        display: block;
        color: ${variables.theme.mutedColor};
        margin-top: 0.25rem;

        ${mixins.darkmode(`
            color: ${variables.darkTheme.mutedColor};
        `)}
    `
}

export const colorVariant = (color: string) => {
    return css`
        border-color: ${variables.color[color]};

        &:focus {
            border-color: ${variables.color[color]};
        }

        ${mixins.darkmode(`
            border-color: ${variables.color[color]};
        `)}
    `
}