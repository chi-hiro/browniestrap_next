import { css } from 'styled-components'
import { darken, lighten } from 'polished'

//***********************************************************************
//  Options
//***********************************************************************
const enableDarkmode = true
const enableRounded = true

//***********************************************************************
//  Easing
//***********************************************************************
export const easing = {
    easeInSine:     `cubic-bezier(0.12, 0, 0.39, 0)`,
    easeOutSine:    `cubic-bezier(0.61, 1, 0.88, 1)`,
    easeInOutSine:  `cubic-bezier(0.37, 0, 0.63, 1)`,

    easeInCubic:    `cubic-bezier(0.32, 0, 0.67, 0)`,
    easeOutCubic:   `cubic-bezier(0.33, 1, 0.68, 1)`,
    easeInOutCubic: `cubic-bezier(0.65, 0, 0.35, 1)`,

    easeInQuint:    `cubic-bezier(0.64, 0, 0.78, 0)`,
    easeOutQuint:   `cubic-bezier(0.22, 1, 0.36, 1)`,
    easeInOutQuint: `cubic-bezier(0.83, 0, 0.17, 1)`,

    easeInCirc:     `cubic-bezier(0.55, 0, 1, 0.45)`,
    easeOutCirc:    `cubic-bezier(0, 0.55, 0.45, 1)`,
    easeInOutCirc:  `cubic-bezier(0.85, 0, 0.15, 1)`,

    easeInQuad:     `cubic-bezier(0.11, 0, 0.5, 0)`,
    easeOutQuad:    `cubic-bezier(0.5, 1, 0.89, 1)`,
    easeInOutQuad:  `cubic-bezier(0.45, 0, 0.55, 1)`,

    easeInQuart:    `cubic-bezier(0.5, 0, 0.75, 0)`,
    easeOutQuart:   `cubic-bezier(0.25, 1, 0.5, 1)`,
    easeInOutQuart: `cubic-bezier(0.76, 0, 0.24, 1)`,

    easeInExpo:     `cubic-bezier(0.7, 0, 0.84, 0)`,
    easeOutExpo:    `cubic-bezier(0.16, 1, 0.3, 1)`,
    easeInOutExpo:  `cubic-bezier(0.87, 0, 0.13, 1)`,

    easeInBack:     `cubic-bezier(0.36, 0, 0.66, -0.56)`,
    easeOutBack:    `cubic-bezier(0.34, 1.56, 0.64, 1)`,
    easeInOutBack:  `cubic-bezier(0.68, -0.6, 0.32, 1.6)`
}

//***********************************************************************
//  Variables
//***********************************************************************
const color = {
    primary: '#6ED4BE',
    secondary: '#D38A58',
    success: '#8CCD26',
    info: '#5FBEDB',
    warning: '#EAA930',
    danger: '#E13D3B',
    white: 'white'
}

const font = {
    jpSans: "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Hiragino Sans', 'Yu Gothic Medium', 'Yu Gothic', Meiryo, sans-serif",
    enSans: "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Helvetica, Arial, sans-serif",
    cnSans: "'Microsoft YaHei', 'PingFang SC', sans-serif",
    twSans: "'Microsoft JhengHei', 'PingFang TC', sans-serif",
    jpSerif: "'Hiragino Mincho ProN', 'Hiragino Mincho Pro', '游明朝', YuMincho, serif",
    enSerif: "'Times New Roman', serif",
    cnSerif: "'Kaiti SC', 'SimSun', serif"
}

const borderWidth = 2

export const variables: { [key: string]: any } = {
    base: {
        fontSize: 16,
        fontFamily: font.jpSans,
        lineHeight: 1.75
    },

    color,

    lightColor: {
        primary: lighten(0.3, color.primary),
        secondary: lighten(0.35, color.secondary),
        success: lighten(0.45, color.success),
        info: lighten(0.35, color.info),
        warning: lighten(0.4, color.warning),
        danger: lighten(0.4, color.danger),
        white: 'rgba(0,0,0,0.5)'
    },

    theme: {
        bodyColor: '#606060',
        headingsColor: '#101010',
        mutedColor: 'rgba(0,0,0,0.4)',
        borderColor: 'rgba(0,0,0,0.1)',
        inputBorderColor: 'rgba(0,0,0,0.15)',
        bodyBg: '#FFFFFF',
        mutedBg: 'rgba(0,0,0,0.03)',
        overlayBg: 'rgba(0,0,0,0.3)',
        headerBg: 'white'
    },

    darkTheme: {
        bodyColor: '#FFFFFF',
        headingsColor: '#FFFFFF',
        mutedColor: 'rgba(255,255,255,0.4)',
        borderColor: 'rgba(255,255,255,0.2)',
        inputBorderColor: 'rgba(255,255,255,0.15)',
        bodyBg: '#202020',
        mutedBg: 'rgba(255,255,255,0.03)',
        overlayBg: 'rgba(0,0,0,0.3)',
        headerBg: '#404040'
    },

    shadow: {
        normal: '0 2px 10px rgba(0,0,0,0.03)',
        normalDark: '0 4px 20px rgba(0,0,0,0.1)',
        reverse: '0 -2px 10px rgba(0,0,0,0.03)',
        reverseDark: '0 -4px 20px rgba(0,0,0,0.1)'
    },

    linkColor: color.primary,
    linkHoverColor: color.primary,

    scrollbarW: 16,
    breakpoint: 1024,
    gridGutterWidth: 40,
    iconSize: 24,
    componentHeight: 48,
    borderWidth: borderWidth,
    borderRadius: 8,
    duration: `300ms`,
    easing: easing.easeInOutQuart,

    zIndex: {
        bar:     1000,
        overlay: 1001,
        sidebar: 1002,
        modal:   1010,
        loader:  9999
    },

    input: {
        borderRadius: 8,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        btnPaddingX: 20,
        inputPaddingX: 12,

        md: {
            height: 48,
            fontSize: '1rem',
            padding: (48 - 24) / 2 - borderWidth,
        },

        sm: {
            height: 40,
            fontSize: '0.875rem',
            padding: (40 - 24) / 2 - borderWidth,
        },

        lg: {
            height: 56,
            fontSize: '1.125rem',
            padding: (56 - 24) / 2 - borderWidth,
        },
    },

    font,

    fontSize: {
        h1: { sm: '1.5rem', lg: '2.25rem' },
        h2: { sm: '1.4rem', lg: '2.00rem' },
        h3: { sm: '1.3rem', lg: '1.75rem' },
        h4: { sm: '1.2rem', lg: '1.50rem' },
        h5: { sm: '1.1rem', lg: '1.25rem' },
        h6: { sm: '1.0rem', lg: '1.00rem' }
    },

    ui: {
        headerHeightSm: 64,
        headerHeight: 80
    }
}

//***********************************************************************
//  Mixins
//***********************************************************************
export const mixins = {
    spacer: function(value: number) {
        return 16 * value
    },

    darkmode: function(content: string) {
        if (enableDarkmode) {
            return `
                @media (prefers-color-scheme: dark) {
                    ${content}
                }
            `
        }
    },

    fontFamily: function(value: string) {
        return `font-family: ${variables.font[value]};`
    },

    nowrap: function() {
        return `
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `
    },

    textKerning: function() {
        return `font-feature-settings: "pkna";`
    },

    textClamp: function(line: number) {
        return `
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${line};
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;
        `
    },

    buttonReset: function() {
        return `
            background: transparent;
            border: none;
            cursor: pointer;
            user-select: none;
            outline: none;
            padding: 0;
            appearance: none;
        `
    },

    transition: function(property: string[]) {
        return `
            transition-property: ${property.join(', ')};
            transition-duration: ${variables.duration};
            transition-timing-function: ${variables.easing};
        `
    },

    hoverMouse: function(content: string) {
        return `
            &:hover {
                text-decoration: none;

                @media (hover: hover) and (pointer: fine) {
                    ${content}
                }
            }
        `
    },

    focusMouse: function(content: string) {
        return `
            &:hover, &:focus {
                text-decoration: none;

                @media (hover: hover) and (pointer: fine) {
                    ${content}
                }
            }
        `
    },

    isMouse: function(content: string) {
        return `
            @media (pointer: fine) {
                ${content}
            }
        `
    },

    isTouch: function(content: string) {
        return `
            @media (pointer: coarse) {
                ${content}
            }
        `
    },

    imgFluid: function() {
        return `
            max-width: 100%;
            height: auto;
        `
    },

    overlay: function() {
        return `
            background-color: ${variables.theme.overlayBg};
            backdrop-filter: blur(10px);

            @media (prefers-color-scheme: dark) {
                background-color: ${variables.darkTheme.overlayBg};
            }
        `
    },

    scrollX: function() {
        return `
            overflow-x: auto;
            overflow-y: hidden;
            overscroll-behavior: contain;
        `
    },

    scrollY: function() {
        return `
            overflow-x: hidden;
            overflow-y: auto;
            overscroll-behavior: contain;
        `
    },

    rounded: function(size?: string) {
        if (enableRounded) {
            return `border-radius: ${size ? size : variables.borderRadius + 'px'};`
        }
    },

    roundedTop: function(size?: string) {
        if (enableRounded) {
            return `
                border-top-left-radius: ${size ? size : variables.borderRadius + 'px'};
                border-top-right-radius: ${size ? size : variables.borderRadius + 'px'};
            `
        }
    },

    roundedBottom: function(size?: string) {
        if (enableRounded) {
            return `
                border-bottom-left-radius: ${size ? size : variables.borderRadius + 'px'};
                border-bottom-right-radius: ${size ? size : variables.borderRadius + 'px'};
            `
        }
    },

    roundedLeft: function(size?: string) {
        if (enableRounded) {
            return `
                border-top-left-radius: ${size ? size : variables.borderRadius + 'px'};
                border-bottom-left-radius: ${size ? size : variables.borderRadius + 'px'};
            `
        }
    },

    roundedRight: function(size?: string) {
        if (enableRounded) {
            return `
                border-top-right-radius: ${size ? size : variables.borderRadius + 'px'};
                border-bottom-right-radius: ${size ? size : variables.borderRadius + 'px'};
            `
        }
    },

    breakpointUp: function(content: string) {
        return `
            @media (min-width: ${variables.breakpoint}px) {
                ${content}
            }
        `
    },

    breakpointDown: function(content: string) {
        return `
            @media (max-width: ${variables.breakpoint - .02}px) {
                ${content}
            }
        `
    },

    base64encode: function(value: string) {
        return btoa(value)
    },
}

//***********************************************************************
//  Utilities
//***********************************************************************
export const utility = {
    hiddenUp: css`
        ${mixins.breakpointUp(`
            display: none !important;
        `)}
    `,

    hiddenDown: css`
        ${mixins.breakpointDown(`
            display: none !important;
        `)}
    `,

    hiddenLight: css`
        @media (prefers-color-scheme: light) {
            display: none !important;
        }
    `,

    hiddenDark: css`
        @media (prefers-color-scheme: dark) {
            display: none !important;
        }
    `,

    imgFluid: css`
        max-width: 100%;
        height: auto;
    `,

    borderTop: css`
        border-top: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    `,

    borderBottom: css`
        border-bottom: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    `,

    borderLeft: css`
        border-left: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    `,

    borderRight: css`
        border-right: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    `,

    borderX: css`
        border-left: 1px solid ${variables.theme.borderColor};
        border-right: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    `,

    borderY: css`
        border-top: 1px solid ${variables.theme.borderColor};
        border-bottom: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    `,

    hoverBorder: css`
        display: block;
        position: relative;

        &::after {
            content: '';
            pointer-events: none;
            position: absolute;
            z-index: 10;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: ${variables.borderWidth}px solid ${variables.linkColor};
            opacity: 0;
            transition: opacity ${variables.duration} linear;
        }

        ${mixins.focusMouse(`
            &::after {
                opacity: 1;
            }
        `)}
    `,

    hoverZoom: css`
        transition: transform 800ms ${easing.easeOutQuint};

        ${mixins.focusMouse(`
            transform: scale(1.03);
        `)}
    `,

    hoverOpacity: css`
        display: block;
        transition: opacity ${variables.duration} linear;

        ${mixins.focusMouse(`
            opacity: 0.85;
        `)}
    `,

    embed: function(w: number, h: number) {
        return css`
            display: block;
            width: 100%;
            padding: 0;
            overflow: hidden;

            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            aspect-ratio: ${w} / ${h};

            > * {
                width: 100%;
                height: 100%;
                border: 0;
            }

            img {
                object-fit: cover;
            }

            a & {
                margin-bottom: 0;
            }
        `
    },

    textColor: function(color: string) {
        switch (color) {
            case 'muted':
                return css`
                    color: ${variables.theme.mutedColor};

                    ${mixins.darkmode(`
                        color: ${variables.darkTheme.mutedColor};
                    `)}
                `
            default:
                return css`
                    color: ${variables.color[color]} !important;
                `
        }
    },

    bgColor: function(color: string) {
        switch (color) {
            case 'muted':
                return css`
                    background-color: ${variables.theme.mutedBg};

                    ${mixins.darkmode(`
                        background-color: ${variables.darkTheme.mutedBg};
                    `)}
                `
            case 'light':
                return css`
                    background-color: ${variables.theme.bodyBg};
                `
            case 'dark':
                return css`
                    background-color: ${variables.darkTheme.bodyBg};
                `
            default:
                return css`
                    background-color: ${variables.color[color]} !important;
                `
        }
    },

    borderColor: function(color: string) {
        switch (color) {
            default:
                return css`
                    border-color: ${variables.color[color]} !important;
                `
        }
    },

    embedUp: function(w: number, h: number) {
        return css`
            ${mixins.breakpointUp(`
                aspect-ratio: ${w} / ${h};
            `)}
        `
    },

    embedDown: function(w: number, h: number) {
        return css`
            ${mixins.breakpointDown(`
                aspect-ratio: ${w} / ${h};
            `)}
        `
    }
}

//***********************************************************************
//  Sectioning
//***********************************************************************
export const section = {
    base: css`
        position: relative;
        max-width: 100vw;
        padding-top: 3rem;
        padding-bottom: 3rem;

        ${mixins.breakpointUp(`
            padding-top: 6rem;
            padding-bottom: 6rem;
        `)}
    `,

    grid: css`
        position: relative;
        max-width: 100vw;
        padding-top: 0;
        padding-bottom: 0;

        ${mixins.breakpointUp(`
            padding-top: 6rem;
            padding-bottom: 6rem;
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
    `,

    cover: css`
        position: relative;
        max-width: 100vw;
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
    `,

    heading: css`
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
    `,

    headingSm: css`
        font-weight: normal;

        &:not(:first-child) {
            margin-top: ${variables.gridGutterWidth}px;
        }
    `,

    lead: css`
        font-size: 1.5rem;
        line-height: 1.3;
        box-decoration-break: clone;
        ${mixins.textKerning()}

        ${mixins.breakpointUp(`
            font-size: 2rem;
        `)}
    `,

    listChart: css`
        counter-reset: listchart;
        margin: 0 0 1rem;
        padding: 0;
        list-style: none;

        li {
            position: relative;
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            line-height: 1.5;

            + li {
                margin-top: 1rem;

                &::after {
                    content: '';
                    position: absolute;
                    z-index: 1;
                    left: ${(32 - 2) / 2}px;
                    bottom: 100%;
                    margin-bottom: -8px;
                    width: 2px;
                    height: 100%;
                    background-color: ${variables.theme.bodyColor};

                    ${mixins.darkmode(`
                        background-color: ${variables.darkTheme.bodyColor};
                    `)}
                }
            }

            &::before {
                position: relative;
                z-index: 2;
                flex: 0 0 auto;
                counter-increment: listchart;
                content: counter(listchart)'';
                border: 2px solid ${variables.theme.bodyColor};
                background-color: ${variables.theme.bodyBg};
                line-height: 1;
                text-align: center;
                padding: 6px;
                margin-top: -4px;
                min-width: 2rem;
                border-radius: 9999px;

                ${mixins.darkmode(`
                    border-color: ${variables.darkTheme.bodyColor};
                    background-color: ${variables.darkTheme.bodyBg};
                `)}
            }
        }
    `
}