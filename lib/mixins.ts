import { pageScroll } from 'lib/pageScroll'

export const pagetop = () => {
    pageScroll('pagetop')
}

export const pageback = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const link = e.currentTarget ? e.currentTarget as HTMLElement : e.target as HTMLElement
    const url = link.getAttribute('href')

    e.preventDefault()
    link.blur()

    if (document.referrer.match(new RegExp(location.hostname, 'i'))) {
        window.history.back()
    } else {
        if (url) location.href = url
    }
}

export const anchor = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const link = e.currentTarget ? e.currentTarget as HTMLElement : e.target as HTMLElement
    const url = link.getAttribute('href')

    if (url) {
        const hash = url.split('/').slice(-1)[0]

        if (hash && hash.charAt(0) === '#' && document.querySelector(hash)) {
            e.preventDefault()
            link.blur()
            pageScroll(hash)
        }
    }
}

export const select = (e: Event) => {
    window.location.href = (e.currentTarget as HTMLInputElement).value
}