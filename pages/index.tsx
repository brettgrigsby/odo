import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Odo | every card game ever">
    <h1>Welcome to Odo</h1>
    <div>
      <Link href="/mtg">
        <a>Magic The Gathering</a>
      </Link>
    </div>
    <div>
      <Link href="/destiny">
        <a>Star Wars: Destiny</a>
      </Link>
    </div>
    <p>
      Here's <a href="http://ar2go.squaretone.com/barcode">a site</a> to get the barcode marker images. Place
      barcode marker in the top left corner of your card.
    </p>
    <p>
      All games right now use the first 4 markers only (0 - 3).
    </p>
  </Layout>
)

export default IndexPage
