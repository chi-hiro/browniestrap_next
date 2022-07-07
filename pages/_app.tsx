import 'styles/app.scss'
import 'styles/tailwind.scss'
import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store, EnvSlice } from 'store'
import { env } from 'lib/env'
import { reveal } from 'lib/reveal'

let isResize: number = 0

export default function App({ Component, pageProps }: AppProps) {
    // State
    const [viewport, setViewport] = useState<string>('user-scalable=no, width=390, viewport-fit=cover')

    // Methods
    const setLayout = () => {
        setViewport(env('viewport') as string)
        store.dispatch(EnvSlice.actions.update())
    }

    // Hooks
    useEffect(() => {
        setLayout()
        reveal()

        window.addEventListener('resize', () => {
            window.clearTimeout(isResize)
            isResize = window.setTimeout(() => setLayout(), 200)
        })
    }, [])

    // Render
    return (
        <Provider store={store}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content={viewport} />
                <meta name="format-detection" content="telephone=no" />
                <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
                {process.env.NEXT_PUBLIC_SITE_DESCRIPTION && <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />}
            </Head>

            <Component {...pageProps} />
        </Provider>
    )
}