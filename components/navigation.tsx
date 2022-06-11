import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { anchor } from 'lib/mixins'
import Expansion from 'components/expansion'

const Navigation = () => {
    const router = useRouter()

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/dummy">Dummy</Link>
                </li>

                <li>
                    <Expansion title="Components" hover={true}>
                        <ul className="navigation-child">
                            <li>
                                <a href="#section_card" onClick={anchor}>Card</a>
                            </li>
                            <li>
                                <a href="#section_button" onClick={anchor}>Button</a>
                            </li>
                            <li>
                                <a href="#section_forms" onClick={anchor}>Forms</a>
                            </li>
                            <li>
                                <a href="#section_loader" onClick={anchor}>Loader</a>
                            </li>
                            <li>
                                <a href="#section_viewer" onClick={anchor}>Viewer</a>
                            </li>
                            <li>
                                <a href="#section_modal" onClick={anchor}>Modal</a>
                            </li>
                        </ul>
                    </Expansion>
                </li>

                <li>
                    <a href="/" className="btn is-primary rounded-full">ログイン</a>
                </li>
            </ul>
        </nav>
    )
}

export default memo(Navigation)