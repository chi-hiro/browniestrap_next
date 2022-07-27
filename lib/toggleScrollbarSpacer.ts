import { variables } from 'lib/styleUtl'

export const toggleScrollbarSpacer = async (value: boolean): Promise<boolean> => {
    const body = document.body

    return new Promise(resolve => {
        if (value) {
            body.classList.add('hide_scrollbar')
            body.style.paddingRight = variables.scrollbarW + 'px'
            resolve(true)

        } else {
            window.setTimeout(() => {
                body.classList.remove('hide_scrollbar')
                body.style.paddingRight = ''
                resolve(true)
            }, 300)
        }
    })
}