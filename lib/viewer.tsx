import { createRoot } from 'react-dom/client'
import Viewer from '@/components/viewer'

export const viewer = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (e.currentTarget) {
        // Get image src
        let mode: string = 'image'
        const items: Array<string> = []
        const group = e.currentTarget.getAttribute('data-viewer-group')

        if (group) {
            document.querySelectorAll(`[data-viewer-group="${group}"]`).forEach(item => {
                const url = item.getAttribute('href')
                if (url) items.push(url)
            })
        } else {
            const url = e.currentTarget.getAttribute('href')
            if (url) {
                if (url.slice(-3) == 'mp4') {
                    mode = 'video'
                } else if (/youtube.com\/watch/.test(url)) {
                    mode = 'youtube'
                }
                items.push(url)
            }
        }

        // Set active
        const activeItem = items.indexOf(e.currentTarget.getAttribute('href') as string)

        // Render
        const container = document.createElement('div')
        container.setAttribute('id', 'viewer-container')
        document.body.appendChild(container)
        createRoot(document.querySelector('#viewer-container')!).render(
            <Viewer mode={mode} items={items} activeItem={activeItem} />
        )
    }
}