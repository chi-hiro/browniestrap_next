import { memo, useMemo, forwardRef } from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { lighten } from 'polished'
import { variables, mixins } from '@/lib/styleUtl'

type Props = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string
    name: string
    value: string
    label: string
    checked?: boolean
    model?: string
    color?: string
}

const Checkbox = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const checkboxCSS = useMemo((): FlattenSimpleInterpolation[] => {
        const arr = [styles.base]
        props.model && arr.push(styles[props.model])
        arr.push(colorVariant(props.color ? props.color : 'primary', props.model ? props.model : ''))
        return arr
    }, [props.model, props.color])

    return (
        <div css={checkboxCSS}>
            <input
                ref={ref}
                type={props.type ? props.type : 'checkbox'}
                name={props.name}
                id={props.value}
                defaultChecked={props.checked}
                onChange={props.onChange && props.onChange}
            />

            <label htmlFor={props.value}>
                {props.label}
            </label>
        </div>
    )
})

export default memo(Checkbox)

const styles: { [key: string]: FlattenSimpleInterpolation } = {
    base: css`
        display: flex;
        align-items: center;

        input[type="checkbox"],
        input[type="radio"] {
            flex: 0 0 auto;
            appearance: none;
            cursor: pointer;
            position: relative;
            display: inline-block;
            width: 22px;
            height: 22px;
            background-color: ${variables.theme.inputBorderColor};
            border: 2px solid transparent;

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
                    border-color: rgba(0,0,0,0.2);
                `)}
            `)}

            &::after {
                content: '';
                position: absolute;
                z-index: 2;
                opacity: 0.15;
            }

            &:checked {
                &::after {
                    opacity: 1;
                }
            }
        }

        input[type="checkbox"] {
            ${mixins.rounded('4px')}

            &::after {
                top: 1px;
                left: 6px;
                width: 6px;
                height: 12px;
                border-bottom: 2px solid black;
                border-right: 2px solid black;
                transform: rotate(45deg);
            }

            &:checked {
                &::after {
                    border-color: white;
                }
            }
        }

        input[type="radio"] {
            border-radius: 100px;

            &::after {
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width: 10px;
                height: 10px;
                border-radius: 100px;
                background-color: black;
            }

            &:checked {
                &::after {
                    background-color: white;
                }
            }
        }

        label {
            flex: 0 0 auto;
            user-select: none;
            cursor: pointer;
            margin: 0;
            padding-left: 0.5rem;
            color: ${variables.theme.bodyColor};
            font-size: ${variables.input.md.fontSize};
            font-weight: normal;
            line-height: ${variables.iconSize}px;

            ${mixins.darkmode(`
                color: ${variables.darkTheme.bodyColor};
            `)}
        }
    `,

    box: css`
        position: relative;

        input[type="checkbox"],
        input[type="radio"] {
            display: none;
        }

        label {
            display: block;
            width: 100%;
            text-align: center;
            border: ${variables.borderWidth}px solid ${variables.theme.inputBorderColor};
            padding: 1rem 1.5rem;
            ${mixins.rounded()}

            ${mixins.darkmode(`
                border-color: ${variables.darkTheme.inputBorderColor};
            `)}

            img {
                width: auto;
                height: 40px;

                ${mixins.breakpointUp(`
                    height: 80px;
                `)}
            }
        }
    `
}

const colorVariant = (color: string, model: string) => {
    switch (model) {
        case 'box':
            return css`
                input[type="checkbox"],
                input[type="radio"] {
                    &:checked {
                        + label {
                            color: ${variables.color[color]};
                            border-color: ${variables.color[color]};
                            background-color: ${lighten(0.3, variables.color[color])};
                        }
                    }
                }
            `
        default:
            return css`
                input[type="checkbox"],
                input[type="radio"] {
                    &:checked {
                        background-color: ${variables.color[color]};
                    }
                }
            `
    }
}