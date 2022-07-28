import { memo } from 'react'
import { css } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

type Props = {
    children: React.ReactNode
}

const Divider = (props: Props) => {
    return (
        <span css={style}>
            <span>{props.children}</span>
        </span>
    )
}

export default memo(Divider)

const style = css`
    display: block;
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
        line-height: ${variables.iconSize}px;
    }
`