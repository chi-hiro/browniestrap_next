import { css } from 'styled-components'
import { variables, mixins, easing } from '@/lib/styleUtl'

const colorVariant = () => {
    let str = ''

    Object.keys(variables.color).forEach(key => {
        str += `
            .text-${key} {
                color: ${variables.color[key]} !important;
            }

            .bg-${key} {
                background-color: ${variables.color[key]} !important;
            }

            .border-${key} {
                border-color: ${variables.color[key]} !important;
            }
        `
    })

    return str
}

const embedRatio = [
    [16, 9],
    [21, 9],
    [1, 1],
    [4, 3],
    [2, 1],
    [3, 1]
]

const embedVariant = () => {
    let str = ''

    embedRatio.forEach(item => {
        str += `
            .embed-${item[0]}by${item[1]} {
                aspect-ratio: ${item[0]} / ${item[1]};

                &.portrait {
                    aspect-ratio: ${item[1]} / ${item[0]};
                }
            }

            ${mixins.breakpointUp(`
                .lg-embed-${item[0]}by${item[1]} {
                    aspect-ratio: ${item[0]} / ${item[1]} !important;

                    &.portrait {
                        aspect-ratio: ${item[1]} / ${item[0]} !important;
                    }
                }
            `)}
        `
    })

    return str
}

const utilities = css`
    // Text
    .lead {
        font-size: 1.5rem;
        line-height: 1.3;
        box-decoration-break: clone;
        ${mixins.textKerning()}

        ${mixins.breakpointUp(`
            font-size: 2rem;
        `)}
    }

    .text-kerning {
        ${mixins.textKerning()}
    }

    .font-family-ja-sans  { font-family: ${variables.font.jpSans}; }
    .font-family-ja-serif { font-family: ${variables.font.jpSerif}; }
    .font-family-en-sans  { font-family: ${variables.font.enSans}; }
    .font-family-en-serif { font-family: ${variables.font.enSerif}; }
    .font-family-zh_CN-sans  { font-family: ${variables.font.cnSans}; }
    .font-family-zh_CN-serif { font-family: ${variables.font.cnSerif}; }
    .font-family-zh_TW-sans  { font-family: ${variables.font.twSans}; }

    .font_ja { font-family: ${variables.font.jpSans}; }
    .font_en { font-family: ${variables.font.enSans}; }
    .font_zh_CN { ${variables.font.cnSans}; }
    .font_zh_TW { ${variables.font.twSans}; }

    .text-hide {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
    }

    .text-clamp-1 { ${mixins.textClamp(1)} }
    .text-clamp-2 { ${mixins.textClamp(2)} }
    .text-clamp-3 { ${mixins.textClamp(3)} }

    .text-muted {
        color: ${variables.theme.mutedColor};

        ${mixins.darkmode(`
            color: ${variables.darkTheme.mutedColor};
        `)}
    }

    .bg-light {
        background-color: ${variables.theme.bodyBg};
    }

    .bg-dark {
        background-color: ${variables.darkTheme.bodyBg};
    }

    .bg-muted {
        background-color: ${variables.theme.mutedBg};

        ${mixins.darkmode(`
            background-color: ${variables.darkTheme.mutedBg};
        `)}
    }

    ${colorVariant()}

    .divider {
        position: relative;
        text-align: center;
        margin: 1rem 0;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            margin: auto;
            background-color: ${variables.theme.borderColor};

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.borderColor};
            `)}
        }

        span {
            display: inline-block;
            padding: 0 0.5rem;
            position: relative;
            z-index: 2;
            background-color: white;
            font-size: 0.8125rem;
            letter-spacing: 1px;
            line-height: ${variables.iconSize};
        }
    }

    .border-t {
        border-top: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    }

    .border-b {
        border-bottom: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    }

    .border-l {
        border-left: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    }

    .border-r {
        border-right: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    }

    .border-x {
        border-left: 1px solid ${variables.theme.borderColor};
        border-right: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    }

    .border-y {
        border-top: 1px solid ${variables.theme.borderColor};
        border-bottom: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    }

    .list-unstyled {
        padding-left: 0;
        padding-right: 0;
        list-style: none;
    }

    .list-inline {
        padding-left: 0;
        padding-right: 0;
        list-style: none;

        li {
            display: inline-block;

            &:not(:last-child) {
                margin-right: 0.5rem;
            }
        }
    }

    .list-chart {
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
                padding: -6px;
                margin-top: -4px;
                min-width: 2rem;
                border-radius: 9999px;

                ${mixins.darkmode(`
                    border-color: ${variables.darkTheme.bodyColor};
                    background-color: ${variables.darkTheme.bodyBg};
                `)}
            }
        }
    }

    // Display
    .hidden-bp-up {
        ${mixins.breakpointUp(`
            display: none !important;
        `)}
    }

    .hidden-bp-down {
        ${mixins.breakpointDown(`
            display: none !important;
        `)}
    }

    .hidden-lightmode {
        @media (prefers-color-scheme: light) {
            display: none !important;
        }
    }

    ${mixins.darkmode(`
        @include darkmode {
            display: none !important;
        }
    `)}

    .img-fluid {
        max-width: 100%;
        height: auto;
    }

    // Embed
    .embed {
        display: block;
        width: 100%;
        padding: 0;
        overflow: hidden;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

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
    }

    ${embedVariant()}

    .embed-1vh {
        height: 100vh;
        height: 100svh;
    }

    .lg-embed-1vh {
        @include breakpoint-up {
            height: 100vh;
            height: 100svh;
        }
    }

    // Hover
    .hover-border {
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
    }

    .hover-zoom {
        transition: transform 800ms ${easing.easeOutQuint};

        ${mixins.focusMouse(`
            transform: scale(1.03);
        `)}
    }

    .hover-opacity {
        display: block;
        transition: opacity ${variables.duration} linear;

        ${mixins.focusMouse(`
            opacity: 0.85;
        `)}
    }
`

export default utilities