import { useRef } from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import { Layout } from 'layout/default'
import { pagetop, pageback } from 'lib/mixins'
import { toast } from 'lib/toast'
import { viewer } from 'lib/viewer'
import { Modal, ModalBody, ModalFooter, ModalRefTypes } from '@/components/modal'
import Carousel from 'components/carousel'
import UI from 'components/UI'
import Form from '@/components/form'
import Web from '@/components/web'

const { publicRuntimeConfig } = getConfig()

export default function Home() {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ''

    // Ref
    const dummyModal1Ref = useRef<ModalRefTypes>()
    const dummyModal2Ref = useRef<ModalRefTypes>()

    // Methods
    const formcheck = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('check form ---------')
        console.log('username:', e.currentTarget['username'].value)
        console.log('password:', e.currentTarget['password'].value)
        console.log('agreement:', e.currentTarget['agreement'].checked)
    }

    // Render
    return (
        <Layout>
            <main>
                <Web.Visual slide={[
                    { src_lg: `${basePath}/dummy/visual1_lg.jpg`, src: `${basePath}/dummy/visual1.jpg` },
                    { src_lg: `${basePath}/dummy/visual2_lg.jpg`, src: `${basePath}/dummy/visual2.jpg` },
                    { src_lg: `${basePath}/dummy/visual3_lg.jpg`, src: `${basePath}/dummy/visual3.jpg` }
                ]}>
                    <h1 className="title">LEAD SAMPLE</h1>
                    <p className="description">DESCRIPTION SAMPLE</p>
                </Web.Visual>

                <section id="section_type" className="section border-t reveal">
                    <div className="container">
                        <h2 className="section-heading">タイポ</h2>

                        <h1>h1. 見出し</h1>
                        <h2>h2. 見出し</h2>
                        <h3>h3. 見出し</h3>
                        <h4>h4. 見出し</h4>
                        <h5>h5. 見出し</h5>
                        <h6>h6. 見出し</h6>

                        <hr />

                        <h3 className="section-heading-sm">
                            <span className="reveal reveal-cover">早い話、速いです。</span>
                        </h3>
                        <p className="lead">iPhoneなら5Gを<br />最大限に使えます</p>
                        <p>iPhoneの5Gは超高速です。映画のダウンロードは一瞬。ビデオのストリーミングは一段と高画質。HDのFaceTime通話は携帯電話ネットワークで楽しめます。データの遅延も大幅に少なくなるでしょう。しかもiPhone 12は、より幅広いサービスエリアを世界中でカバーするので、より多くの場所で5Gが使えます。</p>
                        <p>広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。</p>

                        <p className="text-lg">広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。</p>
                        <p className="text-sm">広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。</p>

                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li><a href="">Integer molestie lorem at massa</a></li>
                        </ul>

                        <ol className="list-chart">
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

                <section className="section section-cover text-center reveal-group snap-start">
                    <div className="container text-white reveal reveal-fade-up">
                        <h2 className="section-heading">カバー</h2>
                        <p>背景に画像を入れた段落</p>
                        <p>
                            <UI.Button model="md border" color="white">ボタン</UI.Button>
                        </p>
                    </div>

                    <span className="embed embed-1by1 lg:embed-16by9 section-cover-bg overlay reveal reveal-fade-back">
                        <img src={`${basePath}/dummy/cover.jpg`} alt="" />
                    </span>
                </section>

                <section className="section section-grid reveal">
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
                            <figure className="embed embed-4by3">
                                <img src={`${basePath}/dummy/5.jpg`} alt="" />
                            </figure>
                        </div>
                    </div>
                </section>

                <section id="section_skelton" className="section border-t reveal">
                    <div className="container">
                        <h2 className="section-heading">Skelton</h2>

                        <div className="grid grid-cols-2 gap-40px">
                            <div>
                                <UI.Skelton addClass="embed embed-16by9 mb-1" animation={true} />
                                <UI.Skelton model="text" height={22 * 3} animation={true} />
                            </div>

                            <div>
                                <div className="flex items-center gap-0.5 mb-1">
                                    <UI.Skelton model="circular" width={48} height={48} animation={true} />
                                    <UI.Skelton model="text" width={80} animation={true} />
                                </div>
                                <UI.Skelton model="h1" addClass="w-2/3 mb-1" animation={true} />
                                <UI.Skelton model="text" height={22 * 5} animation={true} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_carousel" className="section border-t reveal">
                    <div className="container">
                        <h2 className="section-heading">Carousel</h2>
                    </div>

                    <div className="mb-3">
                        <Carousel
                            mode="slide"
                            pagination={true}
                            src={[
                                { embed: "embed-4by3 lg:embed-16by9", src: `${basePath}/dummy/visual1_lg.jpg` },
                                { embed: "embed-4by3 lg:embed-16by9", src: `${basePath}/dummy/visual2_lg.jpg` },
                                { embed: "embed-4by3 lg:embed-16by9", src: `${basePath}/dummy/visual3_lg.jpg` }
                            ]}
                        ></Carousel>
                    </div>

                    <div className="container">
                        <Carousel
                            mode="lineup"
                            zoom={true}
                            nav={true}
                            src={[
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual1.jpg` },
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual2.jpg` },
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual3.jpg` },
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual1.jpg` },
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual2.jpg` },
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual3.jpg` },
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual1.jpg` },
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual2.jpg` },
                                { embed: "embed-1by1", url: "/", src: `${basePath}/dummy/visual3.jpg` }
                                ]}
                        ></Carousel>
                    </div>
                </section>

                <section id="section_card" className="section section-bg-even border-t reveal">
                    <div className="container">
                        <h2 className="section-heading">Card</h2>

                        <h3 className="section-heading-sm">画像付き</h3>

                        <div className="grid gap-20px lg:gap-40px md:grid-cols-2 lg:grid-cols-3 reveal-group">
                            <div className="reveal reveal-fade-up">
                                <UI.Card src={`${basePath}/dummy/1.jpg`} href="/" title="ワイヤレスコントローラーに新色登場！">
                                    <UI.Badge model="bg sm" color="primary">News</UI.Badge>
                                    <h4>DualSense ワイヤレスコントローラーに新色登場！</h4>
                                    <small>2022.10.16</small>
                                    <p className="text-clamp-3">「銀河」にインスパイアされた 2 種類のカラーで、どこまでも広がる遊びの世界へ。</p>
                                </UI.Card>
                            </div>

                            <div className="reveal reveal-fade-up">
                                <UI.Card model="text" color="secondary" src={`${basePath}/dummy/2.jpg`} href="/" title="目を凝らして見る世界、その絶叫は仲間に届いていなかった—">
                                    <UI.Badge model="bg sm" color="secondary">News</UI.Badge>
                                    <h4>目を凝らして見る世界、その絶叫は仲間に届いていなかった—</h4>
                                    <small>2022.10.16</small>
                                    <p className="text-clamp-3">『FINAL FANTASY VII REMAKE INTERGRADE』は、大人気かつ受賞歴もある『FINAL FANTASY VII REMAKE』をPlayStation 5向けにライティングや質感、背景などの表現力を向上し、ユフィを主人公とした新規エピソード「FF7R EPISODE INTERmission」などの新要素を追加した作品だ。</p>
                                </UI.Card>
                            </div>

                            <div className="reveal reveal-fade-up">
                                <UI.Card model="bg" color="danger" src={`${basePath}/dummy/3.jpg`} href="/" title="初公開の新作や、注目タイトルの最新情報をチェックしよう">
                                    <UI.Badge model="bg sm" color="white">News</UI.Badge>
                                    <h4>初公開の新作や、注目タイトルの最新情報をチェックしよう</h4>
                                    <small>2022.10.16</small>
                                    <p className="text-clamp-3">氷に覆われた文明崩壊後のロサンゼルスから、スナイパーのスコープから覗く第2次世界大戦まで、魅力的な体験がゾクゾク。</p>
                                </UI.Card>
                            </div>
                        </div>

                        <h3 className="section-heading-sm">通知</h3>

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

                <section id="section_headline" className="section border-t">
                    <div className="container">
                        <div className="lg:flex">
                            <h2 className="section-heading lg:w-1/3">Headline</h2>

                            <div className="grid reveal-group lg:w-2/3">
                                <Web.Headline href="/" date="2021-12-24" badge={{ label: 'お知らせ', color: 'primary' }} border={true}>
                                    「よゐこのはじめてのプログラミング生活 第２回あそぶ編」（前編）を公開。視聴者のみなさんがつくったゲームをプレイします。
                                </Web.Headline>

                                <Web.Headline href="/" date="2021-10-02" badge={{ label: '重要', color: 'danger' }} border={true}>
                                    『スプラトゥーン3』の最新調査映像が公開。新たなステージやスペシャルウェポン、ヒーローモードの情報が判明。
                                </Web.Headline>

                                <Web.Headline href="/" date="2021-09-24" badge={{ label: 'プレスリリース', color: 'secondary' }} border={true}>
                                    シリーズ完全新作、Nintendo Switch『ベヨネッタ3』が2022年に発売決定。大魔獣を直接操作する新たなアクションも明らかに。
                                </Web.Headline>

                                <Web.Headline date="2021-09-01" badge={{ label: 'お知らせ', color: 'primary' }} border={true} rows={2}>
                                    Nintendo Switch『ゼルダ無双 厄災の黙示録』追加コンテンツ「エキスパンション・パス」第２弾のトレーラーが公開に。10月29日（金）に配信決定。
                                </Web.Headline>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_button" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Button</h2>

                        <h3 className="section-heading-sm">Bg</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Button model="bg md blockDown rounded" color="primary">primary</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="secondary">secondary</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="success">success</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="info">info</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="warning">warning</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="danger">danger</UI.Button>
                            <UI.Button model="bg md blockDown rounded" color="white">white</UI.Button>
                        </div>

                        <h3 className="section-heading-sm">Border</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Button model="border md blockDown rounded" color="primary">primary</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="secondary">secondary</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="success">success</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="info">info</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="warning">warning</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="danger">danger</UI.Button>
                            <UI.Button model="border md blockDown rounded" color="white">white</UI.Button>
                        </div>

                        <h3 className="section-heading-sm">Other</h3>
                        <div className="flex flex-wrap gap-0.5">
                            <UI.Button model="link md blockDown" color="primary">link primary</UI.Button>
                            <UI.Button model="bg md blockDown" color="default">bg default</UI.Button>
                            <UI.Button model="border md blockDown" color="default">border default</UI.Button>
                            <UI.Button model="bg md blockDown" color="primary" disabled>disabled</UI.Button>
                        </div>

                        <div className="flex flex-wrap gap-0.5 items-center mt-1">
                            <UI.Button model="bg md long rounded" color="primary" loading>border default</UI.Button>
                            <UI.Button model="border md long rounded" color="primary" loading>border default</UI.Button>
                        </div>

                        <h3 className="section-heading-sm">Icon</h3>
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
                            <UI.Button model="md long bg" color="primary" addClass="hover-icon-left" startIcon={<UI.Icon value="chevron_left" />}>
                                long startIcon
                            </UI.Button>

                            <UI.Button model="md long bg" color="primary" addClass="hover-icon-right" endIcon={<UI.Icon value="chevron_right" />}>
                                long endIcon
                            </UI.Button>

                            <UI.Button model="sm icon bg rounded" color="danger">
                                <UI.Icon value="close" />
                            </UI.Button>

                            <UI.Button model="md icon border rounded" color="success">
                                <UI.Icon value="arrow_forward" />
                            </UI.Button>
                        </div>

                        <h3 className="section-heading-sm">Handling test</h3>
                        <div className="flex flex-wrap gap-0.5 items-center">
                            <UI.Button model="sm bg blockDown" color="info" onClick={pageback}>JS:HistoryBack</UI.Button>
                            <UI.Button model="sm bg blockDown" color="info" onClick={pagetop}>JS:PageTop</UI.Button>
                        </div>
                    </div>
                </section>

                <section id="section_forms" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Form</h2>

                        <div className="grid lg:grid-cols-3 gap-2 mb-2">
                            <Form.TextField name="exsample1" label="Textfield" help="フォームの補足説明がここに入ります。" required />
                            <Form.TextField name="exsample2" label="Feedback" feedback={{ color: 'danger', message: 'Error message.' }} required />
                            <Form.TextField name="exsample3" label="Disabled" value="Disabled value" disabled />
                            <Form.TextField name="exsample4" label="Readonly" value="Readonly value" readonly />
                            <Form.TextField name="exsample5" type="search" placeholder="Search" startIcon={<UI.Icon value="search" />} />
                            <Form.TextField name="exsample5" type="number" label="End Icon" endIcon={<UI.Icon value="currency_yen" />} />
                            <Form.TextField name="exsample6" type="select" label="Select" option={[{ value: 'option1' }, {value: 'option2'}]} startIcon={<UI.Icon value="calendar_today" />} />
                            <Form.TextField name="exsample7" type="password" label="Password" />
                        </div>

                        <h3 className="section-heading-sm">Auto-sizing Textarea</h3>
                        <div className="mb-1">
                            <Form.TextField name="exsample8" type="textarea" label="Message" maxlength={100} />
                        </div>

                        <h3 className="section-heading-sm">Checkbox</h3>
                        <div className="flex gap-1 mb-1">
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

                        <h3 className="section-heading-sm">Switch</h3>
                        <div className="flex gap-1 mb-1">
                            <Form.Switch name="exsample-switch" value="exsample-switch1" />
                            <Form.Switch name="exsample-switch" value="exsample-switch2" color="danger" />
                        </div>
                    </div>
                </section>

                <section id="section_table" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Table</h2>

                        <h3 className="section-heading-sm">Vertical</h3>
                        <div className="table-responsive">
                            <table className="table text-sm">
                                <thead>
                                    <tr>
                                        <th>Heading</th>
                                        <th>Heading</th>
                                        <th>Heading</th>
                                        <th>Heading</th>
                                        <th>Heading</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Content</td>
                                        <td>Content</td>
                                        <td>Content</td>
                                        <td>Content</td>
                                        <td>Content</td>
                                    </tr>
                                    <tr>
                                        <td>Content</td>
                                        <td>Content</td>
                                        <td>Content</td>
                                        <td>Content</td>
                                        <td>Content</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="section-heading-sm">Horizontal</h3>
                        <table className="table text-sm">
                            <tbody>
                                <tr>
                                    <th>対応コントローラー</th>
                                    <td>Nintendo Switch Proコントローラー</td>
                                </tr>
                                <tr>
                                    <th>セーブデータお預かり</th>
                                    <td>対応</td>
                                </tr>
                                <tr>
                                    <th>対応言語</th>
                                    <td>日本語,英語,フランス語,ドイツ語,イタリア語,スペイン語,韓国語,オランダ語,ポルトガル語,ロシア語,中国語 (簡体字),中国語 (繁体字)</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="section-heading-sm">Bordered</h3>
                        <table className="table table-bordered text-sm">
                            <tbody>
                                <tr>
                                    <th>対応コントローラー</th>
                                    <td>Nintendo Switch Proコントローラー</td>
                                </tr>
                                <tr>
                                    <th>セーブデータお預かり</th>
                                    <td>対応</td>
                                </tr>
                                <tr>
                                    <th>対応言語</th>
                                    <td>日本語,英語,フランス語,ドイツ語,イタリア語,スペイン語,韓国語,オランダ語,ポルトガル語,ロシア語,中国語 (簡体字),中国語 (繁体字)</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="section-heading-sm">Striped</h3>
                        <table className="table table-striped text-sm">
                            <tbody>
                                <tr>
                                    <th>対応コントローラー</th>
                                    <td>Nintendo Switch Proコントローラー</td>
                                </tr>
                                <tr>
                                    <th>セーブデータお預かり</th>
                                    <td>対応</td>
                                </tr>
                                <tr>
                                    <th>対応言語</th>
                                    <td>日本語,英語,フランス語,ドイツ語,イタリア語,スペイン語,韓国語,オランダ語,ポルトガル語,ロシア語,中国語 (簡体字),中国語 (繁体字)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="section_loader" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Loader</h2>

                        <div className="grid grid-cols-3 gap-1">
                            <div className="p-20px bg-muted">
                                <h3 className="section-heading-sm text-center">Dot</h3>
                                <UI.Loader model="dot" addClass="rounded-full" />
                            </div>

                            <div className="p-20px bg-dark">
                                <h3 className="section-heading-sm text-center text-white">Spin</h3>
                                <UI.Loader model="spin" color="white" />
                            </div>

                            <div className="p-20px bg-muted">
                                <h3 className="section-heading-sm text-center">Circle</h3>
                                <UI.Loader model="circle" progress={32} />
                            </div>

                            <div className="p-20px bg-muted col-span-3">
                                <h3 className="section-heading-sm text-center">Line</h3>
                                <UI.Loader model="line" color="warning" />
                            </div>

                            <div className="p-20px bg-muted col-span-3">
                                <h3 className="section-heading-sm text-center">Bar</h3>
                                <UI.Loader model="bar" color="success" progress={64} addClass="rounded-full" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_badge" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Badge</h2>

                        <h3 className="section-heading-sm">Text</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted">
                            <UI.Badge model="text sm" color="primary" href="#">primary</UI.Badge>
                            <UI.Badge model="text sm" color="secondary" href="#">secondary</UI.Badge>
                            <UI.Badge model="text sm" color="success" href="#">success</UI.Badge>
                            <UI.Badge model="text sm" color="info" href="#">info</UI.Badge>
                            <UI.Badge model="text sm" color="warning" href="#">warning</UI.Badge>
                            <UI.Badge model="text sm" color="danger" href="#">danger</UI.Badge>
                            <UI.Badge model="text sm" color="white" href="#">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Background</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted">
                            <UI.Badge model="bg sm" color="primary" href="#">primary</UI.Badge>
                            <UI.Badge model="bg sm" color="secondary" href="#">secondary</UI.Badge>
                            <UI.Badge model="bg sm" color="success" href="#">success</UI.Badge>
                            <UI.Badge model="bg sm" color="info" href="#">info</UI.Badge>
                            <UI.Badge model="bg sm" color="warning" href="#">warning</UI.Badge>
                            <UI.Badge model="bg sm" color="danger" href="#">danger</UI.Badge>
                            <UI.Badge model="bg sm" color="white" href="#">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Border</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted">
                            <UI.Badge model="border sm" color="primary" href="#">primary</UI.Badge>
                            <UI.Badge model="border sm" color="secondary" href="#">secondary</UI.Badge>
                            <UI.Badge model="border sm" color="success" href="#">success</UI.Badge>
                            <UI.Badge model="border sm" color="info" href="#">info</UI.Badge>
                            <UI.Badge model="border sm" color="warning" href="#">warning</UI.Badge>
                            <UI.Badge model="border sm" color="danger" href="#">danger</UI.Badge>
                            <UI.Badge model="border sm" color="white" href="#">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">with Icon</h3>
                        <div className="flex flex-wrap items-center gap-0.5 p-20px bg-muted">
                            <UI.Badge model="text sm rounded" color="primary">
                                <UI.Icon value="account_circle" />
                                small
                            </UI.Badge>
                            <UI.Badge model="text md rounded" color="primary">
                                <UI.Icon value="account_circle" />
                                medium
                            </UI.Badge>
                            <UI.Badge model="text lg rounded" color="primary">
                                <UI.Icon value="account_circle" />
                                large
                            </UI.Badge>

                            <UI.Badge model="text sm rounded">
                                <img src="/dummy/1.jpg" className="rounded-full" />
                                small
                            </UI.Badge>
                            <UI.Badge model="text md rounded">
                                <img src="/dummy/1.jpg" className="rounded-full" />
                                medium
                            </UI.Badge>
                            <UI.Badge model="text lg rounded">
                                <img src="/dummy/1.jpg" className="rounded-full" />
                                large
                            </UI.Badge>

                            <UI.Badge model="text sm rounded" color="danger">
                                small
                                <UI.Icon value="cancel" />
                            </UI.Badge>
                            <UI.Badge model="text md rounded" color="danger">
                                medium
                                <UI.Icon value="cancel" />
                            </UI.Badge>
                            <UI.Badge model="text lg rounded" color="danger">
                                large
                                <UI.Icon value="cancel" />
                            </UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Icon: status</h3>
                        <div className="flex flex-wrap gap-1.5 p-20px bg-muted">
                            <UI.Badge model="status" color="primary" addClass="uppercase">primary</UI.Badge>
                            <UI.Badge model="status" color="secondary" addClass="uppercase">secondary</UI.Badge>
                            <UI.Badge model="status" color="success" addClass="uppercase">success</UI.Badge>
                            <UI.Badge model="status" color="info" addClass="uppercase">info</UI.Badge>
                            <UI.Badge model="status" color="warning" addClass="uppercase">warning</UI.Badge>
                            <UI.Badge model="status" color="danger" addClass="uppercase">danger</UI.Badge>
                            <UI.Badge model="status" color="white" addClass="uppercase">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Icon: check</h3>
                        <div className="flex flex-wrap gap-1.5 p-20px bg-muted">
                            <UI.Badge model="check" color="primary" addClass="capitalize">primary</UI.Badge>
                            <UI.Badge model="check" color="secondary" addClass="capitalize">secondary</UI.Badge>
                            <UI.Badge model="check" color="success" addClass="capitalize">success</UI.Badge>
                            <UI.Badge model="check" color="info" addClass="capitalize">info</UI.Badge>
                            <UI.Badge model="check" color="warning" addClass="capitalize">warning</UI.Badge>
                            <UI.Badge model="check" color="danger" addClass="capitalize">danger</UI.Badge>
                            <UI.Badge model="check" color="white" addClass="capitalize">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Count</h3>
                        <UI.Button model="md bg" color="primary">
                            Sample
                            <UI.Badge model="bg count" color="danger">8</UI.Badge>
                        </UI.Button>
                    </div>
                </section>

                <section id="section_breadcrumb" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Breadcrumb</h2>

                        <Web.Breadcrumb homeicon={true} src={[
                            { name: 'Home', url: '/' },
                            { name: 'Category', url: '/' },
                            { name: 'Content', url: '/' }
                        ]} />
                    </div>
                </section>

                <section id="section_expansion" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Expansion</h2>

                        <h3 className="section-heading-sm">Vanilla</h3>
                        <UI.Expansion title="Expansion (Click)">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </UI.Expansion>

                        <h3 className="section-heading-sm">Border</h3>
                        <UI.Expansion title="Expansion (Hover)" model="border" hover={true}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </UI.Expansion>

                        <h3 className="section-heading-sm">Popup</h3>
                        <div className="flex justify-end">
                            <UI.Expansion model="popup">
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
                                        <button type="button" className="text-danger">
                                            <UI.Icon value="delete" />
                                            Item 3
                                        </button>
                                    </li>
                                </ul>
                            </UI.Expansion>
                        </div>
                    </div>
                </section>

                <section id="section_viewer" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Viewer</h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5">
                            <div className="col-span-1 lg:col-span-1">
                                <a className="hover-border" href={`${basePath}/dummy/1.jpg`} data-viewer-group="group1" onClick={viewer}>
                                    <figure className="embed embed-1by1">
                                        <img src={`${basePath}/dummy/1.jpg`} width="900" height="900" alt="" />
                                    </figure>
                                </a>
                            </div>

                            <div className="col-span-1 lg:col-span-1">
                                <a className="hover-border" href={`${basePath}/dummy/2.jpg`} data-viewer-group="group1" onClick={viewer}>
                                    <figure className="embed embed-1by1">
                                        <img src={`${basePath}/dummy/2.jpg`} width="900" height="900" alt="" />
                                    </figure>
                                </a>
                            </div>

                            <div className="col-span-1 lg:col-span-1">
                                <a className="hover-border" href={`${basePath}/dummy/3.jpg`} data-viewer-group="group1" onClick={viewer}>
                                    <figure className="embed embed-1by1">
                                        <img src={`${basePath}/dummy/3.jpg`} width="900" height="900" alt="" />
                                    </figure>
                                </a>
                            </div>

                            <div className="col-span-1 lg:col-span-1">
                                <a className="hover-border" href={`${basePath}/dummy/4.jpg`} data-viewer-group="group1" onClick={viewer}>
                                    <figure className="embed embed-1by1">
                                        <img src={`${basePath}/dummy/4.jpg`} width="900" height="900" alt="" />
                                    </figure>
                                </a>
                            </div>

                            <div className="col-span-2 lg:col-span-4">
                                <a className="hover-border" href={`${basePath}/dummy/5.jpg`} onClick={viewer}>
                                    <figure className="embed embed-21by9">
                                        <img src={`${basePath}/dummy/5.jpg`} width="900" height="900" alt="" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-0.5 mt-2">
                            <UI.Button model="bg md" color="primary" href={`${basePath}/dummy/video.mp4`} onClick={viewer}>Video</UI.Button>
                            <UI.Button model="bg md" color="primary" href="https://www.youtube.com/watch?v=Z2P818AAOn8" onClick={viewer}>YouTube</UI.Button>
                        </div>
                    </div>
                </section>

                <section id="section_modal" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">Modal</h2>

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
                            <button type="button" className="text-primary" onClick={(e) => dummyModal2Ref.current?.show(e)}>
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
