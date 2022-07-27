import { css } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

const sectioning = css`
    .section {
        position: relative;
        max-width: 100vw;
        padding-top: 3rem;
        padding-bottom: 3rem;

        ${mixins.breakpointUp(`
            padding-top: 6rem;
            padding-bottom: 6rem;
        `)}
    }

    .section-grid {
        ${mixins.breakpointDown(`
            padding-top: 0;
            padding-bottom: 0;
        `)}

        .section-grid-body {
            .container > *:last-child {
                margin-bottom: 0;
            }

            ${mixins.breakpointDown(`
                padding-top: 3rem;
                padding-bottom: 3rem;
            `)}
        }

        .section-grid-img {
            .embed {
                margin-bottom: 0;
            }

            ${mixins.breakpointUp(`
                min-height: 100%;
                max-height: 80vh;

                .embed {
                    height: 100%;

                    &::before {
                        display: none;
                    }

                    img {
                        position: static;
                    }
                }
            `)}
        }
    }

    .section-cover {
        padding: 0;
        overflow: hidden;

        > * {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .section-cover-bg {
            position: relative;
            z-index: 1;

            &.overlay {
                &::after {
                    content: '';
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                }
            }
        }
    }

    .section-heading {
        color: ${variables.theme.headingsColor};
        font-size: 1.5rem;
        margin-bottom: 1.5rem;

        ${mixins.darkmode(`
            color: ${variables.darkTheme.headingsColor};
        `)}

        ${mixins.breakpointUp(`
            font-size: 2.25rem;
            margin-bottom: 2.5rem;
        `)}

        img {
            vertical-align: bottom;
        }

        .text-white & {
            color: inherit;
        }
    }

    .section-heading-sm {
        font-weight: normal;
    }

    * + .section-heading-sm {
        margin-top: ${variables.gridGutterWidth}px;
    }
`

export default sectioning