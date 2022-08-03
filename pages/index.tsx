import { useRef } from 'react'
import getConfig from 'next/config'
import { Layout } from 'layout/default'
import { pagetop, pageback } from 'lib/mixins'
import { mixins, section, utility } from 'lib/styleUtl'
import { toast } from 'lib/toast'
import { openViewer } from 'lib/viewer'
import { Modal, ModalBody, ModalFooter, ModalRefTypes } from '@/components/modal'
import UI from 'components/UI'
import Form from '@/components/form'
import Carousel from '@/components/carousel'
import Web from '@/components/web'

const { publicRuntimeConfig } = getConfig()

export default function Home() {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ''

    // Ref
    const dummyModal1Ref = useRef<ModalRefTypes>()
    const dummyModal2Ref = useRef<ModalRefTypes>()

    // Render
    return (
        <Layout>
            <main>
                <Web.Visual
                    slide={[
                        { src: '/dummy/visual1.webp', src_lg: '/dummy/visual1_lg.webp' },
                        { src: '/dummy/visual2.webp', src_lg: '/dummy/visual2_lg.webp' },
                        { src: '/dummy/visual3.webp', src_lg: '/dummy/visual3_lg.webp' }
                    ]}
                >
                    <h1 className="title">LEAD SAMPLE</h1>
                    <p className="description">DESCRIPTION SAMPLE</p>
                </Web.Visual>

                <section id="section_type" css={[section.base, utility.borderTop]} className="reveal">
                    <div className="container">
                        <h2 css={section.heading}>タイポ</h2>

                        <h1>h1. 見出し</h1>
                        <h2>h2. 見出し</h2>
                        <h3>h3. 見出し</h3>
                        <h4>h4. 見出し</h4>
                        <h5>h5. 見出し</h5>
                        <h6>h6. 見出し</h6>

                        <hr />

                        <h3 css={section.headingSm}>
                            <span className="reveal reveal-cover">早い話、速いです。</span>
                        </h3>
                        <p css={section.lead}>iPhoneなら5Gを<br />最大限に使えます</p>
                        <p>iPhoneの5Gは超高速です。映画のダウンロードは一瞬。ビデオのストリーミングは一段と高画質。HDのFaceTime通話は携帯電話ネットワークで楽しめます。データの遅延も大幅に少なくなるでしょう。しかもiPhone 12は、より幅広いサービスエリアを世界中でカバーするので、より多くの場所で5Gが使えます。</p>
                        <p>広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。</p>

                        <p className="text-lg">広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。</p>
                        <p className="text-sm">広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。</p>

                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li><a href="">Integer molestie lorem at massa</a></li>
                        </ul>

                        <ol css={section.listChart}>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                        </ol>

                        <p>You can use the mark tag to <mark>highlight</mark> text. <code>code</code></p>

                        <blockquote className="blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                        </blockquote>
                    </div>
                </section>

                <section css={[section.cover, utility.textColor('white')]} className="text-center reveal-group snap-start">
                    <div className="container reveal reveal-fade-up">
                        <h2 css={[section.heading, utility.textColor('white')]}>カバー</h2>
                        <p>背景に画像を入れた段落</p>
                        <p>
                            <UI.Button model="md border" color="white">ボタン</UI.Button>
                        </p>
                    </div>

                    <span css={[utility.embed(1,1), utility.embedUp(21,9)]} className="section-cover-bg overlay reveal reveal-fade-back">
                        <img src={`${basePath}/dummy/dummy2.webp`} alt="" loading="lazy" />
                    </span>
                </section>

                <section css={section.grid} className="reveal">
                    <div className="grid lg:grid-cols-2 reveal-group">
                        <div className="lg:grid-span-1 section-grid-body reveal reveal-fade-up">
                            <div className="container">
                                <h2 className="section-heading text-left">200種類以上のプチゲームに挑戦する「ストーリー」モード</h2>
                                <p>「ストーリー」モードでは、元の世界に戻るために、仲間を増やしながら、各ステージのプチゲームやボスに挑戦します。各ステージでは、仲間の中からゲームに参加するキャラクターたちを選びます。</p>
                                <p>キャラクターごとにアクションが異なるので、ステージの特徴やチームのバランスを考えたキャラクター選択が重要になります。</p>
                                <p>Joy-Conをおすそわけすれば、全てのステージで2人同時プレイも可能です。ストーリーを進めていくことで、他のモードも遊べるようになりますよ。</p>
                            </div>
                        </div>

                        <div className="lg:grid-span-1 section-grid-img reveal reveal-mask-left">
                            <figure css={utility.embed(4,3)}>
                                <img src={`${basePath}/dummy/dummy5.webp`} alt="" loading="lazy" />
                            </figure>
                        </div>
                    </div>
                </section>

                <section id="section_skelton" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <h2 css={section.heading}>Skelton</h2>

                        <div className="grid grid-cols-2 gap-40px">
                            <div>
                                <UI.Skelton addClass="mb-1" ratio={[16, 9]} animate={true} />
                                <UI.Skelton model="text" line={3} animate={true} />
                            </div>

                            <div>
                                <div className="flex items-center gap-0.5 mb-1">
                                    <UI.Skelton model="rounded" width="48px" height="48px" animate={true} />
                                    <UI.Skelton model="text" line={1} width="80px" animate={true} />
                                </div>
                                <UI.Skelton model="h1" addClass="mb-1" width="60%" animate={true} />
                                <UI.Skelton model="text" line={7} animate={true} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_carousel" css={[section.base, utility.borderTop]} className="reveal">
                    <div className="container">
                        <h2 css={section.heading}>Carousel</h2>
                    </div>

                    <div className="mb-3">
                        <Carousel
                            model="slide"
                            pagination={true}
                            ratio={[16,9]}
                            src={[
                                { src: `${basePath}/dummy/visual1_lg.webp` },
                                { src: `${basePath}/dummy/visual2_lg.webp` },
                                { src: `${basePath}/dummy/visual3_lg.webp` }
                            ]}
                        />
                    </div>

                    <div className="container">
                        <Carousel
                            model="lineup"
                            zoom={true}
                            nav={true}
                            ratio={[1,1]}
                            src={[
                                { url: "/", src: `${basePath}/dummy/dummy1_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy2_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy3_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy4_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy5_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy1_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy2_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy3_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy4_thumb.webp` },
                                { url: "/", src: `${basePath}/dummy/dummy5_thumb.webp` }
                            ]}
                        />
                    </div>
                </section>

                <section id="section_card" css={[section.base, utility.borderTop]} className="reveal">
                    <div className="container">
                        <h2 css={section.heading}>Card</h2>

                        <h3 css={section.headingSm}>画像付き</h3>

                        <div className="grid gap-20px lg:gap-40px md:grid-cols-2 lg:grid-cols-3 reveal-group">
                            <div className="reveal reveal-fade-up">
                                <UI.Card src={`${basePath}/dummy/dummy1_thumb.webp`} title="ワイヤレスコントローラーに新色登場！">
                                    <UI.Badge model="bg sm" color="primary">News</UI.Badge>
                                    <h4>DualSense ワイヤレスコントローラーに新色登場！</h4>
                                    <small>2022.10.16</small>
                                    <p css={mixins.textClamp(3)}>「銀河」にインスパイアされた 2 種類のカラーで、どこまでも広がる遊びの世界へ。</p>
                                </UI.Card>
                            </div>

                            <div className="reveal reveal-fade-up">
                                <UI.Card model="text" color="secondary" src={`${basePath}/dummy/dummy2_thumb.webp`} href="/" title="目を凝らして見る世界、その絶叫は仲間に届いていなかった—">
                                    <UI.Badge model="bg sm" color="secondary">News</UI.Badge>
                                    <h4>目を凝らして見る世界、その絶叫は仲間に届いていなかった—</h4>
                                    <small>2022.10.16</small>
                                    <p css={mixins.textClamp(3)}>『FINAL FANTASY VII REMAKE INTERGRADE』は、大人気かつ受賞歴もある『FINAL FANTASY VII REMAKE』をPlayStation 5向けにライティングや質感、背景などの表現力を向上し、ユフィを主人公とした新規エピソード「FF7R EPISODE INTERmission」などの新要素を追加した作品だ。</p>
                                </UI.Card>
                            </div>

                            <div className="reveal reveal-fade-up">
                                <UI.Card model="bg" color="danger" src={`${basePath}/dummy/dummy3_thumb.webp`} href="/" title="初公開の新作や、注目タイトルの最新情報をチェックしよう">
                                    <UI.Badge model="bg sm" color="white">News</UI.Badge>
                                    <h4>初公開の新作や、注目タイトルの最新情報をチェックしよう</h4>
                                    <small>2022.10.16</small>
                                    <p css={mixins.textClamp(3)}>氷に覆われた文明崩壊後のロサンゼルスから、スナイパーのスコープから覗く第2次世界大戦まで、魅力的な体験がゾクゾク。</p>
                                </UI.Card>
                            </div>
                        </div>

                        <h3 css={section.headingSm}>通知</h3>

                        <UI.Card icon="info" addClass="mb-1">
                            <strong>Well done!</strong> You successfully read this important alert message.
                        </UI.Card>

                        <UI.Card model="text" color="success" icon="check_circle" addClass="mb-1">
                            <strong>Well done!</strong> You successfully read this important alert message.
                        </UI.Card>

                        <UI.Card model="text" color="info" icon="info" addClass="mb-1">
                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                        </UI.Card>

                        <UI.Card model="text" color="warning" icon="warning" addClass="mb-1">
                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                        </UI.Card>

                        <UI.Card model="text" color="danger" icon="cancel" addClass="mb-1">
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                        </UI.Card>

                        <UI.Card model="bg" color="success" icon="check_circle" addClass="mb-1">
                            <strong>Well done!</strong> You successfully read this important alert message.
                        </UI.Card>

                        <UI.Card model="bg" color="info" icon="info" addClass="mb-1">
                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                        </UI.Card>

                        <UI.Card model="bg" color="warning" icon="warning" addClass="mb-1">
                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                        </UI.Card>

                        <UI.Card model="bg" color="danger" icon="cancel" addClass="mb-1">
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                        </UI.Card>

                        <div className="grid lg:flex gap-0.5">
                            <UI.Button model="sm bg" color="success" onClick={() => toast('success', 'You successfully read this important alert message.')}>Toast</UI.Button>
                            <UI.Button model="sm bg" color="info" onClick={() => toast('info', 'This alert needs your attention, but it\'s not super important.', 'center')}>Toast(center)</UI.Button>
                            <UI.Button model="sm bg" color="warning" onClick={() => toast('warning', 'Better check yourself, you\'re not looking too good.', 'left')}>Toast(left)</UI.Button>
                            <UI.Button model="sm bg" color="danger" onClick={() => toast('danger', 'Change a few things up and try submitting again.', 'right')}>Toast(right)</UI.Button>
                        </div>
                    </div>
                </section>

                <section id="section_headline" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <div className="lg:flex">
                            <h2 className="section-heading lg:w-1/3">Headline</h2>

                            <div className="grid reveal-group lg:w-2/3">
                                <Web.Headline model="border" href="/" date="2021-12-24" badge={{ label: 'お知らせ', color: 'primary' }}>
                                    「よゐこのはじめてのプログラミング生活 第２回あそぶ編」（前編）を公開。視聴者のみなさんがつくったゲームをプレイします。
                                </Web.Headline>

                                <Web.Headline model="border" href="/" date="2021-10-02" badge={{ label: '重要', color: 'danger' }}>
                                    『スプラトゥーン3』の最新調査映像が公開。新たなステージやスペシャルウェポン、ヒーローモードの情報が判明。
                                </Web.Headline>

                                <Web.Headline model="border" href="/" date="2021-09-24" badge={{ label: 'プレスリリース', color: 'secondary' }}>
                                    シリーズ完全新作、Nintendo Switch『ベヨネッタ3』が2022年に発売決定。大魔獣を直接操作する新たなアクションも明らかに。
                                </Web.Headline>

                                <Web.Headline model="border" date="2021-09-01" badge={{ label: 'お知らせ', color: 'primary' }} rows={2}>
                                    Nintendo Switch『ゼルダ無双 厄災の黙示録』追加コンテンツ「エキスパンション・パス」第２弾のトレーラーが公開に。10月29日（金）に配信決定。
                                </Web.Headline>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_button" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <h2 css={section.heading}>Button</h2>

                        <h3 css={section.headingSm}>Bg</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Button model="bg md blockDown rounded" color="primary">Primary</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="secondary">Secondary</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="success">Success</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="info">Info</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="warning">Warning</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="danger">Danger</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="white">White</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="default">Default</UI.Button>
                        </div>

                        <h3 css={section.headingSm}>Border</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Button model="border md blockDown rounded" color="primary">Primary</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="secondary">Secondary</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="success">Success</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="info">Info</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="warning">Warning</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="danger">Danger</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="white">White</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="default">Default</UI.Button>
                        </div>

                        <h3 css={section.headingSm}>Other</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Button model="link md blockDown" color="primary">link primary</UI.Button>
                            <UI.Button model="bg md blockDown" color="primary" disabled>disabled</UI.Button>
                            <UI.Button model="bg md long" color="primary" loading>bg loading</UI.Button>
                            <UI.Button model="border md long" color="primary" loading>border loading</UI.Button>
                        </div>

                        <h3 css={section.headingSm}>Icon</h3>
                        <div className="flex flex-wrap gap-0.5 items-center">
                            <UI.Button model="sm bg blockDown" color="primary" startIcon={<UI.Icon value="shopping_cart" />}>
                                startIcon
                            </UI.Button>

                            <UI.Button model="sm border blockDown" color="primary" endIcon={<UI.Icon value="shopping_cart" />}>
                                endIcon
                            </UI.Button>

                            <UI.Button model="md bg blockDown" color="info" startIcon={<UI.Icon value="shopping_cart" />}>
                            startIcon
                            </UI.Button>

                            <UI.Button model="md border blockDown" color="info" endIcon={<UI.Icon value="shopping_cart" />}>
                            endIcon
                            </UI.Button>

                            <UI.Button model="lg bg blockDown" color="warning" startIcon={<UI.Icon value="shopping_cart" />}>
                            startIcon
                            </UI.Button>

                            <UI.Button model="lg border blockDown" color="warning" endIcon={<UI.Icon value="shopping_cart" />}>
                            endIcon
                            </UI.Button>
                        </div>

                        <div className="flex flex-wrap gap-0.5 items-center mt-1">
                            <UI.Button model="md long bg" color="primary" startIcon={<UI.Icon value="chevron_left" />}>
                                long startIcon
                            </UI.Button>

                            <UI.Button model="md long bg" color="primary" endIcon={<UI.Icon value="chevron_right" />}>
                                long endIcon
                            </UI.Button>

                            <UI.Button model="sm icon bg rounded" color="danger">
                                <UI.Icon value="close" />
                            </UI.Button>

                            <UI.Button model="md icon border rounded" color="success">
                                <UI.Icon value="arrow_forward" />
                            </UI.Button>
                        </div>

                        <h3 css={section.headingSm}>Handling test</h3>
                        <div className="flex flex-wrap gap-0.5 items-center">
                            <UI.Button model="sm bg blockDown" color="info" onClick={pageback}>History Back</UI.Button>
                            <UI.Button model="sm bg blockDown" color="info" onClick={pagetop}>Page Top</UI.Button>
                        </div>
                    </div>
                </section>

                <section id="section_forms" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <h2 css={section.heading}>Form</h2>

                        <h3 css={section.headingSm}>TextField</h3>
                        <div className="grid lg:grid-cols-3 gap-2 mb-2">
                            <Form.TextField name="basic" label="Textfield" help="フォームの補足説明がここに入ります。" required />
                            <Form.TextField name="feedback" label="Feedback" feedback={{ color: 'danger', message: 'Error message.' }} required />
                            <Form.TextField name="disabled" label="Disabled" value="Disabled value" disabled />
                            <Form.TextField name="readonly" label="Readonly" value="Readonly value" readonly />
                            <Form.TextField name="starticon" type="search" placeholder="Search" startIcon={<UI.Icon value="search" />} />
                            <Form.TextField name="endicon" type="number" label="End Icon" endIcon={<UI.Icon value="currency_yen" />} />
                            <Form.TextField name="select" type="select" label="Select" option={[{ value: 'option1' }, {value: 'option2'}]} startIcon={<UI.Icon value="calendar_today" />} />
                            <Form.TextField name="password" type="password" label="Password" />
                        </div>

                        <UI.Divider>または</UI.Divider>

                        <div className="mb-1">
                            <Form.TextField name="textarea" type="textarea" label="Message" maxlength={100} />
                        </div>

                        <h3 css={section.headingSm}>Checkbox</h3>
                        <div className="flex flex-wrap gap-1 mb-1">
                            <Form.Checkbox name="exsample-check" value="exsample1" label="Checkbox" />
                            <Form.Checkbox name="exsample-check" value="exsample2" color="info" label="Checkbox" />
                            <Form.Checkbox type="radio" name="exsample-radio" value="exsample3" label="Radio" checked={true} />
                            <Form.Checkbox type="radio" name="exsample-radio" value="exsample4" label="Radio" />
                        </div>

                        <div className="grid lg:grid-cols-4 gap-1 mb-1">
                            <Form.Checkbox name="exsample-check2" value="exsample5" label="Checkbox" model="box" />
                            <Form.Checkbox name="exsample-check2" value="exsample6" label="Checkbox" model="box" />
                            <Form.Checkbox type="radio" name="exsample-radio2" value="exsample7" label="Radio" model="box" checked={true} />
                            <Form.Checkbox type="radio" name="exsample-radio2" value="exsample8" label="Radio" model="box" />
                        </div>

                        <h3 css={section.headingSm}>Switch</h3>
                        <div className="flex gap-1 mb-1">
                            <Form.Switch name="exsample-switch" value="exsample-switch1" label="Switch 1" checked />
                            <Form.Switch name="exsample-switch" value="exsample-switch2" color="danger" label="Switch 2" />
                        </div>
                    </div>
                </section>

                <section id="section_loader" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <h2 css={section.heading}>Loader</h2>

                        <div className="grid grid-cols-3 gap-1">
                            <div css={utility.bgColor('muted')} className="p-20px">
                                <h3 css={section.headingSm} className="text-center">dot</h3>
                                <UI.Loader model="dot" rounded={true} />
                            </div>

                            <div css={utility.bgColor('dark')} className="p-20px">
                                <h3 css={[section.headingSm, utility.textColor('white')]} className="text-center">spin</h3>
                                <UI.Loader model="spin" color="white" />
                            </div>

                            <div css={utility.bgColor('muted')} className="p-20px">
                                <h3 css={section.headingSm} className="text-center">circle</h3>
                                <UI.Loader model="circle" progress={32} />
                            </div>

                            <div css={utility.bgColor('muted')} className="p-20px col-span-3">
                                <h3 css={section.headingSm} className="text-center">line</h3>
                                <UI.Loader model="line" color="warning" />
                            </div>

                            <div css={utility.bgColor('muted')} className="p-20px col-span-3">
                                <h3 css={section.headingSm} className="text-center">bar</h3>
                                <UI.Loader model="bar" color="success" rounded={true} progress={64} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_badge" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <h2 css={section.heading}>Badge</h2>

                        <h3 css={section.headingSm}>text</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Badge model="text sm" color="primary" href="#">primary</UI.Badge>
                            <UI.Badge model="text sm" color="secondary" href="#">secondary</UI.Badge>
                            <UI.Badge model="text sm" color="success" href="#">success</UI.Badge>
                            <UI.Badge model="text sm" color="info" href="#">info</UI.Badge>
                            <UI.Badge model="text sm" color="warning" href="#">warning</UI.Badge>
                            <UI.Badge model="text sm" color="danger" href="#">danger</UI.Badge>
                            <UI.Badge model="text sm" color="white" href="#">white</UI.Badge>
                        </div>

                        <h3 css={section.headingSm}>background</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Badge model="bg sm" color="primary" href="#">primary</UI.Badge>
                            <UI.Badge model="bg sm" color="secondary" href="#">secondary</UI.Badge>
                            <UI.Badge model="bg sm" color="success" href="#">success</UI.Badge>
                            <UI.Badge model="bg sm" color="info" href="#">info</UI.Badge>
                            <UI.Badge model="bg sm" color="warning" href="#">warning</UI.Badge>
                            <UI.Badge model="bg sm" color="danger" href="#">danger</UI.Badge>
                            <UI.Badge model="bg sm" color="white" href="#">white</UI.Badge>
                        </div>

                        <h3 css={section.headingSm}>border</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Badge model="border sm" color="primary" href="#">primary</UI.Badge>
                            <UI.Badge model="border sm" color="secondary" href="#">secondary</UI.Badge>
                            <UI.Badge model="border sm" color="success" href="#">success</UI.Badge>
                            <UI.Badge model="border sm" color="info" href="#">info</UI.Badge>
                            <UI.Badge model="border sm" color="warning" href="#">warning</UI.Badge>
                            <UI.Badge model="border sm" color="danger" href="#">danger</UI.Badge>
                            <UI.Badge model="border sm" color="white" href="#">white</UI.Badge>
                        </div>

                        <h3 css={section.headingSm}>with Icon</h3>
                        <div className="flex flex-wrap items-center gap-0.5">
                            <UI.Badge model="text sm rounded" color="primary">
                                <UI.Icon value="account_circle" />
                                small
                            </UI.Badge>
                            <UI.Badge model="md rounded">
                                <img src="/dummy/dummy4_thumb.webp" alt="" loading="lazy" />
                                medium
                            </UI.Badge>
                            <UI.Badge model="text lg rounded" color="danger">
                                large
                                <UI.Icon value="cancel" />
                            </UI.Badge>
                        </div>

                        <h3 css={section.headingSm}>status</h3>
                        <div className="flex flex-wrap gap-1.5">
                            <UI.Badge model="status" color="primary" addClass="uppercase">primary</UI.Badge>
                            <UI.Badge model="status" color="secondary" addClass="uppercase">secondary</UI.Badge>
                            <UI.Badge model="status" color="success" addClass="uppercase">success</UI.Badge>
                            <UI.Badge model="status" color="info" addClass="uppercase">info</UI.Badge>
                            <UI.Badge model="status" color="warning" addClass="uppercase">warning</UI.Badge>
                            <UI.Badge model="status" color="danger" addClass="uppercase">danger</UI.Badge>
                            <UI.Badge model="status" color="white" addClass="uppercase">white</UI.Badge>
                        </div>

                        <h3 css={section.headingSm}>check</h3>
                        <div className="flex flex-wrap gap-1.5">
                            <UI.Badge model="check" color="primary" addClass="capitalize">primary</UI.Badge>
                            <UI.Badge model="check" color="secondary" addClass="capitalize">secondary</UI.Badge>
                            <UI.Badge model="check" color="success" addClass="capitalize">success</UI.Badge>
                            <UI.Badge model="check" color="info" addClass="capitalize">info</UI.Badge>
                            <UI.Badge model="check" color="warning" addClass="capitalize">warning</UI.Badge>
                            <UI.Badge model="check" color="danger" addClass="capitalize">danger</UI.Badge>
                            <UI.Badge model="check" color="white" addClass="capitalize">white</UI.Badge>
                        </div>

                        <h3 css={section.headingSm}>count</h3>
                        <UI.Button model="md bg" color="primary">
                            Sample
                            <UI.Badge model="bg count" color="danger">8</UI.Badge>
                        </UI.Button>
                    </div>
                </section>

                <section id="section_expansion" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <h2 css={section.heading}>Expansion</h2>

                        <h3 css={section.headingSm}>default</h3>
                        <UI.Expansion title="Expansion (Click)">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </UI.Expansion>

                        <h3 css={section.headingSm}>border</h3>
                        <UI.Expansion model="border" title="Expansion (Hover)" hover={true}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </UI.Expansion>

                        <h3 css={section.headingSm}>popup</h3>
                        <div className="flex justify-end">
                            <UI.Expansion model="popup" title="Expansion (Popup)">
                                <ul className="expansion-nav-body">
                                    <li>
                                        <button type="button">
                                            Item 1
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button">
                                            Item 2
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" css={utility.textColor('danger')}>
                                            <UI.Icon value="delete" />
                                            Item 3
                                        </button>
                                    </li>
                                </ul>
                            </UI.Expansion>
                        </div>
                    </div>
                </section>

                <section id="section_viewer" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <h2 css={section.heading}>Viewer</h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5">
                            <span className="col-span-1 lg:col-span-1">
                                <a css={utility.hoverBorder} href={`${basePath}/dummy/dummy1.webp`} data-viewer-group="group1" onClick={openViewer} title="画像を拡大表示">
                                    <figure css={utility.embed(1,1)}>
                                        <img src={`${basePath}/dummy/dummy1_thumb.webp`} width="900" height="900" alt="" loading="lazy" />
                                    </figure>
                                </a>
                            </span>

                            <span className="col-span-1 lg:col-span-1">
                                <a css={utility.hoverBorder} href={`${basePath}/dummy/dummy2.webp`} data-viewer-group="group1" onClick={openViewer} title="画像を拡大表示">
                                    <figure css={utility.embed(1,1)}>
                                        <img src={`${basePath}/dummy/dummy2_thumb.webp`} width="900" height="900" alt="" loading="lazy" />
                                    </figure>
                                </a>
                            </span>

                            <span className="col-span-1 lg:col-span-1">
                                <a css={utility.hoverBorder} href={`${basePath}/dummy/dummy3.webp`} data-viewer-group="group1" onClick={openViewer} title="画像を拡大表示">
                                    <figure css={utility.embed(1,1)}>
                                        <img src={`${basePath}/dummy/dummy3_thumb.webp`} width="900" height="900" alt="" loading="lazy" />
                                    </figure>
                                </a>
                            </span>

                            <span className="col-span-1 lg:col-span-1">
                                <a css={utility.hoverBorder} href={`${basePath}/dummy/dummy4.webp`} onClick={openViewer} title="画像を拡大表示">
                                    <figure css={utility.embed(1,1)}>
                                        <img src={`${basePath}/dummy/dummy4_thumb.webp`} width="900" height="900" alt="" loading="lazy" />
                                    </figure>
                                </a>
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-0.5 mt-2">
                            <UI.Button model="bg md" color="primary" href="https://www.youtube.com/watch?v=Z2P818AAOn8" onClick={openViewer}>YouTube</UI.Button>
                        </div>
                    </div>
                </section>

                <section id="section_modal" css={[section.base, utility.borderTop]}>
                    <div className="container">
                        <h2 css={section.heading}>Modal</h2>

                        <div className="flex flex-wrap gap-0.5">
                            <UI.Button model="bg md" color="primary" onClick={(e) => dummyModal1Ref.current?.show(e)}>Basic</UI.Button>
                            <UI.Button model="bg md" color="primary" onClick={(e) => dummyModal2Ref.current?.show(e)}>Scroll</UI.Button>
                        </div>
                    </div>

                    <Modal ref={dummyModal1Ref}>
                        <ModalBody>
                            <p>容量がいっぱいでダウンロードできません。</p>
                            <p>本体保存メモリーまたはSDカードに、9.3GBの空き容量が必要です。<br />ソフトのデータを整理してください。</p>
                        </ModalBody>

                        <ModalFooter>
                            <button type="button" onClick={() => dummyModal1Ref.current?.hide()}>
                                とじる
                            </button>
                            <button type="button" css={utility.textColor('primary')} onClick={(e) => dummyModal2Ref.current?.show(e)}>
                                つぎへ
                            </button>
                        </ModalFooter>
                    </Modal>

                    <Modal ref={dummyModal2Ref} title="Google 利用規約" close={true}>
                        <ModalBody scroll={true} theme="terms">
                            <p>本利用規約には、Google のビジネスの仕組み、Google に適用される法律、および Google が常に正しいと信じてきた事柄が反映されています。結果として、本利用規約は、サービスを利用するユーザーと Google との関係を定義するのに役立っています。たとえば、本規約の見出しには以下のような内容が含まれています。</p>
                            <ul>
                                <li>ユーザーが Google に期待できることでは、Google がサービスを提供および開発する仕組みについて説明します</li>
                                <li>Google がユーザーに期待することでは、Google のサービスを利用する際のルールについて規定します</li>
                                <li>Google サービス内のコンテンツでは、Google のサービス内で見つかるコンテンツの知的所有権について説明し、そのコンテンツがユーザー、Google、または他者のうち誰に帰属するのかを示します</li>
                                <li>問題または意見の相違がある場合では、ユーザーのその他の法的権利と、誰かが本規約に違反した場合にどうなるかについて説明します</li>
                            </ul>
                            <p>ユーザーは、Google のサービスを利用することにより、本規約に同意することになります。そのため、本規約の内容を理解しておくことが重要です。</p>
                            <p>本規約に加えて、Google はプライバシー ポリシーも公開しています。プライバシー ポリシーは本規約とは独立した規定ですが、ユーザーが自身の情報を更新、管理、書き出し、削除する方法について理解を深めるためにもご一読されることをおすすめします。</p>
                            <h2>年齢に関する要件</h2>
                            <p>ユーザーが自分で Google アカウントを管理するための年齢要件を満たしていない場合、Google アカウントを使用するには親または保護者の方の許可を得なければなりません。本規約を、親または保護者の方と一緒に読んでください。</p>
                            <p>親または保護者の方がお子様のサービスの利用を許可する場合、本規約はその親または保護者の方に適用され、サービス利用時のお子様の行動について責任を負うことになります。</p>
                            <p>一部の Google サービスには追加の年齢要件が設けられており、それぞれのサービス固有の追加規約およびポリシーにその旨が記載されています。</p>
                            <h2>ユーザーと Google の関係</h2>
                            <p>本規約は、ユーザーと Google の関係を定義するためのものです。大まかに言うと、Google は本規約を遵守することに同意したユーザーに Google のサービスの利用を許可します。本規約には、Google のビジネスの仕組みと収益を生み出す方法が反映されています。 「Google」とは、Google LLC およびその関連会社を意味します。</p>
                        </ModalBody>
                    </Modal>
                </section>
            </main>
        </Layout>
    )
}
