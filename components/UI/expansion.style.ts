import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

const expansion = css`
    .expansion-toggler {
        ${mixins.buttonReset()}
        position: relative;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        line-height: 1.5;
        color: ${variables.theme.headingsColor};
        ${mixins.transition(['color'])}

        .icon {
            display: inline-block;
            vertical-align: top;
            flex: 0 0 auto;
            font-size: ${variables.iconSize}px;
            line-height: 0;
            ${mixins.transition(['transform'])}

            > * {
                font-size: inherit;
            }
        }

        ${mixins.focusMouse(`
            text-decoration: none;
            color: ${variables.linkHoverColor};
        `)}

        ${mixins.darkmode(`
            color: ${variables.darkTheme.headingsColor};

            &:hover {
                color: ${variables.darkTheme.headingsColor};
            }
        `)}
    }

    .expansion-body {
        position: relative;
        overflow: hidden;

        > *:last-child {
            margin-bottom: 0;
        }

        &.expansion-body-enter,
        &.expansion-body-exit {
            ${mixins.transition(['height'])}
            will-change: height;

            ${mixins.breakpointUp(`
                #header & {
                    ${mixins.transition(['transform', 'opacity'])}
                    will-change: transform, opacity;
                    transform: translateY(-10px);
                    opacity: 0;
                }
            `)}
        }

        &.expansion-body-enter-active {
            ${mixins.breakpointUp(`
                #header & {
                    transform: none;
                    opacity: 1;
                }
            `)}
        }
    }

    &.show {
        .expansion-toggler {
            .icon {
                transform: rotate(180deg);
            }
        }
    }

    &.lock {
        .expansion-toggler {
            cursor: default;
            user-select: none;
        }
    }
`

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    expansion,

    expansion_border: css`
        ${expansion}
        border-top: 1px solid ${variables.theme.borderColor};
        border-bottom: 1px solid ${variables.theme.borderColor};

        .expansion-toggler {
            display: flex;
            width: 100%;
            padding: 1.5rem 1rem;
            font-weight: 700;
            ${mixins.textKerning()}
        }

        .expansion-body {
            margin-left: 1rem;
            margin-right: 1rem;
        }

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}

        ${mixins.transition(['padding'])}

        &.show {
            padding-bottom: 1.5rem;
        }

        + [class*='expansion'] {
            border-top: none;
        }
    `,

    expansion_popup: css`
        ${expansion}
        position: relative;
        display: block;

        .expansion-toggler {
            padding: ${(variables.componentHeight - variables.iconSize) / 2}px;
            border-radius: 999px;
            ${mixins.transition(['color'])}

            .icon {
                position: static;
                width: ${variables.iconSize};
                height: ${variables.iconSize};
                font-size: ${variables.iconSize};
            }
        }

        .expansion-body {
            overflow: hidden;
            position: absolute;
            z-index: 10;
            top: 0;
            right: 0;
            min-width: 160px;
            ${mixins.rounded()}
            box-shadow: ${variables.shadow.normalDark};

            background-color: ${variables.theme.bodyBg};

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.bodyBg};
            `)}

            ul {
                margin: 0;
                padding: 0.5rem 0;
                list-style: none;

                a, button {
                    ${mixins.buttonReset()}
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    width: 100%;
                    padding: 0.75rem 1.25rem;
                    line-height: ${variables.iconSize}px;
                    color: ${variables.theme.bodyColor};
                    white-space: nowrap;

                    ${mixins.darkmode(`
                        color: ${variables.darkTheme.bodyColor};
                    `)}

                    ${mixins.focusMouse(`
                        background-color: ${variables.theme.mutedBg};
                        color: ${variables.theme.bodyColor};

                        ${mixins.darkmode(`
                            background-color: ${variables.darkTheme.mutedBg};
                            color: ${variables.darkTheme.bodyColor};
                        `)}
                    `)}
                }
            }

            &.expansion-body-enter {
                > * {
                    ${mixins.transition(['transform', 'opacity'])}
                    will-change: transform, opacity;
                    transform: translateX(1rem);
                    opacity: 0;
                }
            }

            &.expansion-body-exit {
                > * {
                    ${mixins.transition(['opacity'])}
                    will-change: opacity;
                    opacity: 0;
                }
            }

            &.expansion-body-enter-active {
                > * {
                    transform: none;
                    opacity: 1;
                }
            }
        }

        &.show {
            .expansion-toggler {
                .icon {
                    transform: none;
                }
            }
        }
    `
}