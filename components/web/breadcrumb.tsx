import { memo } from 'react'
import Link from 'next/link'
import Icon from '@/components/UI/icon'

type Props = {
    homeicon?: boolean
    src: Array<{
        name: string,
        url: string
    }>
}

const Breadcrumb = (props: Props) => {
    return (
        <ol itemScope itemType="http://schema.org/BreadcrumbList" className="breadcrumb">
            {props.src.map((item, index) => (
                <li className={Number(index) + 1 === props.src.length ? 'active' : ''} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" key={`breadcrumb-item${index}`}>
                    {(props.homeicon && index === 0) && <span className="mr-0.5"><Icon value="home" /></span>}
                    <Link href={item.url}>
                        <a itemProp="item"><span itemProp="name">{item.name}</span></a>
                    </Link>
                    <meta itemProp="position" content={String(Number(index) + 1)} />
                </li>
            ))}
        </ol>
    )
}

export default memo(Breadcrumb)