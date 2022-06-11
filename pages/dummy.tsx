import { Layout } from 'layout/default'
import { pageback } from 'lib/mixins'
import Article from 'components/article'

export default function Dummy() {
    // Render
    return (
        <Layout>
            <main>
                <section id="section_article" className="section">
                    <div className="container lg:w-2/3 ml-auto mr-auto">
                        <Article
                            title="おうちで気軽に体を動かす。Nintendo Switchでおすすめの「体感ゲーム」をご紹介。"
                            date="2022-01-17"
                            category="Nintendo Switch"
                            theme="bg-primary"
                        >
                            <p>寒い日が続きますが、皆さんいかがお過ごしでしょうか？ 外に出るのもためらってしまうほどのこの季節、お家で過ごすことにもなりがちですよね。<br />この記事では、Nintendo Switchで編集部おすすめの「体感ゲーム」をご紹介します。家の中でも体を動かせば、寒さも吹き飛ぶ…！？ かもしれません。</p>
                        </Article>

                        <a href="/" className="btn is-outline-primary mt-3" onClick={pageback}>PageBack</a>
                    </div>
                </section>
            </main>
        </Layout>
    )
}