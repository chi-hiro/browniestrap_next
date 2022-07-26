import { ReactElement } from 'react'
import Header from '@/components/web/header'
import Footer from '@/components/web/footer'

type LayoutProps = Required<{
    readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)