import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Odo | every card game ever">
    <h1>Welcome to Odo</h1>
    <p>
      <Link href="/brettiscool.html">
        <a>Base Game</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
