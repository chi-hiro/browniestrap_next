import { css, FlattenSimpleInterpolation } from 'styled-components'
import { darken, lighten } from 'polished'
import { variables, mixins, easing } from '@/lib/styleUtl'

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    modal: css`
        position: fixed;
        z-index: ${variables.zIndex.modal};
        top: 0;
        left: 0;
        right: 0;
        height: 100%;

        ${mixins.overlay()}

        &.modal-double {
            z-index: ${variables.zIndex.modal + 1};
        }

        &.modal-enter {
            transition: opacity 300ms linear;
            will-change: opacity;
            opacity: 0;
        }

        &.modal-exit {
            transition: opacity 200ms linear;
            will-change: opacity;
            opacity: 0;
        }

        &.modal-enter-active {
            opacity: 1;
        }
    `,

    mask: css`
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        clip-path: circle(100% at var(--path));

        display: flex;
        justify-content: center;
        align-items: center;

        .modal-enter & {
            transition: clip-path 200ms linear;
            will-change: clip-path;
            clip-path: circle(0% at var(--path));
        }

        .modal-enter-active & {
            clip-path: circle(100% at var(--path));
        }
    `,

    inner: css`
        position: relative;
        z-index: 2;
        width: 90vw;
        max-width: ${500 + mixins.spacer(2) + mixins.spacer(2)}px;
        box-shadow: ${variables.shadow.normal};

        > *:first-child {
            ${mixins.roundedTop()}
        }

        > *:last-child {
            ${mixins.roundedBottom()}
        }

        .modal-enter & {
            transition: transform 300ms ${easing.easeOutBack};
            will-change: transform;
            transform: scale(0.85);
        }

        .modal-exit & {
            transition: transform 200ms ${variables.easing};
            will-change: transform;
            transform: translateY(16px);
        }

        .modal-enter-active & {
            transform: none;
        }
    `,

    overlay: css`
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    `,

    header: css`
        width: 100%;
        min-height: 3.5rem;
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        gap: 1rem;
        transform: translateZ(0);
        background-color: ${darken(0.02, variables.theme.bodyBg)};
        border-bottom: 1px solid ${variables.theme.borderColor};
        padding: 0.5rem 0.5rem 0.5rem 1.5rem;

        ${mixins.darkmode(`
            background-color: ${lighten(0.02, variables.darkTheme.bodyBg)};
            border-color: ${variables.darkTheme.borderColor};
        `)}

        .modal-header-title {
            flex: 1 1 auto;
            font-size: 1.125rem;
            font-weight: normal;
            text-align: left;
            line-height: 1.3;
            color: ${variables.theme.headingsColor};
            margin: 0;

            ${mixins.darkmode(`
                color: ${variables.darkTheme.headingsColor};
            `)}
        }

        .modal-close {
            flex: 0 0 auto;
            min-width: initial;
            width: 40px;
            height: 40px;
            padding: ${(40 - variables.iconSize) / 2}px;
            background-color: transparent;
            border: none;
            box-shadow: none;
            color: ${variables.theme.mutedColor};
            ${mixins.rounded('9999px')}

            ${mixins.darkmode(`
                color: ${variables.darkTheme.mutedColor};
            `)}

            ${mixins.hoverMouse(`
                background-color: ${variables.theme.mutedBg};
                color: ${variables.theme.headingsColor};
                box-shadow: none;

                ${mixins.darkmode(`
                    background-color: ${variables.darkTheme.mutedBg};
                    color: $${variables.darkTheme.headingsColor};
                `)}
            `)}

            + .modal-header-title {
                margin-right: ${variables.componentHeight}px;
            }

            [class*='material-icons'] {
                transform: scale(0.75);
            }
        }
    `,

    body: css`
        width: 100%;
        max-height: 60vh;
        background-color: ${variables.theme.bodyBg};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;

        ${mixins.darkmode(`
            background-color: ${variables.darkTheme.bodyBg};
        `)}

        &.scroll {
            display: block;
            height: 50vh;
            ${mixins.scrollY()}

            &::-webkit-scrollbar {
                width: 12px;
            }
        }

        small {
            display: inline-block;
            color: ${variables.theme.mutedColor};
            font-size: 0.75rem;

            ${mixins.darkmode(`
                color: ${variables.darkTheme.mutedColor};
            `)}
        }

        .inner {
            width: 100%;
            padding: 1.5rem;

            ${mixins.breakpointUp(`
                padding: 2rem;
            `)}

            > *:last-child {
                margin-bottom: 0;
            }
        }

        .divider {
            margin: 1rem -1.5rem;
        }

        .terms {
            font-size: 0.875rem;

            > *:last-child {
                margin-bottom: 0;
            }

            * + h2 {
                margin-top: 2em;
            }

            h2 {
                font-size: 1.3em;
                margin-bottom: 0.5em;
            }

            h3 {
                font-size: 1.1em;
                margin-bottom: 0.5em;
            }
        }
    `,

    footer: css`
        width: 100%;
        background-color: ${variables.theme.bodyBg};
        border-top: 1px solid ${variables.theme.borderColor};

        display: flex;
        justify-content: center;
        align-items: center;

        ${mixins.darkmode(`
            background-color: ${variables.darkTheme.bodyBg};
            border-color: ${variables.darkTheme.borderColor};
        `)}

        > * {
            flex: 0 1 100%;
        }

        button {
            ${mixins.buttonReset()}
        }

        a, button {
            user-select: none;
            cursor: pointer;
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 1.25rem 0.5rem;

            font-size: ${variables.input.md.fontSize};
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            white-space: nowrap;
            vertical-align: top;
            line-height: 1;
            ${mixins.textKerning()}

            &:not(:only-child):not(:last-child) {
                border-right: 1px solid ${variables.theme.borderColor};
            }

            ${mixins.darkmode(`
                border-color: ${variables.darkTheme.borderColor};
            `)}

            ${mixins.transition(['background', 'color'])}

            ${mixins.hoverMouse(`
                background-color: ${variables.theme.mutedBg};

                ${mixins.darkmode(`
                    background-color: ${variables.darkTheme.mutedBg};
                `)}
            `)}
        }
    `
}