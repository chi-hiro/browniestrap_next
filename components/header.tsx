import { memo, useRef, useState, useEffect } from 'react'
import getConfig from 'next/config'
import { CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux'
import { EnvTypes } from 'store'
import { scrollElement, pageScroll } from 'lib/pageScroll'
import Navigation from 'components/navigation'

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
            pageScroll('#__next')
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
            <header id="header" className={showBg || showNav ? 'show-bg' : ''} ref={headerRef}>
                <div id="header-logo">
                    <a href="/" onClick={clickLogo}>
                        <img src={`${basePath}/img/logo.png`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} className="brand-logo hidden-darkmode" />
                        <img src={`${basePath}/img/logo-wt.png`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} className="brand-logo hidden-lightmode" />
                    </a>
                </div>

                <CSSTransition classNames="header-nav" in={showNav || !store.mobile} timeout={300} unmountOnExit>
                    <div id="header-nav">
                        <Navigation />
                        {store.mobile && <span id="header-nav-overlay" onClick={() => setNav(false)}></span>}
                    </div>
                </CSSTransition>

                {store.mobile && (<button type="button" id="hamburger" className={showNav ? 'active' : ''} onClick={() => setNav(!showNav)}>
                    <span id="hamburger-icon"></span>
                </button>)}
            </header>
        </CSSTransition>
    )
}

export default memo(Header)
