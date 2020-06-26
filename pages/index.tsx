import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Odo | every card game ever">
    <h1>Welcome to Odo</h1>
    <p>
      <Link href="/iframe">
        <a>GO PLAY</a>
      </Link>
    </p>
    <p>
      Here's where I include a link to PnP the deck or buy one.
    </p>
  </Layout>
)

export default IndexPage
