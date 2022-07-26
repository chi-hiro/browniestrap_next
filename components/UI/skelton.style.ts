import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components'
import { rgba } from 'polished'
import { mixins } from '@/lib/styleUtl'

const skeltonBg = rgba('black', 0.1)
const skeltonDarkBg = rgba('white', 0.1)
const skelton_anime = keyframes`
    50% { opacity: 0.5; }
    100% { opacity: 1; }
`

const skelton = css`
    display: block;
    background-color: ${skeltonBg};

    @include darkmode {
        background-color: ${skeltonDarkBg};
    }

    &.animation {
        animation: ${skelton_anime} 1s linear infinite;
    }
`

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    skelton,

    skelton_circular: css`
        ${skelton}
        border-radius: 9999px;
    `,

    skelton_text: css`
        ${skelton}
        min-height: 14px;
        background-color: transparent;
        background-image: repeating-linear-gradient(0deg, ${skeltonBg}, ${skeltonBg} 14px, transparent 14px, transparent 22px);

        ${mixins.darkmode(`
            background-image: repeating-linear-gradient(0deg, ${skeltonDarkBg}, ${skeltonDarkBg} 14px, transparent 14px, transparent 22px);
        `)}
    `,

    skelton_h1: css`
        ${skelton}
        height: 1.5rem;

        ${mixins.breakpointUp(`
            height: 2.25rem;
        `)}
    `,

    skelton_h2: css`
        ${skelton}
        height: 1.4rem;

        ${mixins.breakpointUp(`
            height: 2rem;
        `)}
    `,

    skelton_h3: css`
        ${skelton}
        height: 1.3rem;

        ${mixins.breakpointUp(`
            height: 1.75rem;
        `)}
    `,

    skelton_h4: css`
        ${skelton}
        height: 1.2rem;

        ${mixins.breakpointUp(`
            height: 1.5rem;
        `)}
    `,

    skelton_h5: css`
        ${skelton}
        height: 1.1rem;

        ${mixins.breakpointUp(`
            height: 1.25rem;
        `)}
    `,

    skelton_h6: css`
        ${skelton}
        height: 1rem;
    `
}