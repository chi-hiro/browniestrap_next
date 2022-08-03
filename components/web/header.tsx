import { memo, useRef, useState, useEffect } from 'react'
import getConfig from 'next/config'
import { CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux'
import { EnvTypes } from 'store'
import { scrollElement, pageScroll } from 'lib/pageScroll'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins, utility } from '@/lib/styleUtl'
import Navigation from '@/components/web/navigation'

const { publicRuntimeConfig } = getConfig()
let beforePos: number = 0

const Header = () => {
    // Store
    const store = useSelector((state: { env: EnvTypes }) => state.env)

    // Ref
    const headerRef = useRef<HTMLElement>(null)

    // State
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ''
    const [isShow, setShow] = useState<boolean>(true)
    const [showBg, setBg] = useState<boolean>(false)
    const [showNav, setNav] = useState<boolean>(false)

    // Methods
    const scrollToggle = () => {
        const scrollPos = scrollElement().scrollTop

        if (headerRef.current && scrollPos < headerRef.current.offsetHeight) {
            //setShow(true)
            setBg(false)
        } else {
            //setShow(beforePos > scrollPos)
            setBg(true)
        }

        beforePos = scrollPos
    }

    const clickLogo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (store.mobile && scrollElement().scrollTop > 0) {
            e.preventDefault()
            pageScroll('pagetop')
        }
    }

    // Hooks
    useEffect(() => {
        document.body.classList.add('header-fixed-top')
        window.setTimeout(() => window.addEventListener('scroll', scrollToggle), 1000)
    }, [])

    // Render
    return (
        <CSSTransition nodeRef={headerRef} classNames="header" in={isShow} timeout={300}>
            <header css={styles.header} className={showBg || showNav ? 'show-bg' : ''} ref={headerRef}>
                <div css={styles.logo}>
                    <a href="/" onClick={clickLogo}>
                        <img src={`${basePath}/img/logo.webp`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} css={utility.hiddenDark} width="244" height="20" loading="lazy" />
                        <img src={`${basePath}/img/logo-wt.webp`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} css={utility.hiddenLight} width="244" height="20" loading="lazy" />
                    </a>
                </div>

                <CSSTransition classNames="header-nav" in={showNav || !store.mobile} timeout={300} unmountOnExit>
                    <div css={styles.nav}>
                        <Navigation />
                        {store.mobile && <span css={styles.overlay} onClick={() => setNav(false)}></span>}
                    </div>
                </CSSTransition>

                {store.mobile && (<button css={styles.hambureger} type="button" onClick={() => setNav(!showNav)} aria-label="Menu Button">
                    <span css={styles.hamburgerIcon} className={showNav ? 'active' : ''}></span>
                </button>)}
            </header>
        </CSSTransition>
    )
}

export default memo(Header)

const hamburgerGap = 4
const hamburgerLineWeight = 2
const hamburgerWidth = 24
const hamburgerHeight = hamburgerLineWeight * 3 + hamburgerGap * 2
const hamburgerTrans = hamburgerHeight / 2 - hamburgerLineWeight / 2

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    header: css`
        user-select: none;
        position: relative;
        z-index: ${variables.zIndex.bar};

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 ${variables.gridGutterWidth / 2}px;
        height: ${variables.ui.headerHeightSm}px;

        ${mixins.transition(['background', 'box-shadow'])}

        ${mixins.breakpointUp(`
            padding: 0 ${variables.gridGutterWidth}px;
            height: ${variables.ui.headerHeight}px;
        `)}

        .header-fixed-top & {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
        }

        .header-fixed-top.hide_scrollbar & {
            ${mixins.isMouse(`
                right: ${variables.scrollbarW}px;
            `)}
        }

        ${mixins.hoverMouse(`
            background-color: ${variables.theme.headerBg};
            box-shadow: ${variables.shadow.normalDark};

            ${mixins.darkmode(`
            background-color: ${variables.darkTheme.headerBg};
            `)}
        `)}

        &.show-bg {
            background-color: ${variables.theme.headerBg};
            box-shadow: ${variables.shadow.normalDark};

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.headerBg};
            `)}
        }

        &.header-enter,
        &.header-exit {
            ${mixins.transition(['transform'])}
            will-change: transform;
            transform: translateY(-100%);
        }

        &.header-enter-active {
            transform: none;
        }
    `,

    logo: css`
        flex: 0 0 auto;
        height: 100%;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            &:hover {
                text-decoration: none;
            }
        }

        img {
            vertical-align: top;
            width: auto;
            height: ${variables.ui.headerHeightSm / 4}px;

            ${mixins.breakpointUp(`
                height: ${variables.ui.headerHeight / 4}px;
            `)}
        }
    `,

    nav: css`
        position: fixed;
        z-index: ${variables.zIndex.sidebar};
        top: ${variables.ui.headerHeightSm}px;
        left: 0;
        right: 0;
        height: calc(100% - ${variables.ui.headerHeightSm}px);

        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        font-size: 1rem;

        ${mixins.breakpointUp(`
            background: none;
            backdrop-filter: none;
            position: static;
            width: auto;
            height: auto;
            padding: 0;
            flex: 1 1 auto;
            font-size: 1rem;
        `)}

        &.header-nav-enter,
        &.header-nav-exit {
            ${mixins.transition(['opacity'])}
            will-change: opacity;
            opacity: 0;
        }

        &.header-nav-enter-active {
            opacity: 1;
        }

        nav {
            position: relative;
            z-index: 2;
            overflow-x: hidden;
            overflow-y: auto;

            ${mixins.breakpointUp(`
                overflow: visible;
            `)}
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            border-top: 1px solid ${variables.theme.borderColor};
            background-color: ${variables.theme.headerBg};

            ${mixins.darkmode(`
                border-color: ${variables.darkTheme.borderColor};
                background-color: ${variables.darkTheme.headerBg};
            `)}

            ${mixins.breakpointUp(`
                display: flex;
                justify-content: flex-end;
                align-items: center;
                border: none;
                background: none;
            `)}

            li {
                border-bottom: 1px solid ${variables.theme.borderColor};

                ${mixins.darkmode(`
                    border-color: ${variables.darkTheme.borderColor};
                `)}

                ${mixins.breakpointUp(`
                    border: none;
                `)}

                > .show {
                    .expansion-toggler {
                        color: ${variables.linkHoverColor};
                    }
                }
            }

            a:not(.header-btn),
            .expansion-toggler {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                padding: ${(mixins.spacer(4) - variables.iconSize) / 2}px ${variables.gridGutterWidth / 2}px;
                line-height: ${variables.iconSize}px;
                font-size: inherit;
                color: ${variables.theme.headingsColor};
                white-space: nowrap;
                ${mixins.transition(['background', 'color'])}

                ${mixins.focusMouse(`
                    color: ${variables.linkColor};
                `)}

                ${mixins.darkmode(`
                    color: ${variables.darkTheme.headingsColor};
                `)}

                ${mixins.breakpointUp(`
                    padding: ${(variables.ui.headerHeight - variables.iconSize) / 2}px ${variables.gridGutterWidth / 2}px;
                `)}
            }

            .expansion-toggler {
                    font-size: inherit;

                    .icon {
                        color: ${variables.linkColor};
                    }
                }

                .expansion-body {
                    ${mixins.breakpointUp(`
                        overflow: visible !important;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        min-width: 100%;
                        margin-top: -1.25rem;

                        &.expansion-body-enter,
                        &.expansion-body-exit {
                            ${mixins.transition(['transform', 'opacity'])}
                            will-change: transform, opacity;
                            transform: translateY(-10px);
                            opacity: 0;
                        }

                        &.expansion-body-enter-active {
                            transform: none;
                            opacity: 1;
                        }
                    `)}
                }

            .header-btn {
                font-size: inherit;
                font-weight: normal;

                ${mixins.breakpointDown(`
                    display: block;
                    margin: ${(mixins.spacer(4) - variables.iconSize) / 2}px ${variables.gridGutterWidth / 2}px;
                `)}

                ${mixins.breakpointUp(`
                    margin: 0 0.5rem;
                    padding: ${variables.input.sm.padding}px ${variables.input.btnPaddingX}px;
                `)}
            }

            &.navigation-child {
                background-color: ${variables.theme.mutedBg};

                ${mixins.darkmode(`
                    background-color: ${variables.darkTheme.mutedBg};
                `)}

                ${mixins.breakpointUp(`
                    display: block;
                    padding: 1rem;
                    background-color: ${variables.theme.headerBg};
                    box-shadow: ${variables.shadow.normalDark};
                    ${mixins.rounded()}

                    ${mixins.darkmode(`
                        background-color: ${variables.darkTheme.headerBg};
                    `)}
                `)}

                li {
                    &:last-child {
                        border: none;
                    }
                }

                a:not(.header-btn) {
                    padding: ${(mixins.spacer(3.5) - variables.iconSize) / 2}px ${variables.gridGutterWidth}px;
                    font-size: 0.875em;

                    ${mixins.breakpointUp(`
                        padding: 1rem;
                        font-size: 1rem;
                    `)}
                }
            }
        }
    `,

    overlay: css`
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
    `,

    hamburger: css`
        ${mixins.buttonReset()}
        width: ${variables.ui.headerHeightSm}px;
        height: ${variables.ui.headerHeightSm}px;
        margin-right: ${(variables.ui.headerHeightSm - hamburgerWidth) / -2}px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ${mixins.breakpointUp(`
            width: ${variables.ui.headerHeight}px;
            height: ${variables.ui.headerHeight}px;
            margin-right: ${(variables.ui.headerHeight - hamburgerWidth) / -2}px;
        `)}
    `,

    hamburgerIcon: css`
        position: relative;
        display: block;

        width: ${hamburgerWidth}px;
        height: ${hamburgerLineWeight}px;
        background-color: ${variables.theme.headingsColor};
        ${mixins.transition(['background'])}

        ${mixins.darkmode(`
            background-color: ${variables.darkTheme.headingsColor};
        `)}

        &::before,
        &::after {
            content: '';
            width: 100%;
            height: ${hamburgerLineWeight}px;
            background-color: ${variables.theme.headingsColor};
            position: absolute;
            left: 0;
            ${mixins.transition(['transform'])}

            ${mixins.darkmode(`
                background-color: ${variables.darkTheme.headingsColor};
            `)}
        }

        &::before {
            top: ${-(hamburgerGap + hamburgerLineWeight)}px;
        }

        &::after {
            bottom: ${-(hamburgerGap + hamburgerLineWeight)}px;
        }

        &.active {
            background-color: transparent;

            &::before {
                transform: translateY(${hamburgerTrans}px) rotate(45deg);
            }

            &::after {
                transform: translateY(${-hamburgerTrans}px) rotate(-45deg);
            }
        }
    `
}