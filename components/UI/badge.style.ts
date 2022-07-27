import { css, FlattenSimpleInterpolation } from 'styled-components'
import { darken, lighten } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'

const md = {
    height: 32,
    iconSize: variables.iconSize * 0.875
}

const sm = {
    height: 24,
    iconSize: variables.iconSize * 0.75
}

const lg = {
    height: 40,
    iconSize: variables.iconSize * 1
}

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    badge: css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        ${mixins.rounded('3px')}
        font-size: 0.875rem;
        text-align: center;
        line-height: 1;
        white-space: nowrap;
        vertical-align: middle;
        ${mixins.textKerning()}

        // Default color
        color: ${variables.theme.bodyColor};
        background-color: rgba(0,0,0,0.05);
        border: 1px solid transparent;

        ${mixins.darkmode(`
            color: ${variables.darkTheme.bodyColor};
            background-color: rgba(255,255,255,0.1);
        `)}

        // Default size
        min-width: ${md.height}px;
        height: ${md.height}px;
        gap: ${md.height - md.iconSize}px;
        padding: 0 ${md.height - md.iconSize}px;

        img, .font-icon {
            margin: 0 ${(md.height - md.iconSize) / -2}px;
        }

        img {
            width: ${md.iconSize}px;
            height: ${md.iconSize}px;
            object-fit: cover;
        }

        .font-icon {
            font-size: ${md.iconSize}px;
        }

        // UI
        .card-body .body & {
            &:first-child {
                position: absolute;
                z-index: 2;
                top: -2.25rem;
                left: 0;
                margin: 0;
            }
        }
    `,

    link: css`
        ${mixins.transition(['color', 'border', 'background'])}

        ${mixins.hoverMouse(`
            color: ${variables.theme.bodyColor};
            border-color: ${variables.theme.borderColor}

            ${mixins.darkmode(`
                color: ${variables.darkTheme.bodyColor};
                border-color: ${variables.darkTheme.borderColor}
            `)}
        `)}
    `,

    sm: css`
        min-width: ${sm.height}px;
        height: ${sm.height}px;
        gap: ${sm.height - sm.iconSize}px;
        padding: 0 ${sm.height - sm.iconSize}px;
        font-size: 0.75rem;

        img, .font-icon {
            margin: 0 ${(sm.height - sm.iconSize) / -2}px;
        }

        img {
            width: ${sm.iconSize}px;
            height: ${sm.iconSize}px;
        }

        .font-icon {
            font-size: ${sm.iconSize}px;
        }
    `,

    lg: css`
        min-width: ${lg.height}px;
        height: ${lg.height}px;
        gap: ${lg.height - lg.iconSize}px;
        padding: 0 ${lg.height - lg.iconSize}px;
        font-size: 1rem;

        img, .font-icon {
            margin: 0 ${(lg.height - lg.iconSize) / -2}px;
        }

        img {
            width: ${lg.iconSize}px;
            height: ${lg.iconSize}px;
        }

        .font-icon {
            font-size: ${lg.iconSize}px;
        }
    `,

    long: css`
        min-width: 100px;
    `,

    rounded: css`
        border-radius: 9999px;
    `,

    status: css`
        display: flex;
        align-items: center;
        gap: 0.5rem;
        min-width: initial;
        padding: 0;
        border-radius: none;
        background: none;
        user-select: auto;

        &::before {
            content: '';
            display: inline-block;
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            border-radius: 100%;
            background-color: ${variables.theme.mutedColor};

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.mutedColor};
            `)}
        }
    `,

    check: css`
        position: relative;
        vertical-align: top;
        min-width: initial;
        height: ${variables.iconSize}px;
        padding: 0 0 0 ${variables.iconSize + mixins.spacer(0.5)}px;
        border-radius: none;
        background: none;
        user-select: auto;

        font-size: 1rem;
        font-weight: normal;

        &::before {
            content: '';
            display: block;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: ${variables.iconSize}px;
            height: ${variables.iconSize}px;
            border-radius: 100%;
            background-color: ${variables.theme.mutedColor};

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.mutedColor};
            `)}
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            z-index: 2;
            top: 3px;
            left: 8px;
            margin: auto;
            width: 8px;
            height: 16px;
            border-bottom: 2px solid white;
            border-right: 2px solid white;
            transform: rotate(45deg) scale(0.7);
        }
    `,

    count: css`
        position: absolute;
        min-width: ${variables.iconSize}px;
        height: ${variables.iconSize}px;
        right: ${variables.iconSize / -3}px;
        top: ${variables.iconSize / -3}px;
        border-radius: 999px;
        padding: 0 0.25rem;
        font-size: 11px;
        color: white;
        background-color: ${variables.color.primary};
    `
}

export const colorVariant = (color: string, model: string, link: string | undefined) => {
    return css`
        ${model.includes('text') && `
            color: ${variables.color[color]};
            background-color: ${variables.lightColor[color]};

            ${link && `
                ${mixins.focusMouse(`
                    color: ${variables.color[color]};
                    border-color: ${color === 'white' ? variables.theme.headingsColor : variables.color[color]};
                `)}
            `}
        `}

        ${model.includes('bg') && `
            color: ${color === 'white' ? variables.theme.headingsColor : 'white'};
            background-color: ${variables.color[color]};

            ${link && `
                ${mixins.focusMouse(`
                    border-color: ${darken(0.2, variables.color[color])};
                    color: ${color === 'white' ? variables.theme.bodyColor : 'white'};

                    ${mixins.darkmode(`
                        border-color: ${color === 'white' ? darken(0.2, 'white') : lighten(0.2, variables.color[color])};
                    `)}
                `)}
            `}
        `}

        ${model.includes('border') && `
            color: ${variables.color[color]};
            background-color: transparent;
            border-color: ${variables.color[color]};

            ${link && `
                ${mixins.focusMouse(`
                    background-color: ${variables.color[color]};
                    border-color: transparent;
                    color: ${color === 'white' ? variables.theme.bodyColor : 'white'}
                `)}
            `}
        `}

        ${model.includes('status') && `
            &::before {
                background-color: ${variables.color[color]};
            }
        `}

        ${model.includes('check') && `
            &::before {
                background-color: ${variables.color[color]};
            }

            ${color === 'white' && `
                &::after {
                    border-color: ${variables.darkTheme.bodyBg};
                }
            `}
        `}
    `
}