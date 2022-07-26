import { memo } from 'react'
import getConfig from 'next/config'
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'

const { publicRuntimeConfig } = getConfig()

const Footer = () => {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ''

    return (
        <StyledFooter>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5">
                    <div className="aboutus flex-auto text-center lg:text-left">
                        <img src={`${basePath}/img/logo.png`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} className="hidden-darkmode" />
                        <img src={`${basePath}/img/logo-wt.png`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} className="hidden-lightmode" />

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
        </StyledFooter>
    )
}

export default memo(Footer)

const StyledFooter = styled.footer`
    position: relative;
    z-index: 2;
    background-color: ${darken(0.02, variables.theme.bodyBg)};
    font-size: 0.875rem;

    padding-top: 3rem;
    padding-bottom: 3rem;

    ${mixins.darkmode(`
        background-color: ${lighten(0.02, variables.darkTheme.bodyBg)};
    `)}

    .aboutus {
        flex: 0 0 auto;

        img {
            display: inline-block;
            margin: 0 0 1rem;

            max-width: 200px;
            max-height: 200px;
            object-fit: contain;
        }

        > *:last-child {
            margin-bottom: 0;
        }
    }

    .copyright {
        display: block;
        font-size: 0.75rem;
        line-height: 1;
        margin: 0;
        opacity: 0.5;
    }
`