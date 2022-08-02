import { css } from 'styled-components'
import { darken, lighten } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'

const reboot = css`
    *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
        all: unset;
        display: revert;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        font-family: ${variables.base.fontFamily};
        font-size: ${variables.base.fontSize}px;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    body {
        margin: 0;
        line-height: ${variables.base.lineHeight};
        color: ${variables.theme.bodyColor};
        background-color: ${variables.theme.bodyBg};
        scroll-behavior: smooth;

        ${mixins.darkmode(`
            color: ${variables.darkTheme.bodyColor};
            background-color: ${variables.darkTheme.bodyBg};
        `)}

        &.hide_scrollbar {
            overflow: hidden !important;

            #__next {
                overflow: hidden;
            }
        }
    }

    [tabindex="-1"]:focus:not(:focus-visible) {
        outline: 0 !important;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid ${variables.theme.borderColor};

        ${mixins.darkmode(`
            border-color: ${variables.darkTheme.borderColor};
        `)}
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-family: inherit;
        font-weight: 700;
        line-height: 1.5;
        color: ${variables.theme.headingsColor};
        box-decoration-break: clone;
        ${mixins.textKerning()}

        ${mixins.darkmode(`
            color: ${variables.darkTheme.headingsColor};
        `)}
    }

    h1 { font-size: ${variables.fontSize.h1.sm}; }
    h2 { font-size: ${variables.fontSize.h2.sm}; }
    h3 { font-size: ${variables.fontSize.h3.sm}; }
    h4 { font-size: ${variables.fontSize.h4.sm}; }
    h5 { font-size: ${variables.fontSize.h5.sm}; }
    h6 { font-size: ${variables.fontSize.h6.sm}; }

    ${mixins.breakpointUp(`
        h1 { font-size: ${variables.fontSize.h1.lg}; }
        h2 { font-size: ${variables.fontSize.h2.lg}; }
        h3 { font-size: ${variables.fontSize.h3.lg}; }
        h4 { font-size: ${variables.fontSize.h4.lg}; }
        h5 { font-size: ${variables.fontSize.h5.lg}; }
        h6 { font-size: ${variables.fontSize.h6.lg}; }
    `)}

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    abbr[title],
    abbr[data-original-title] {
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
        cursor: help;
        border-bottom: 0;
        -webkit-text-decoration-skip-ink: none;
        text-decoration-skip-ink: none;
    }

    address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
    }

    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ul,
    ol {
        padding-left: 1.25rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }

    dt {
        font-weight: 700;
    }

    dd {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }

    blockquote {
        overflow: hidden;
        padding: 1rem 1.5rem 0;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        line-height: 1.5;
        background-color: ${variables.theme.mutedBg};
        ${mixins.rounded()}

        ${mixins.darkmode(`
            background-color: ${variables.darkTheme.mutedBg};
        `)}

        small {
            display: block;
            padding: 1rem 1.5rem;
            margin: 1rem -1.5rem 0;
            background-color: ${variables.theme.mutedBg};
            font-size: 85%;
            color: ${variables.theme.mutedColor};

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.mutedBg};
                color: ${variables.darkTheme.mutedColor};
            `)}

            &::before {
                content: "\2014 \00A0";
            }
        }

        p {
            margin-bottom: 0;

            + p {
                margin-top: 1rem;
            }
        }

        a {
            ${mixins.nowrap()}
        }
    }

    b,
    strong {
        font-weight: bolder;
    }

    small {
        display: inline-block;
        font-size: 0.8125rem;
        font-weight: normal;
        line-height: 1.5;
    }

    mark {
        font-weight: bold;
        color: ${variables.theme.headingsColor};
        background: linear-gradient(transparent 70%, #fcff47 0%);

        ${mixins.darkmode(`
            background: #fcff47;
        `)}
    }

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    a {
        cursor: pointer;
        color: ${variables.linkColor};
        text-decoration: none;
        background-color: transparent;

        ${mixins.hoverMouse(`
            color: ${variables.linkHoverColor};
        `)}

        &:focus-visible {
            text-decoration: underline;
        }
    }

    a:not([href]):not([class]) {
        color: inherit;
        text-decoration: none;

        &:hover, &:focus {
            color: inherit;
            text-decoration: none;
        }
    }

    pre,
    code,
    kbd,
    samp {
        font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 1em;
    }

    code {
        padding: 0 4px;
        margin: 0 2px;
        border-radius: 2px;
        font-size: 0.875rem;
        color: white;
        background-color: ${variables.color.info};
    }

    pre {
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
    }

    figure {
        margin: 0 0 1rem;
    }

    img,
    svg {
        vertical-align: middle;
    }

    table {
        caption-side: bottom;
        border-collapse: collapse;
    }

    caption {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: ${variables.theme.mutedColor};
        text-align: left;

        ${mixins.darkmode(`
            color: ${variables.darkTheme.mutedColor};
        `)}
    }

    th {
        text-align: inherit;
        text-align: -webkit-match-parent;
    }

    label {
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    button {
        border-radius: 0;

        &:focus:not(:focus-visible) {
            outline: 0;
        }
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    a,
    input,
    button,
    select,
    optgroup,
    textarea {
        &:active,
        &:hover,
        &:focus {
            outline: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
        }
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    [role="button"] {
        cursor: pointer;
    }

    select {
        word-wrap: normal;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button:not(:disabled),
    [type="button"]:not(:disabled),
    [type="reset"]:not(:disabled),
    [type="submit"]:not(:disabled) {
        cursor: pointer;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type="radio"],
    input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }

    textarea {
        overflow: auto;
        resize: vertical;
    }

    fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0;
    }

    legend {
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        line-height: inherit;
        color: inherit;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        outline-offset: -2px;
        -webkit-appearance: none;
    }

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }

    output {
        display: inline-block;
    }

    summary {
        display: list-item;
        cursor: pointer;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none !important;
    }

    iframe {
        border: 0;
        vertical-align: bottom;
    }

    #__next {
        max-width: 100vw;
        overflow-x: hidden;
        overflow-y: auto;
        scroll-behavior: smooth;
    }

    main {
        position: relative;
        z-index: 1;
    }

    ::-webkit-scrollbar {
        width: ${variables.scrollbarW}px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 4px solid transparent;
        background-clip: content-box;
        background-color: ${lighten(0.75, 'black')};

        ${mixins.darkmode(`
            background-color: ${darken(0.75, 'white')};
        `)}
    }

    [class*='material-icons'] {
        vertical-align: top;
    }

    .font_ja { font-family: ${variables.font.jpSans}; }
    .font_en { font-family: ${variables.font.enSans}; }
    .font_zh_CN { ${variables.font.cnSans}; }
    .font_zh_TW { ${variables.font.twSans}; }
`

export default reboot