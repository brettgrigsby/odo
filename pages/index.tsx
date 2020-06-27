import Link from 'next/link'
import Layout from '../components/Layout'
import WebLayout from '../components/WebLayout'

const cardImageStyles = {
  border: '1px solid black',
  borderRadius: 5,
  marginRight: 10
}

const IndexPage = () => (
  <Layout title="Odo | every card game ever">
    <WebLayout>
      <h1>Welcome to Odo</h1>
      <div>
        <h3>Games:</h3>
        <Link href="/mtg">
          <a>Magic: The Gathering</a>
        </Link>
      </div>
      <div>
        <Link href="/destiny">
          <a>Star Wars: Destiny</a>
        </Link>
      </div>
      <p>
        All games right now use the first 4 markers only (0 - 3).
      </p>
      <p>
        If you would like to test, here are images for the first 4 cards of the custom deck:
      </p>
      <div>
        <img style={cardImageStyles} width="200" src="0.png" />
        <img style={cardImageStyles} width="200" src="1.png" />
        <img style={cardImageStyles} width="200" src="2.png" />
        <img style={cardImageStyles} width="200" src="3.png" />
      </div>
      <p>
        Credit to <a href="http://ar2go.squaretone.com/barcode">ar2go</a> for the barcode marker images.
      </p>
      <p>
        Not sure what to do? Open one of these images on your phone and show it to your webcam on your
        computer with one of the above games open.
      </p>
    </WebLayout>
  </Layout>
)

export default IndexPage
