import { createRoot } from 'react-dom/client'
import Notification from '@/components/UI/notification'

export const toast = (color: string, message: string, position?: string) => {
    const container = document.createElement('div')
    container.classList.add('notification-dummy')
    document.body.appendChild(container)
    createRoot(document.querySelector('.notification-dummy')!).render(
        <Notification color={color} position={position}>{message}</Notification>
    )
}