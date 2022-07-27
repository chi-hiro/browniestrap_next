import { css, FlattenSimpleInterpolation } from 'styled-components'
import { darken } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'


export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    card: css`
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 1;
        ${mixins.rounded()}

        background-color: ${variables.theme.mutedBg};
        color: ${variables.theme.bodyColor};

        ${mixins.darkmode(`
            background-color: ${variables.darkTheme.mutedBg};
            color: ${variables.darkTheme.mutedBg};
        `)}

        [class*="grid"] &, [class*="flex"] & {
            height: 100%;
        }

        .card-body {
            flex: 1 1 auto;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.25rem;

            ${mixins.breakpointUp(`
                padding: 1.5rem;
            `)}

            .icon {
                flex: 0 0 auto;
                margin-right: 0.75rem;
                line-height: 1;
            }

            .body {
                flex: 1 1 auto;
                position: relative;
                font-size: 0.875rem;
                line-height: 1.5;

                > *:last-child {
                    margin-bottom: 0;
                }

                .badge {
                    margin-bottom: 0.5rem;
                }

                > small {
                    display: block;
                    margin-bottom: 0.5rem;
                }

                h2, h3, h4, h5, h6 {
                    color: inherit;
                    font-size: 1.125rem;
                    margin-bottom: 0.75rem;

                    + small {
                        margin-top: -0.5rem;
                        margin-bottom: 0.75rem;
                    }
                }
            }
        }

        .card-thumb + .card-body {
            padding: 1.5rem;
        }
    `,

    link: css`
        &:hover {
            color: ${variables.theme.bodyColor};

            ${mixins.darkmode(`
                color: ${variables.darkTheme.mutedBg};
            `)}
        }

        &.hover-border {
            &::after {
                ${mixins.rounded()}
            }
        }
    `,

    notification: css`
        pointer-events: auto;
        margin: 0 auto 0.5rem;
        width: 100%;
        border: none;
        box-shadow: ${variables.shadow.normalDark};
        transform: translateY(-110%);
        opacity: 0;

        .card-body {
            padding: 1rem;

            .body {
                font-weight: bold;
            }
        }

        ${mixins.breakpointUp(`
            width: 600px;
        `)}

        .notification-container.left & {
            transform: translateX(-100%);
        }

        .notification-container.right & {
            transform: translateX(100%);
        }

        .notification-container.center & {
            transform: scale(0.5);
        }

        &.notification-enter,
        &.notification-exit {
            ${mixins.transition(['transform', 'opacity'])}
            will-change: transform, opacity;
        }

        &.notification-enter-active,
        &.notification-enter-done {
            transform: none !important;
            opacity: 1;
        }
    `
}

export const colorVariant = (color: string, model: string) => {
    return css`
        ${model === 'text' && `
            color: ${variables.color[color]};
            background-color: ${variables.lightColor[color]};

            .icon {
                color: ${variables.color[color]};
            }

            &:hover, &:focus {
                color: ${variables.color[color]};
            }

            &.hover-border::after {
                border-color: ${variables.color[color]};
            }
        `}

        ${model === 'bg' && `
            ${color !== 'white' ? `
                color: white;
                background-color: ${variables.color[color]};

                small {
                    color: rgba(255,255,255,0.7);
                }

                .icon {
                    color: ${darken(0.15, variables.color[color])};
                }

                &:hover, &:focus {
                    color: white;
                }

                &.hover-border::after {
                    border-color: ${darken(0.15, variables.color[color])};
                }
            ` : `
                background-color: ${variables.color[color]};

                &:hover, &:focus {
                    color: inherit;
                }

                ${mixins.darkmode(`
                    background-color: #303030;

                    small {
                        color: rgba(255,255,255,0.5);
                    }
                `)}
            `}
        `}
    `
}