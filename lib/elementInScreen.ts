import { scrollElement } from 'lib/pageScroll'

export const elementInScreen = (target: HTMLElement) => {
    const scrPos = scrollElement().scrollTop

    if (scrPos > elementShowPos(target) && scrPos < elementHidePos(target)) {
        return true
    } else {
        return false
    }
}

export const elementShowPos = (target: HTMLElement) => {
    return window.pageYOffset + target.getBoundingClientRect().top - window.innerHeight
}

export const elementHidePos = (target: HTMLElement) => {
    return window.pageYOffset + target.getBoundingClientRect().top + target.offsetHeight
}