import { memo } from 'react'
import getConfig from 'next/config'
import styled from 'styled-components'
import { variables, mixins, utility } from '@/lib/styleUtl'

const { publicRuntimeConfig } = getConfig()

const Footer = () => {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ''

    return (
        <StyledFooter>
            <div className="container">
                <div className="aboutus">
                    <img src={`${basePath}/img/logo.webp`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} css={utility.hiddenDark} width="200" height="17" />
                    <img src={`${basePath}/img/logo-wt.webp`} alt={process.env.NEXT_PUBLIC_SITE_TITLE} css={utility.hiddenLight} width="200" height="17" />

                    <address>
                        東京地千代田区神田1-1-1<br />
                        TEL 123-4567-8910
                    </address>
                </div>

                <small className="copyright">
                    © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_TITLE}
                </small>
            </div>
        </StyledFooter>
    )
}

export default memo(Footer)

const StyledFooter = styled.footer`
    position: relative;
    z-index: 2;
    background-color: ${variables.theme.mutedBg};
    font-size: 0.875rem;
    text-align: center;

    padding-top: 3rem;
    padding-bottom: 3rem;

    ${mixins.darkmode(`
        background-color: ${variables.darkTheme.mutedBg};
    `)}

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        ${mixins.breakpointUp(`
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        `)}
    }

    .aboutus {
        flex: 0 0 auto;

        img {
            display: inline-block;
            margin: 0 0 1rem;
            width: auto;
            height: 18px;
            object-fit: contain;
        }

        > *:last-child {
            margin-bottom: 0;
        }

        ${mixins.breakpointUp(`
            text-align: left;
        `)}
    }

    .copyright {
        display: block;
        font-size: 0.75rem;
        line-height: 1;
        margin: 0;
        opacity: 0.5;

        ${mixins.breakpointUp(`
            text-align: right;
        `)}
    }
`