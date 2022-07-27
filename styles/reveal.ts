import { css } from 'styled-components'
import { variables, mixins, easing } from '@/lib/styleUtl'

const transitionDelay = () => {
    let str = ''
    for (let i = 1; i < 10; i++) {
        str += `
            &:nth-child(${i + 1}) {
                transition-delay: ${100 * i}ms;
            }
        `
    }
    return str
}

const reveal = css`
    [class*='reveal-fade'] {
        opacity: 0;

        &.reveal-fade-up {
            transform: translateY(40px);
        }

        &.reveal-fade-down {
            transform: translateY(-40px);
        }

        &.reveal-fade-right {
            transform: translateX(-40px);
        }

        &.reveal-fade-left {
            transform: translateX(40px);
        }

        &.reveal-fade-front {
            transform: scale(0.8);
        }

        &.reveal-fade-back {
            transform: scale(1.2);
        }

        &.reveal-active {
            opacity: 1;
            transform: none;
            transition: opacity 600ms linear, transform 600ms ${easing.easeOutCirc};
        }
    }

    [class*='reveal-mask'] {
        clip-path: inset(0 100% 0 0);

        img {
            transform: scale(1.3);
        }

        &.reveal-mask-up {
            clip-path: inset(100% 0 0 0);
        }

        &.reveal-mask-down {
            clip-path: inset(0 0 100% 0);
        }

        &.reveal-mask-left {
            clip-path: inset(0 0 0 100%);
        }

        &.reveal-mask-right {
            clip-path: inset(0 100% 0 0);
        }

        &.reveal-active {
            clip-path: inset(0 0 0 0);
            transition: clip-path 800ms ${variables.easing};

            img {
                transform: none;
                transition: transform 800ms ${variables.easing};
            }
        }
    }

    [class*='reveal-zoom'] {
        &.reveal-zoom-out {
            transform: scale(1.2);
        }

        &.reveal-zoom-in {
            transform: scale(0.8);
        }

        &.reveal-active {
            transform: none;
            transition: transform 1600ms ease-out;
        }
    }

    .reveal-cover {
        position: relative;
        clip-path: inset(0 100% 0 0);

        &::before {
            content: '';
            position: absolute;
            z-index: 2;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: ${variables.theme.bodyColor};
            transform-origin: right center;

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.bodyColor};
            `)}

            .section-heading &,
            .section-heading-sm & {
                background-color: ${variables.theme.headingsColor};

                ${mixins.darkmode(`
                    background-color: ${variables.darkTheme.headingsColor};
                `)}
            }
        }

        &.reveal-active {
            clip-path: inset(0 0 0 0);
            transition: clip-path 400ms ${variables.easing};

            &::before {
                transform: scale(0, 1);
                transition: transform 400ms ${variables.easing} 400ms;
            }
        }
    }

    span.reveal-cover {
        display: inline-block;
    }

    .reveal-group {
        > * {
            ${transitionDelay()}
        }
    }
`

export default reveal