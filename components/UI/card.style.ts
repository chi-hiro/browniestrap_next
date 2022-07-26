import { css, FlattenSimpleInterpolation } from 'styled-components'
import { rgba, darken, lighten } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'

const card = css`
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

    .grid &,
    .flex & {
        height: 100%;
    }

    .card-body {
        flex: 1 1 auto;
        position: relative;
        padding: 1.25rem;

        ${mixins.breakpointUp(`
            padding: 1.5rem;
        `)}

        .icon {
            margin-right: 0.75rem;
            line-height: 1;
        }

        .body {
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
`

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    card,

    linkCard: css`
        ${card}

        &.hover-border {
            &::after {
                ${mixins.rounded()}
            }
        }
    `,

    notification: css`
        ${card}
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
            color: ${variables.variant[color]};
            background-color: ${variables.lightVariant[color]};

            .icon {
                color: ${variables.variant[color]};
            }

            &:hover, &:focus {
                color: ${variables.variant[color]};
            }

            &.hover-border::after {
                border-color: ${variables.variant[color]};
            }
        `}

        ${model === 'bg' && `
            ${color !== 'white' ? `
                color: white;
                background-color: ${variables.variant[color]};

                small {
                    color: ${rgba('white', 0.7)};
                }

                .icon {
                    color: ${darken(0.15, variables.variant[color])};
                }

                &:hover, &:focus {
                    color: white;
                }

                &.hover-border::after {
                    border-color: ${darken(0.15, variables.variant[color])};
                }
            ` : `
                background-color: ${variables.variant[color]};

                &:hover, &:focus {
                    color: inherit;
                }

                ${mixins.darkmode(`
                    background-color: #303030;

                    small {
                        color: ${rgba('white', 0.5)};
                    }
                `)}
            `}
        `}
    `
}