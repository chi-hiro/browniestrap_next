import { Layout } from 'layout/default'
import Head from 'next/head'
import { pageback } from 'lib/mixins'
import { section, utility } from 'lib/styleUtl'
import Web from '@/components/web'
import UI from '@/components/UI'

export default function Dummy() {
    // Render
    return (
        <Layout>

            <main css={utility.headerMargin}>
                <Head>
                    <title>Article | {process.env.NEXT_PUBLIC_SITE_TITLE}</title>
                </Head>

                <section id="section_article" css={section.base}>
                    <div className="container lg:w-2/3 mx-auto">
                        <Web.Article
                            title="おうちで気軽に体を動かす。Nintendo Switchでおすすめの「体感ゲーム」をご紹介。"
                            date="2022-01-17"
                            badge={{ label: 'Nintendo Switch', color: 'primary' }}
                        >
                            <p>寒い日が続きますが、皆さんいかがお過ごしでしょうか？ 外に出るのもためらってしまうほどのこの季節、お家で過ごすことにもなりがちですよね。<br />この記事では、Nintendo Switchで編集部おすすめの「体感ゲーム」をご紹介します。家の中でも体を動かせば、寒さも吹き飛ぶ…！？ かもしれません。</p>
                        </Web.Article>

                        <UI.Button model="md border" color="primary" addClass="mt-3" onClick={pageback}>
                            PageBack
                        </UI.Button>
                    </div>
                </section>
            </main>
        </Layout>
    )
}