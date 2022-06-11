import { ReactElement } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'

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