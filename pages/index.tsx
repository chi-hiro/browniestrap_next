import { useRef } from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import { Layout } from 'layout/default'
import { pagetop, pageback } from 'lib/mixins'
import { toast } from 'lib/toast'
import { viewer } from 'lib/viewer'
import { Modal, ModalBody, ModalFooter, ModalRefTypes } from 'components/modal'
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
                <div id="visual">
                    <div id="visual-lead">
                        <h1 className="title">LEAD SAMPLE</h1>
                        <p className="description">DESCRIPTION SAMPLE</p>
                    </div>

                    <Carousel
                        mode="visual"
                        duration={8000}
                        zoom={true}
                        timer={true}
                        src={[
                            { src_lg: `${basePath}/dummy/visual1_lg.jpg`, src: `${basePath}/dummy/visual1.jpg` },
                            { src_lg: `${basePath}/dummy/visual2_lg.jpg`, src: `${basePath}/dummy/visual2.jpg` },
                            { src_lg: `${basePath}/dummy/visual3_lg.jpg`, src: `${basePath}/dummy/visual3.jpg` }
                        ]}
                    />

                    <span id="visual-scroll">
                        Scroll
                    </span>
                </div>

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
                        <p><a href="/" className="btn is-outline-white">ボタン</a></p>
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

                <section id="section_carousel" className="section border-t reveal">
                    <div className="container">
                        <h2 className="section-heading">カルーセル</h2>
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
                        <h2 className="section-heading">カード</h2>

                        <h3 className="section-heading-sm">画像付き</h3>

                        <div className="grid gap-20px lg:gap-40px md:grid-cols-2 lg:grid-cols-3 reveal-group">
                            <div className="reveal reveal-fade-up">
                                <UI.Card src={`${basePath}/dummy/1.jpg`} href="/" title="ワイヤレスコントローラーに新色登場！" theme="bg-white">
                                    <UI.Badge type="sm" theme="bg-primary">News</UI.Badge>
                                    <h4>DualSense ワイヤレスコントローラーに新色登場！</h4>
                                    <small>2022.10.16</small>
                                    <p className="text-clamp-3">「銀河」にインスパイアされた 2 種類のカラーで、どこまでも広がる遊びの世界へ。</p>
                                </UI.Card>
                            </div>

                            <div className="reveal reveal-fade-up">
                                <UI.Card src={`${basePath}/dummy/2.jpg`} href="/" title="目を凝らして見る世界、その絶叫は仲間に届いていなかった—" theme="bg-white">
                                    <UI.Badge type="sm" theme="bg-secondary">News</UI.Badge>
                                    <h4>目を凝らして見る世界、その絶叫は仲間に届いていなかった—</h4>
                                    <small>2022.10.16</small>
                                    <p className="text-clamp-3">『FINAL FANTASY VII REMAKE INTERGRADE』は、大人気かつ受賞歴もある『FINAL FANTASY VII REMAKE』をPlayStation 5向けにライティングや質感、背景などの表現力を向上し、ユフィを主人公とした新規エピソード「FF7R EPISODE INTERmission」などの新要素を追加した作品だ。</p>
                                </UI.Card>
                            </div>

                            <div className="reveal reveal-fade-up">
                                <UI.Card src={`${basePath}/dummy/3.jpg`} href="/" title="初公開の新作や、注目タイトルの最新情報をチェックしよう" theme="bg-danger">
                                    <UI.Badge type="sm" theme="bg-white">News</UI.Badge>
                                    <h4>初公開の新作や、注目タイトルの最新情報をチェックしよう</h4>
                                    <small>2022.10.16</small>
                                    <p className="text-clamp-3">氷に覆われた文明崩壊後のロサンゼルスから、スナイパーのスコープから覗く第2次世界大戦まで、魅力的な体験がゾクゾク。</p>
                                </UI.Card>
                            </div>
                        </div>

                        <h3 className="section-heading-sm">通知</h3>

                        <UI.Card icon="info" theme="mb-1">
                            <strong>Well done!</strong> You successfully read this important alert message.
                        </UI.Card>

                        <UI.Card icon="check_circle" theme="text-success mb-1">
                            <strong>Well done!</strong> You successfully read this important alert message.
                        </UI.Card>

                        <UI.Card icon="info" theme="text-info mb-1">
                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                        </UI.Card>

                        <UI.Card icon="warning" theme="text-warning mb-1">
                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                        </UI.Card>

                        <UI.Card icon="cancel" theme="text-danger mb-1">
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                        </UI.Card>

                        <UI.Card icon="check_circle" theme="bg-success mb-1">
                            <strong>Well done!</strong> You successfully read this important alert message.
                        </UI.Card>

                        <UI.Card icon="info" theme="bg-info mb-1">
                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                        </UI.Card>

                        <UI.Card icon="warning" theme="bg-warning mb-1">
                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                        </UI.Card>

                        <UI.Card icon="cancel" theme="bg-danger mb-1">
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                        </UI.Card>

                        <div className="grid lg:flex gap-0.5">
                            <button type="button" className="btn is-outline-success" onClick={() => toast('success', 'You successfully read this important alert message.')}>Toast</button>
                            <button type="button" className="btn is-outline-info" onClick={() => toast('info', 'This alert needs your attention, but it\'s not super important.', 'center')}>Toast(center)</button>
                            <button type="button" className="btn is-outline-warning" onClick={() => toast('warning', 'Better check yourself, you\'re not looking too good.', 'left')}>Toast(left)</button>
                            <button type="button" className="btn is-outline-danger" onClick={() => toast('danger', 'Change a few things up and try submitting again.', 'right')}>Toast(right)</button>
                        </div>
                    </div>
                </section>

                <section id="section_headline" className="section border-t">
                    <div className="container">
                        <div className="lg:flex">
                            <h2 className="section-heading lg:w-1/3">ヘッドライン</h2>

                            <div className="grid reveal-group lg:w-2/3">
                                <Web.Headline href="/" date="2021-12-24" badge={{ label: 'お知らせ', theme: 'bg-primary' }} border={true}>
                                    「よゐこのはじめてのプログラミング生活 第２回あそぶ編」（前編）を公開。視聴者のみなさんがつくったゲームをプレイします。
                                </Web.Headline>

                                <Web.Headline href="/" date="2021-10-02" badge={{ label: '重要', theme: 'bg-danger' }} border={true}>
                                    『スプラトゥーン3』の最新調査映像が公開。新たなステージやスペシャルウェポン、ヒーローモードの情報が判明。
                                </Web.Headline>

                                <Web.Headline href="/" date="2021-09-24" badge={{ label: 'プレスリリース', theme: 'bg-secondary' }} border={true}>
                                    シリーズ完全新作、Nintendo Switch『ベヨネッタ3』が2022年に発売決定。大魔獣を直接操作する新たなアクションも明らかに。
                                </Web.Headline>

                                <Web.Headline date="2021-09-01" badge={{ label: 'お知らせ', theme: 'bg-primary' }} border={true} rows={2}>
                                    Nintendo Switch『ゼルダ無双 厄災の黙示録』追加コンテンツ「エキスパンション・パス」第２弾のトレーラーが公開に。10月29日（金）に配信決定。
                                </Web.Headline>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_button" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">ボタン</h2>

                        <h3 className="section-heading-sm">Basic</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-white">
                            <button type="button" className="btn is-primary btn-block-sm-down rounded-full">Primary</button>
                            <button type="button" className="btn is-secondary btn-block-sm-down rounded-full">Secondary</button>
                            <button type="button" className="btn is-success btn-block-sm-down rounded-full">Success</button>
                            <button type="button" className="btn is-info btn-block-sm-down rounded-full">Info</button>
                            <button type="button" className="btn is-warning btn-block-sm-down rounded-full">Warning</button>
                            <button type="button" className="btn is-danger btn-block-sm-down rounded-full">Danger</button>
                            <button type="button" className="btn is-white btn-block-sm-down rounded-full">White</button>
                        </div>

                        <div className="flex flex-wrap gap-0.5 p-20px bg-dark">
                            <button type="button" className="btn is-primary btn-block-sm-down rounded-full">Primary</button>
                            <button type="button" className="btn is-secondary btn-block-sm-down rounded-full">Secondary</button>
                            <button type="button" className="btn is-success btn-block-sm-down rounded-full">Success</button>
                            <button type="button" className="btn is-info btn-block-sm-down rounded-full">Info</button>
                            <button type="button" className="btn is-warning btn-block-sm-down rounded-full">Warning</button>
                            <button type="button" className="btn is-danger btn-block-sm-down rounded-full">Danger</button>
                            <button type="button" className="btn is-white btn-block-sm-down rounded-full">White</button>
                        </div>

                        <h3 className="section-heading-sm">Outline</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-white">
                            <button type="button" className="btn is-outline-primary btn-block-sm-down rounded-full">Primary</button>
                            <button type="button" className="btn is-outline-secondary btn-block-sm-down rounded-full">Secondary</button>
                            <button type="button" className="btn is-outline-success btn-block-sm-down rounded-full">Success</button>
                            <button type="button" className="btn is-outline-info btn-block-sm-down rounded-full">Info</button>
                            <button type="button" className="btn is-outline-warning btn-block-sm-down rounded-full">Warning</button>
                            <button type="button" className="btn is-outline-danger btn-block-sm-down rounded-full">Danger</button>
                            <button type="button" className="btn is-outline-white btn-block-sm-down rounded-full">White</button>
                        </div>

                        <div className="flex flex-wrap gap-0.5 p-20px bg-dark">
                            <button type="button" className="btn is-outline-primary btn-block-sm-down rounded-full">Primary</button>
                            <button type="button" className="btn is-outline-secondary btn-block-sm-down rounded-full">Secondary</button>
                            <button type="button" className="btn is-outline-success btn-block-sm-down rounded-full">Success</button>
                            <button type="button" className="btn is-outline-info btn-block-sm-down rounded-full">Info</button>
                            <button type="button" className="btn is-outline-warning btn-block-sm-down rounded-full">Warning</button>
                            <button type="button" className="btn is-outline-danger btn-block-sm-down rounded-full">Danger</button>
                            <button type="button" className="btn is-outline-white btn-block-sm-down rounded-full">White</button>
                        </div>

                        <h3 className="section-heading-sm">Other</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted">
                            <button type="button" className="btn is-link btn-block-sm-down">Link</button>
                            <button type="button" className="btn is-default btn-block-sm-down">Default</button>
                            <button type="button" className="btn is-outline-default btn-block-sm-down">Outline-default</button>
                        </div>

                        <h3 className="section-heading-sm">Icon</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted items-center">
                            <button type="button" className="btn btn-sm is-primary btn-block-sm-down">
                                <UI.Icon value="shopping_cart" />
                                Before.sm
                            </button>

                            <button type="button" className="btn btn-sm is-outline-primary btn-block-sm-down">
                                After.sm
                                <UI.Icon value="shopping_cart" />
                            </button>

                            <button type="button" className="btn is-primary btn-block-sm-down">
                                <UI.Icon value="shopping_cart" />
                                Before
                            </button>

                            <button type="button" className="btn is-outline-primary btn-block-sm-down">
                                After
                                <UI.Icon value="shopping_cart" />
                            </button>

                            <button type="button" className="btn btn-lg is-primary btn-block-sm-down">
                                Before.lg
                                <UI.Icon value="shopping_cart" />
                            </button>

                            <button type="button" className="btn btn-lg is-outline-primary btn-block-sm-down">
                                After.lg
                                <UI.Icon value="shopping_cart" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted items-center mt-1">
                            <button type="button" className="btn btn-long btn-icon-before hover-icon-left is-primary btn-block-sm-down">
                                <UI.Icon value="chevron_left" />
                                Before.btn-long
                            </button>

                            <button type="button" className="btn btn-long btn-icon-after hover-icon-right is-outline-primary btn-block-sm-down">
                                After.btn-long
                                <UI.Icon value="chevron_right" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted items-center mt-1">
                            <button type="button" className="btn btn-sm is-outline-info btn-icon-only rounded-full">
                                <UI.Icon value="chevron_left" />
                            </button>

                            <button type="button" className="btn btn is-danger btn-icon-only rounded-full">
                                <UI.Icon value="close" />
                            </button>

                            <button type="button" className="btn btn-lg is-outline-info btn-icon-only rounded-full">
                                <UI.Icon value="chevron_right" />
                            </button>
                        </div>

                        <h3 className="section-heading-sm">UI</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted items-center">
                            <a href="./" className="btn is-info btn-block-sm-down" onClick={pageback}>
                                JS:HistoryBack
                            </a>

                            <button type="button" className="btn is-info btn-block-sm-down" onClick={pagetop}>JS:PageTop</button>

                            <div className="btn-switch">
                                <button type="button" className="btn btn btn-icon-only active">
                                    <UI.Icon value="view_headline" />
                                </button>
                                <button type="button" className="btn btn btn-icon-only">
                                    <UI.Icon value="apps" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_forms" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">フォーム</h2>

                        <div className="form-group">
                            <label>Basic <UI.Badge type="sm" theme="bg-danger">必須</UI.Badge></label>
                            <small className="form-text text-muted">フォームの補足説明がここに入ります。</small>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group is-danger">
                            <input type="text" className="form-control" placeholder="Variant" />
                            <div className="form-control-feedback">Error message.</div>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Disabled" disabled />
                        </div>

                        <div className="form-group">
                            <div className="form-control-static">
                                Static item
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-0.5 mb-1">
                            <div className="form-combine form-combine-after">
                                <input type="search" className="form-control" placeholder="検索" />
                                <button type="button" className="form-combine-icon" tabIndex={-1}>
                                    <UI.Icon value="search" />
                                </button>
                            </div>

                            <div className="form-combine form-combine-before">
                                <span className="form-combine-icon">
                                    <UI.Icon value="calendar_today" />
                                </span>
                                <select className="form-control">
                                    <option value="./?dummy=1">2021年 1月</option>
                                    <option value="./?dummy=2">2021年 2月</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group grid lg:grid-cols-4 gap-0.25">
                            <Form.Checkbox name="exsample-check" value="exsample1" label="Checkbox" theme="box" />
                            <Form.Checkbox name="exsample-check" value="exsample2" label="Checkbox" theme="box" />

                            <Form.Checkbox type="radio" name="exsample-radio" value="exsample3" label="Radio" theme="box" checked={true} />
                            <Form.Checkbox type="radio" name="exsample-radio" value="exsample4" label="Radio" theme="box" />
                        </div>

                        <div className="form-group">
                            <input type="checkbox" className="form-control-switch" />
                        </div>

                        <form className="bg-muted rounded p-2 grid gap-0.5 lg:w-1/2 mx-auto" onSubmit={formcheck}>
                            <Form.ComboBox type="text" placeholder="ユーザーID" name="username" />
                            <Form.Password placeholder="パスワード" combobox={true} />
                            <Form.TextareaAutoSize placeholder="メッセージ" name="message" combobox={true} />

                            <div className="form-group flex justify-center flex-row gap-1.5 mt-1">
                                <Form.Checkbox name="agreement" value="agreement" label="サンプルチェック" />
                            </div>

                            <div className="form-group text-center mb-0">
                                <button type="submit" className="btn btn-lg btn-long is-primary rounded-full">送信する</button>
                            </div>
                        </form>
                    </div>
                </section>

                <section id="section_table" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">テーブル</h2>

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
                        <h2 className="section-heading">ローダー</h2>

                        <div className="grid grid-cols-3 gap-1">
                            <div className="p-20px bg-muted">
                                <h3 className="section-heading-sm text-center">Dot</h3>
                                <UI.Loader type="dot" theme="rounded-full" />
                            </div>

                            <div className="p-20px bg-dark">
                                <h3 className="section-heading-sm text-center text-white">Spin</h3>
                                <UI.Loader type="spin" theme="is-white" />
                            </div>

                            <div className="p-20px bg-muted">
                                <h3 className="section-heading-sm text-center">Circle</h3>
                                <UI.Loader type="circle" progress={32} />
                            </div>

                            <div className="p-20px bg-muted col-span-3">
                                <h3 className="section-heading-sm text-center">Line</h3>
                                <UI.Loader type="line" />
                            </div>

                            <div className="p-20px bg-muted col-span-3">
                                <h3 className="section-heading-sm text-center">Bar</h3>
                                <UI.Loader type="bar" progress={64} theme="rounded-full" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section_badge" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">バッジ</h2>

                        <h3 className="section-heading-sm">Text</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted">
                            <UI.Badge href="#" type="sm" theme="text-primary uppercase">primary</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="text-secondary uppercase">secondary</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="text-success uppercase">success</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="text-info uppercase">info</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="text-warning uppercase">warning</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="text-danger uppercase">danger</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="text-white uppercase">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Background</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted">
                            <UI.Badge href="#" type="sm" theme="bg-primary uppercase">primary</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="bg-secondary uppercase">secondary</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="bg-success uppercase">success</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="bg-info uppercase">info</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="bg-warning uppercase">warning</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="bg-danger uppercase">danger</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="bg-white uppercase">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Border</h3>
                        <div className="flex flex-wrap gap-0.5 p-20px bg-muted">
                            <UI.Badge href="#" type="sm" theme="border-primary uppercase">primary</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="border-secondary uppercase">secondary</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="border-success uppercase">success</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="border-info uppercase">info</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="border-warning uppercase">warning</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="border-danger uppercase">danger</UI.Badge>
                            <UI.Badge href="#" type="sm" theme="border-white uppercase">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">with Icon</h3>
                        <div className="flex flex-wrap items-center gap-0.5 p-20px bg-muted">
                            <UI.Badge href="#" type="sm" theme="text-primary uppercase rounded-full">
                                <UI.Icon value="account_circle" />
                                small
                            </UI.Badge>
                            <UI.Badge href="#" type="md" theme="text-primary uppercase rounded-full">
                                <UI.Icon value="account_circle" />
                                medium
                            </UI.Badge>
                            <UI.Badge href="#" type="lg" theme="text-primary uppercase rounded-full">
                                <UI.Icon value="account_circle" />
                                large
                            </UI.Badge>

                            <UI.Badge href="#" type="sm" theme="uppercase rounded-full">
                                <img src="/dummy/1.jpg" className="rounded-full" />
                                small
                            </UI.Badge>
                            <UI.Badge href="#" type="md" theme="uppercase rounded-full">
                                <img src="/dummy/1.jpg" className="rounded-full" />
                                medium
                            </UI.Badge>
                            <UI.Badge href="#" type="lg" theme="uppercase rounded-full">
                                <img src="/dummy/1.jpg" className="rounded-full" />
                                large
                            </UI.Badge>

                            <UI.Badge href="#" type="sm" theme="text-danger uppercase rounded-full">
                                small
                                <UI.Icon value="cancel" />
                            </UI.Badge>
                            <UI.Badge href="#" type="md" theme="text-danger uppercase rounded-full">
                                medium
                                <UI.Icon value="cancel" />
                            </UI.Badge>
                            <UI.Badge href="#" type="lg" theme="text-danger uppercase rounded-full">
                                large
                                <UI.Icon value="cancel" />
                            </UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Icon: status</h3>
                        <div className="flex flex-wrap gap-1.5 p-20px bg-muted">
                            <UI.Badge type="status" theme="is-primary uppercase">primary</UI.Badge>
                            <UI.Badge type="status" theme="is-secondary uppercase">secondary</UI.Badge>
                            <UI.Badge type="status" theme="is-success uppercase">success</UI.Badge>
                            <UI.Badge type="status" theme="is-info uppercase">info</UI.Badge>
                            <UI.Badge type="status" theme="is-warning uppercase">warning</UI.Badge>
                            <UI.Badge type="status" theme="is-danger uppercase">danger</UI.Badge>
                            <UI.Badge type="status" theme="is-white uppercase">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Icon: check</h3>
                        <div className="flex flex-wrap gap-1.5 p-20px bg-muted">
                            <UI.Badge type="check" theme="is-primary capitalize">primary</UI.Badge>
                            <UI.Badge type="check" theme="is-secondary capitalize">secondary</UI.Badge>
                            <UI.Badge type="check" theme="is-success capitalize">success</UI.Badge>
                            <UI.Badge type="check" theme="is-info capitalize">info</UI.Badge>
                            <UI.Badge type="check" theme="is-warning capitalize">warning</UI.Badge>
                            <UI.Badge type="check" theme="is-danger capitalize">danger</UI.Badge>
                            <UI.Badge type="check" theme="is-white capitalize">white</UI.Badge>
                        </div>

                        <h3 className="section-heading-sm">Count</h3>
                        <button type="button" className="btn is-primary">
                            Sample
                            <UI.Badge type="count" theme="bg-danger">8</UI.Badge>
                        </button>
                    </div>
                </section>

                <section id="section_breadcrumb" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">パンくずリスト</h2>

                        <Web.Breadcrumb homeicon={true} src={[
                            { name: 'Home', url: '/' },
                            { name: 'Category', url: '/' },
                            { name: 'Content', url: '/' }
                        ]} />
                    </div>
                </section>

                <section id="section_expansion" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">エキスパンション</h2>

                        <h3 className="section-heading-sm">Vanilla</h3>
                        <UI.Expansion title="Expansion (Click)">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </UI.Expansion>

                        <h3 className="section-heading-sm">Border</h3>
                        <UI.Expansion title="Expansion (Hover)" type="border" hover={true}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </UI.Expansion>

                        <h3 className="section-heading-sm">Popup</h3>
                        <div className="flex justify-end">
                            <UI.Expansion type="popup">
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
                        <h2 className="section-heading">画像ビューワ</h2>

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
                            <a href={`${basePath}/dummy/video.mp4`} className="btn is-primary" onClick={viewer}>Video</a>
                            <a href="https://www.youtube.com/watch?v=Z2P818AAOn8" className="btn is-primary" onClick={viewer}>YouTube</a>
                        </div>
                    </div>
                </section>

                <section id="section_modal" className="section border-t">
                    <div className="container">
                        <h2 className="section-heading">モーダル</h2>

                        <div className="flex flex-wrap gap-0.5">
                            <button type="button" className="btn is-primary" onClick={(e) => dummyModal1Ref.current?.show(e)}>Basic</button>
                            <button type="button" className="btn is-primary" onClick={(e) => dummyModal2Ref.current?.show(e)}>Scroll</button>
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
