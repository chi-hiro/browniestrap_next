import { memo } from 'react'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const Footer = () => {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ''

    return (
        <footer id="footer">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5">
                    <div className="aboutus flex-auto text-center lg:text-left">
                        <img src={`${basePath}/img/logo.png`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} className="brand-logo hidden-darkmode" />
                        <img src={`${basePath}/img/logo-wt.png`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} className="brand-logo hidden-lightmode" />

                        <address>
                            東京地千代田区神田1-1-1<br />
                            TEL 123-4567-8910
                        </address>
                    </div>

                    <small className="copyright flex-initial text-center lg:text-right">
                        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_TITLE}
                    </small>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)