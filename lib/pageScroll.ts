export const pageScroll = (hash: string) => {
    const header = document.querySelector<HTMLElement>('.header-fixed-top #header')
    const buffer = header ? header.offsetHeight : 0
    let top: number = 0

    if (hash !== '#app') {
        const target = document.querySelector<HTMLElement>(hash)
        if (target) top = target.getBoundingClientRect().top + scrollElement().scrollTop - buffer
    }

    scrollElement().scrollTo({ top, behavior: 'smooth' })
}

export const scrollElement = () => {
    if ('scrollingElement' in document) {
        return document.scrollingElement!
    } else {
        return document.documentElement!
    }
}