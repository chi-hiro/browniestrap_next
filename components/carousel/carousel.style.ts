import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins, easing } from '@/lib/styleUtl'

const carousel_timer_waiting = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
`

const visual_slide_zoom = keyframes`
    100% { transform: scale(1) }
`

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

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    carousel: css`
        position: relative;

        img {
            display: block;
            width: 100%;
            height: auto;
        }

        .embed img {
            width: 100%;
            height: 100%;
        }

        .swiper-slide {
            user-select: none;

            a {
                overflow: hidden;
                display: block;
                position: relative;

                &:hover, &:active {
                    text-decoration: none;
                    outline: none;
                }
            }
        }

        .swiper-lazy {
            opacity: 0;
            filter: blur(10px);
            transition: opacity 400ms linear, filter 400ms linear;

            &.swiper-lazy-loaded {
                opacity: 1;
                filter: none;
            }
        }

        .swiper-lazy-preloader {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: none;
            border-radius: 0;
            animation: none !important;
            background-image: none;
            background-color: ${variables.theme.mutedBg};

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.mutedBg};
            `)}

            [class*='loader'] {
                position: static;
            }
        }

        .swiper-button-prev,
        .swiper-button-next {
            cursor: pointer;
            position: absolute;
            z-index: 10;
            right: 0;
            bottom: ${-variables.componentHeight + mixins.spacer(-1.5)}px;
            user-select: none;
            width: ${variables.componentHeight}px;
            height: ${variables.componentHeight}px;
            margin: 0;
            color: ${variables.theme.bodyColor};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            ${mixins.breakpointDown(`
                display: none;
            `)}

            &::before {
                content: '';
                position: absolute;
                z-index: 2;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 8px;
                height: 8px;
                margin: auto;
                border-top: 2px solid ${variables.theme.bodyColor};
                border-right: 2px solid ${variables.theme.bodyColor};
                transform: rotate(45deg);
                ${mixins.transition(['border'])}
            }

            &::after {
                pointer-events: none;
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: ${variables.componentHeight}px;
                height: ${variables.componentHeight}px;
                margin: auto;
                border: 2px solid ${variables.theme.bodyColor};
                border-radius: 100%;
                ${mixins.transition(['background', 'border'])}
            }

            ${mixins.darkmode(`
                color: ${variables.darkTheme.bodyColor};

                &::before {
                    border-color: white;
                }

                &::after {
                    border-color: white;
                }
            `)}

            &:focus {
                outline: none;
            }

            &:active {
                transform: translateY(1px);
            }

            ${mixins.hoverMouse(`
                &::before {
                    border-color: white;
                }

                &::after {
                    border-color: ${variables.linkHoverColor};
                    background-color: ${variables.linkHoverColor};
                }
            `)}

            ${mixins.isTouch(`
                display: none;
            `)}

            &.swiper-button-disabled {
                pointer-events: none;

                &::before,
                &::after {
                    border-color: rgba(0,0,0,0.1);

                    ${mixins.darkmode(`
                        border-color: rgba(255,255,255,0.1);
                    `)}
                }
            }
        }

        .swiper-button-prev {
            right: ${variables.componentHeight + mixins.spacer(0.5)}px;

            &::before {
                left: 2px;
                transform: rotate(-135deg);
            }
        }

        .swiper-button-next {
            &::before {
                right: 2px;
            }
        }

        &.reveal {
            .swiper-button-prev,
            .swiper-button-next {
                transform: scale(0);
                transform-origin: center;
            }
        }

        &.reveal-active {
            .swiper-button-prev {
                transform: none;
                transition: transform 800ms ${easing.easeInOutQuart} 200ms;
            }

            .swiper-button-next {
                transform: none;
                transition: transform 800ms ${easing.easeInOutQuart} 300ms;
            }
        }

        .swiper-pagination {
            bottom: 1.5rem;

            .swiper-pagination-bullet {
                opacity: 1;
                background-color: rgba(0,0,0,0.3);
            }

            .swiper-pagination-bullet-active {
                background-color: ${variables.color.primary};
            }
        }

        .carousel-loader {
            pointer-events: none;
            position: absolute;
            z-index: 2;
            right: ${variables.gridGutterWidth / 2}px;
            bottom: ${variables.gridGutterWidth / 2}px;

            &.hide {
                opacity: 0;
            }

            svg {
                circle {
                    stroke: rgba(0,0,0,0.5);
                }

                &.loader-circle-active {
                    circle {
                        stroke: white;
                    }
                }
            }

            &.animate {
                svg {
                    circle {
                        transition: stroke-dashoffset var(--carousel-timer-duration) linear;
                        animation: ${carousel_timer_waiting} 1000ms ${easing.easeInOutQuint} var(--carousel-timer-duration) infinite;
                    }
                }
            }
        }
    `,

    visual: css`
        .swiper-container {
            cursor: default !important;
        }

        .swiper-slide {
            height: 100vh;
            height: 100svh;
            max-height: 200vw;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        &.effect-zoom {
            .swiper-slide {
                img {
                    transform: scale(1.15);
                }
            }

            .swiper-slide-prev,
            .swiper-slide-active,
            .swiper-slide-duplicate-active {
                img, picture {
                    animation: ${visual_slide_zoom} var(--carousel-duration) linear 1;
                }
            }
        }

        &.reveal {
            opacity: 0;
            transition: opacity 800ms linear;
        }

        &.reveal-active {
            opacity: 1;
        }
    `,

    slide: css`
        .swiper-slide-active,
        .swiper-slide-duplicate-active {
            opacity: 1;
        }

        .swiper-button-prev,
        .swiper-button-next {
            top: 0;
            bottom: 0;
            width: 15%;
            height: 100%;
        }

        .swiper-button-prev {
            left: -44px;
            right: auto;
        }

        .swiper-button-next {
            right: -44px;
            left: auto;
        }

        .carousel-loader {
            left: 1rem;
            margin: 0 auto;
        }

        &.reveal {
            opacity: 0;
            transition: opacity 800ms linear;
        }

        &.reveal-active {
            opacity: 1;
        }
    `,

    lineup: css`
        .swiper {
            overflow: visible !important;
        }

        .swiper-slide {
            a {
                display: block;
                transition: opacity ${variables.duration} linear;

                ${mixins.focusMouse(`
                    opacity: 0.85;
                `)}
            }
        }

        &.effect-zoom {
            .swiper-slide {
                a {
                    img {
                        transition: transform 600ms ease-out;
                    }

                    ${mixins.focusMouse(`
                        img {
                            transform: scale(1.15);
                        }
                    `)}
                }
            }
        }

        &.reveal {
            .swiper-slide {
                opacity: 0;
                transform: scale(0.9) translateZ(0);
                transition: opacity 800ms linear, transform 800ms ${easing.easeOutQuart};
            }
        }

        &.reveal-active {
            .swiper-slide {
                opacity: 1;
                transform: none;
                ${transitionDelay()}
            }
        }
    `
}