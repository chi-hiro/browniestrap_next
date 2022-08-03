import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins, easing } from '@/lib/styleUtl'

const button = css`
    ${mixins.buttonReset()}
    position: absolute;
    padding: ${(variables.componentHeight - 40) / 2}px;

    .viewer-btn {
        display: inline-block;
        vertical-align: top;
        color: white;
        background-color: rgba(0,0,0,0.2);
        border: none;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        padding: ${(40 - variables.iconSize) / 2}px;
        ${mixins.transition(['color', 'background'])}
    }

    ${mixins.hoverMouse(`
        .viewer-btn {
            color: ${variables.linkColor};
            background-color: ${variables.darkTheme.mutedBg};
        }
    `)}
`

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    viewer: css`
        z-index: ${variables.zIndex.sidebar + 2};
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        .btn.is-link {
            color: white;
        }

        ${mixins.isMouse(`
            opacity: 0;
            position: fixed;
            background-color: rgba(0,0,0,0.8);
            backdrop-filter: blur(10px);
        `)}

        ${mixins.isTouch(`
            position: absolute;
            background-color: #101010;
        `)}

        &.viewer-enter,
        &.viewer-exit {
            ${mixins.transition(['opacity'])}
            will-change: opacity;
        }

        &.viewer-enter-active,
        &.viewer-enter-done {
            opacity: 1;
        }
    `,

    body: css`
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;

        .viewer-exit & {
            ${mixins.transition(['transform', 'opacity'])}
            will-change: transform, opacity;
            transform: scale(0.9);
            opacity: 0;
        }
    `,

    container: css`
        cursor: ew-resize;
        display: flex;
        height: 100%;

        &.transition {
            transition: transform ${variables.duration} ${easing.easeOutCubic};
            will-change: transform;
        }

        &.single {
            cursor: default;
        }
    `,

    item: css`
        position: relative;
        flex: 0 0 100vw;
        width: 100vw;
        user-select: none;
    `,

    image: css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: ${variables.componentHeight}px;
        bottom: ${variables.componentHeight}px;
        left: 0;
        right: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transition: transform 300ms ${easing.easeOutCubic};
        transform: scale(0.9);

        ${mixins.breakpointUp(`
            left: ${variables.componentHeight}px;
            right: ${variables.componentHeight}px;
            transform: none;
        `)}

        .viewer-item-active & {
            transform: none;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `,

    video: css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        video {
            width: 100%;
            max-height: 100%;
        }

        ${mixins.breakpointUp(`
            top: ${variables.componentHeight}px;
            bottom: ${variables.componentHeight}px;
            left: ${variables.componentHeight}px;
            right: ${variables.componentHeight}px;
            transform: none;
        `)}
    `,

    youtube: css`
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            ${mixins.breakpointUp(`
                top: ${variables.componentHeight}px;
                bottom: ${variables.componentHeight}px;
                left: ${variables.componentHeight}px;
                right: ${variables.componentHeight}px;
                transform: none;
            `)}
    `,

    closeBtn: css`
        ${button}
        z-index: 4;
        top: 0;
        left: 0;
        margin: 0 auto;
        width: 100%;
        height: ${variables.componentHeight}px;
        text-align: left;
    `,

    prevBtn: css`
        ${button}
        display: none;
        z-index: 3;
        left: 0;
        top: 0;
        bottom: 0;
        width: ${variables.componentHeight}px;
        text-align: left;

        ${mixins.breakpointUp(`
            display: block;
            width: 10vw;
        `)}
    `,

    nextBtn: css`
        ${button}
        z-index: 3;
        right: 0;
        top: 0;
        bottom: 0;
        width: ${variables.componentHeight}px;
        text-align: right;

        ${mixins.breakpointUp(`
            display: block;
            width: 10vw;
        `)}
    `,

    index: css`
        position: absolute;
        z-index: 2;
        pointer-events: none;
        bottom: 0;
        left: 0;
        right: 0;
        padding: ${(variables.componentHeight - variables.iconSize) / 2}px;
        line-height: ${variables.iconSize}px;
        font-size: 0.75rem;
        text-align: center;
        color: rgba(255,255,255,0.5);

        span {
            display: inline-block;
            padding: 0 0.5rem;
        }

        &.viewer-nav-enter,
        &.viewer-nav-exit {
            transition: opacity 300ms linear;
            will-change: opacity;
            opacity: 0;
        }

        &.viewer-nav-enter-active {
            opacity: 1;
        }
    `
}