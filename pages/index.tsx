import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Odo | every card game ever">
    <h1>Welcome to Odo</h1>
    <p>
      <Link href="/brettiscool.html">
        <a>Alpha Test Page</a>
      </Link>
    </p>
    <p>
      If you'd like to play for yourself, build a fucking deck, asshole.
    </p>
  </Layout>
)

export default IndexPage
