import { rgba, lighten } from 'polished'

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
const variant = {
    primary: '#6ED4BE',
    secondary: '#D38A58',
    success: '#8CCD26',
    info: '#5FBEDB',
    warning: '#EAA930',
    danger: '#E13D3B',
    white: 'white'
}

const borderWidth = 2

export const variables: { [key: string]: any } = {
    variant,

    lightVariant: {
        primary: lighten(0.3, variant.primary),
        secondary: lighten(0.35, variant.secondary),
        success: lighten(0.45, variant.success),
        info: lighten(0.35, variant.info),
        warning: lighten(0.4, variant.warning),
        danger: lighten(0.4, variant.danger),
        white: rgba('black', 0.5)
    },

    theme: {
        bodyColor: '#606060',
        headingsColor: '#101010',
        mutedColor: rgba('black', 0.4),
        borderColor: rgba('black', 0.1),
        inputBorderColor: rgba('black', 0.15),
        bodyBg: '#FFFFFF',
        mutedBg: rgba('black', 0.03),
        overlayBg: rgba('black', 0.3),
        headerBg: 'white'
    },

    darkTheme: {
        bodyColor: '#FFFFFF',
        headingsColor: '#FFFFFF',
        mutedColor: rgba('white', 0.4),
        borderColor: rgba('white', 0.2),
        inputBorderColor: rgba('white', 0.15),
        bodyBg: '#202020',
        mutedBg: rgba('white', 0.03),
        overlayBg: rgba('black', 0.3),
        headerBg: '#404040'
    },

    shadow: {
        normal: '0 2px 10px rgba(0,0,0,0.03)',
        normalDark: '0 4px 20px rgba(0,0,0,0.1)',
        reverse: '0 -2px 10px rgba(0,0,0,0.03)',
        reverseDark: '0 -4px 20px rgba(0,0,0,0.1)'
    },

    linkColor: variant.primary,
    linkHoverColor: variant.primary,

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
        boxShadow: `0 2px 2px ${rgba('black', 0.05)}`,
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

    font: {
        jpSans: "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Hiragino Sans', 'Yu Gothic Medium', 'Yu Gothic', Meiryo, sans-serif",
        enSans: "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Helvetica, Arial, sans-serif",
        cnSans: "'Microsoft YaHei', 'PingFang SC', sans-serif",
        twSans: "'Microsoft JhengHei', 'PingFang TC', sans-serif",
        jpSerif: "'Hiragino Mincho ProN', 'Hiragino Mincho Pro', '游明朝', YuMincho, serif",
        enSerif: "'Times New Roman', serif",
        cnSerif: "'Kaiti SC', 'SimSun', serif"
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
            @media (max-width: ${variables.breakpoint - 1}px) {
                ${content}
            }
        `
    },

    base64encode: function(value: string) {
        return btoa(value)
    }
}
