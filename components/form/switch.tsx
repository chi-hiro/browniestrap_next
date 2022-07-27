import { memo, useMemo, forwardRef } from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variables, mixins } from '@/lib/styleUtl'

type Props = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string
    value: string
    checked?: boolean
    color?: string
}

const Switch = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const switchCSS = useMemo(() => {
        const color = variables.color[props.color ? props.color : 'primary']

        return [
            styles.base,
            `
                &:checked {
                    background-color: ${color};
                }
            `
        ]
    }, [props.color])

    return (
        <input
            ref={ref}
            type="checkbox"
            name={props.name}
            id={props.value}
            defaultChecked={props.checked}
            onChange={props.onChange && props.onChange}
            css={switchCSS}
        />
    )
})

export default memo(Switch)

export const styles: { [key: string]: FlattenSimpleInterpolation } = {
    base: css`
        appearance: none;
        cursor: pointer;
        display: block;
        position: relative;
        width: ${variables.iconSize * 2}px;
        height: ${variables.iconSize}px;
        background-color: ${variables.theme.inputBorderColor};
        border: 2px solid transparent;
        border-radius: 9999px;
        transition: background 100ms ${variables.easing}, border 100ms ${variables.easing};

        &:focus-visible {
            border-color: rgba(0,0,0,0.2);
        }

        ${mixins.hoverMouse(`
            border-color: rgba(0,0,0,0.2);
        `)}

        ${mixins.darkmode(`
            background-color: ${variables.darkTheme.inputBorderColor};

            &:focus-visible {
                border-color: rgba(255,255,255,0.3);
            }

            ${mixins.hoverMouse(`
                border-color: rgba(255,255,255,0.3);
            `)}
        `)}

        &::after {
            content: '';
            position: absolute;
            top: ${(variables.iconSize - 22) / 2}px;
            left: ${(variables.iconSize - 22) / 2}px;
            z-index: 2;
            width: 18px;
            height: 18px;
            border-radius: 9999px;
            background-color: white;
            transition: transform 100ms ${variables.easing};
        }

        &:checked {
            &::after {
                transform: translateX(${variables.iconSize}px);
            }
        }
    `
}