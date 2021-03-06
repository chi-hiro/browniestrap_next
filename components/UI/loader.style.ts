import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

const spinAnime = {
    parent: keyframes`
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    `,

    child: keyframes`
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }

        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    `
}

const dotAnime = keyframes`
    0%   { opacity: 0; }
    10%  { opacity: 1; }
    50%  { opacity: 1; }
    60%  { opacity: 0; }
    100% { opacity: 0; }
`

const lineAnime = keyframes`
    0%   { transform: translateX(-100%) scale(1, 1) }
    25%  { transform: translateX(-50%) scale(0.2, 1) }
    50%  { transform: translateX(0) scale(1, 1) }
    75%  { transform: translateX(50%) scale(0.2, 1) }
    100% { transform: translateX(100%) scale(1, 1) }
`

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    spin: css`
        display: block;
        width: ${variables.iconSize}px;
        height: ${variables.iconSize}px;
        margin: 0 auto;
        animation: ${spinAnime.parent} 1200ms infinite linear;

        .path {
            stroke: ${variables.color.primary};
            stroke-linecap: round;
            animation: ${spinAnime.child} 600ms ease-in-out infinite;
        }
    `,

    dot: css`
        display: block;
        width: ${variables.iconSize}px;
        height: ${variables.iconSize}px;
        margin: 0 auto;
        position: relative;

        span {
            position: absolute;
            width: 6px;
            height: 6px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            background-color: ${variables.color.primary};

            &:nth-child(1) {
                left: 0;
                animation: ${dotAnime} 800ms infinite linear;
            }

            &:nth-child(2) {
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                animation: ${dotAnime} 800ms infinite linear 100ms;
            }

            &:nth-child(3) {
                right: 0;
                animation: ${dotAnime} 800ms infinite linear 200ms;
            }
        }
    `,

    dot_rounded: css`
        span {
            border-radius: 100px;
        }
    `,

    line: css`
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 4px;
        background-color: rgba(0,0,0,0.1);

        ${mixins.darkmode(`
            background-color: rgba(255,255,255,0.1);
        `)}

        .loader-line-active {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            background-color: ${variables.color.primary};
            animation: ${lineAnime} 1s linear infinite;
        }
    `,

    line_rounded: css`
        border-radius: 9999px;

        .loader-line-active {
            border-radius: 9999px;
        }
    `,

    bar: css`
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 8px;
        background-color: rgba(0,0,0,0.1);

        ${mixins.darkmode(`
            background-color: rgba(255,255,255,0.1);
        `)}

        .loader-bar-active {
            position: relative;
            display: block;
            width: 0;
            height: 100%;
            background-color: ${variables.color.primary};
        }

        &.animate {
            transition: width 100ms ${variables.easing};
        }
    `,

    bar_rounded: css`
        border-radius: 9999px;

        .loader-bar-active {
            border-radius: 9999px;
        }

        &.animate {
            .loader-bar-active::after {
                border-radius: 9999px;
            }
        }
    `,

    circle: css`
        position: relative;
        width: ${variables.iconSize}px;
        height: ${variables.iconSize}px;
        margin: 0 auto;

        svg {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: ${variables.iconSize}px;
            height: ${variables.iconSize}px;
            margin: 0;

            circle {
                stroke: rgba(0,0,0,0.1);
                stroke-width: 2px;
                transform: rotate(-90deg) scale(1.25);
                transform-origin: center;

                ${mixins.darkmode(`
                    stroke: rgba(255,255,255,0.1);
                `)}
            }

            &.loader-circle-active {
                z-index: 2;

                circle {
                    stroke: ${variables.color.primary};
                }
            }
        }

        &.animate {
            svg {
                circle {
                    transition: stroke-dashoffset 100ms ${variables.easing};
                }
            }
        }
    `
}

export const colorVariant = (color: string, model: string) => {
    return css`
        ${model === 'spin' && `
            .path {
                stroke: ${variables.color[color]};
            }
        `}

        ${model === 'dot' && `
            span {
                background-color: ${variables.color[color]};
            }
        `}

        ${model === 'line' && `
            .loader-line-active {
                background-color: ${variables.color[color]};
            }
        `}

        ${model === 'bar' && `
            .loader-bar-active {
                background-color: ${variables.color[color]};
            }
        `}

        ${model === 'circle' && `
            svg.loader-circle-active circle {
                stroke: ${variables.color[color]};
            }
        `}
    `
}