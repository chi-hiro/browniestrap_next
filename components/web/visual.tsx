import { memo } from 'react'
import Carousel from 'components/carousel'
import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components'
import { rgba } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'

type Props = {
    children: React.ReactNode,
    slide: Array<{
        src: string,
        src_lg?: string,
        url?: string,
        embed?: string
    }>
}

const Visual = (props: Props) => (
    <div css={styles.visual}>
        <div css={styles.lead}>
            {props.children}
        </div>

        <Carousel
            mode="visual"
            duration={8000}
            zoom={true}
            timer={true}
            src={props.slide}
        />

        <span css={styles.scroll}>
            Scroll
        </span>
    </div>
)

export default memo(Visual)

const visual_scroll_anime = keyframes`
    0% { transform-origin: center top; transform: scale(1, 0); }
    50% { transform-origin: center top; transform: scale(1, 1); }
    51% { transform-origin: center bottom; transform: scale(1, 1); }
    100% { transform-origin: center bottom; transform: scale(1, 0); }
`

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    visual: css`
        position: relative;

        .header-fixed-top & {
            margin-top: ${-variables.ui.headerHeightSm}px;

            ${mixins.breakpointUp(`
                margin-top: ${-variables.ui.headerHeight}px;
            `)}
        }
    `,

    lead: css`
        pointer-events: none;
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: white;
        line-height: 1.5;

        .title {
            margin: 0;
            font-size: clamp(2.5rem, 1.591rem + 4.55vw, 5rem);
            line-height: inherit;
            color: inherit;
        }

        .description {
            margin: 0;
            font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);
            line-height: inherit;
            color: inherit;
        }
    `,

    scroll: css`
        user-select: none;
        position: absolute;
        z-index: 2;
        left: ${variables.gridGutterWidth / 2}px;
        bottom: 0;

        display: flex;
        align-items: center;
        gap: spacer(0.5);

        color: white;
        font-family: ${variables.font.enSans};
        font-size: 0.875rem;
        line-height: ${variables.iconSize}px;
        letter-spacing: 0.2em;
        writing-mode: vertical-rl;

        ${mixins.breakpointUp(`
            left: ${variables.gridGutterWidth}px;
        `)}

        &::after {
            content: '';
            display: block;
            height: 2rem;
            width: 1px;
            background-color: ${rgba('black', 0.5)};
        }

        &::before {
            content: '';
            position: absolute;
            z-index: 2;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 1px;
            height: 2rem;
            background-color: white;
            animation: ${visual_scroll_anime} 3000ms linear infinite;
        }
    `
}