import { css } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

const components = css`
    .notification-container {
        position: fixed;
        z-index: 1010;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        pointer-events: none;

        display: flex;
        flex-direction: column;
        padding: 0.5rem;

        ${mixins.breakpointUp(`
            padding: 1rem;
        `)}

        &.left {
            .card-notification {
                margin-left: 0;
            }
        }

        &.right {
            .card-notification {
                margin-right: 0;
            }
        }

        &.center {
            justify-content: center;
        }
    }

    body.show_viewer {
        ${mixins.isMouse(`
            overflow: hidden;
        `)}

        ${mixins.isTouch(`
            #__next {
                overflow: hidden;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: 100vh;
                height: 100svh;
            }
        `)}
    }

    body.header-fixed-top {
        #__next {
            padding-top: 64px;

            ${mixins.breakpointUp(`
                padding-top: 80px;
            `)}
        }
    }
`

export default components