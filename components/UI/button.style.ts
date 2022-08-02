import { css, FlattenSimpleInterpolation } from 'styled-components'
import { darken } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'

const blockIcon = `
    padding-left: ${variables.input.btnPaddingX + variables.iconSize}px;
    padding-right: ${variables.input.btnPaddingX + variables.iconSize}px;

    .icon {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;

        &:first-child {
            left: ${variables.input.btnPaddingX / 2}px;
        }

        &:last-child {
            right: ${variables.input.btnPaddingX / 2}px;
        }
    }
`

const blockBtn = `
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    ${blockIcon}
`

const longBtn = `
    min-width: 240px;
    ${blockIcon}
`

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    button: css`
        display: inline-flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        gap: ${variables.input.btnPaddingX}px;

        position: relative;
        z-index: 2;
        user-select: none;
        cursor: pointer;

        line-height: ${variables.iconSize}px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        vertical-align: top;
        ${mixins.textKerning()}

        color: inherit;
        border: ${variables.borderWidth}px solid transparent;
        box-shadow: ${variables.input.boxShadow};
        ${mixins.rounded()}
        ${mixins.transition(['color', 'background', 'border', 'box-shadow'])}

        // Default color
        background-color: ${variables.theme.mutedBg};
        ${mixins.darkmode(`
            background-color: ${variables.darkTheme.mutedBg};
        `)}

        // Default size
        min-width: ${variables.input.md.height}px;
        font-size: ${variables.input.md.fontSize};
        padding: ${variables.input.md.padding}px ${variables.input.btnPaddingX}px;

        &:active {
            transition: none;
            transform: scale(0.98);
            transform-origin: center bottom;
        }

        &.connecting {
            pointer-events: none;
        }

        &.disabled,
        &:disabled {
            pointer-events: none;
            cursor: default;
            opacity: .3;
            box-shadow: none;

            .show {
                animation: none !important;
            }

            &:active {
                transform: none;
            }
        }

        .icon {
            flex: 0 0 auto;
            height: ${variables.iconSize}px;
            margin-left: ${variables.input.btnPaddingX / -2}px;
            margin-right: ${variables.input.btnPaddingX / -2}px;
        }
    `,

    sm: css`
        min-width: ${variables.input.sm.height}px;
        font-size: ${variables.input.sm.fontSize};
        padding: ${variables.input.sm.padding}px ${variables.input.btnPaddingX}px;

        [class*='material-icons'] {
            transform: scale(0.75);
        }
    `,

    lg: css`
        min-width: ${variables.input.lg.height};
        font-size: ${variables.input.lg.fontSize};
        padding: ${variables.input.lg.padding}px ${variables.input.btnPaddingX}px;
    `,

    rounded: css`
        border-radius: 9999px;
    `,

    block: css`
        ${blockBtn}
    `,

    blockUp: css`
        ${mixins.breakpointUp(`
            ${blockBtn}
        `)}
    `,

    blockDown: css`
        ${mixins.breakpointDown(`
            ${blockBtn}
        `)}
    `,

    long: css`
        ${longBtn}
    `,

    longUp: css`
        ${mixins.breakpointUp(`
            ${longBtn}
        `)}
    `,

    longDown: css`
        ${mixins.breakpointDown(`
            ${longBtn}
        `)}
    `,

    icon: css`
        padding-left: 0;
        padding-right: 0;
    `,

    switch: css`
        display: inline-flex;
        vertical-align: top;

        > * {
            flex: 0 0 auto;
            border-radius: 0;

            &:first-child {
                ${mixins.roundedLeft()}
            }

            &:last-child {
                ${mixins.roundedRight()}
            }

            &.active {
                background-color: ${variables.linkHoverColor};
                color: white;
            }
        }
    `
}

export const colorVariant = (color: string, model: string) => {
    return css`
        ${model.includes('bg') && `
            ${color === 'default' ? `
                background-color: ${variables.theme.mutedBg};
                color: ${variables.theme.bodyColor};
                border-color: transparent;

                ${mixins.darkmode(`
                    background-color: ${variables.darkTheme.mutedBg};
                    color: ${variables.darkTheme.bodyColor};
                `)}

                ${mixins.focusMouse(`
                    background-color: ${variables.linkHoverColor};
                    color: white;
                    border-color: ${darken(0.2, variables.linkHoverColor)};
                `)}
            ` : `
                background-color: ${variables.color[color]};
                color: ${color === 'white' ? variables.theme.bodyColor : 'white'};

                ${mixins.darkmode(`
                    background-color: ${variables.color[color]};
                    color: ${color === 'white' ? variables.theme.bodyColor : 'white'};
                `)}

                ${mixins.focusMouse(`
                    color: ${color === 'white' ? variables.theme.bodyColor : 'white'};
                    border-color: ${darken(0.2, variables.color[color])};
                `)}
            `}
        `}

        ${model.includes('border') && `
            ${color === 'default' ? `
                background-color: transparent;
                color: ${variables.theme.bodyColor};
                border-color: ${variables.theme.borderColor};

                ${mixins.darkmode(`
                    background-color: transparent;
                    color: ${variables.darkTheme.bodyColor};
                    border-color: ${variables.darkTheme.borderColor};
                `)}

                ${mixins.focusMouse(`
                    color: ${variables.linkHoverColor};
                    border-color: ${variables.linkHoverColor};
                `)}
            ` : `
                background-color: transparent;
                color: ${variables.color[color]};
                border-color: ${variables.color[color]};

                ${mixins.darkmode(`
                    background-color: transparent;
                    color: ${variables.color[color]};
                    border-color: ${variables.color[color]};
                `)}

                ${mixins.focusMouse(`
                    background-color: ${variables.color[color]};
                    color: ${color === 'white' ? variables.theme.bodyColor : 'white'};
                    border-color: ${darken(0.2, variables.color[color])};
                `)}
            `}
        `}

        ${model.includes('link') && `
            background-color: transparent;
            color: ${variables.color[color]};
            border-color: transparent;
            box-shadow: none !important;

            ${mixins.darkmode(`
                background-color: transparent;
                color: ${variables.color[color]};
                border-color: transparent;
            `)}

            ${mixins.focusMouse(`
                background-color: ${variables.theme.mutedBg};
                color: ${variables.color[color]};
                border-color: transparent;

                ${mixins.darkmode(`
                    background-color: ${variables.darkTheme.mutedBg};
                `)}
            `)}
        `}
    `
}