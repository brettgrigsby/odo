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
        <Link href="/app">
          <a>Try the app!</a>
        </Link>
      </div>
      <div>
        <Link href="/design">
          <a>Use your own card images!</a>
        </Link>
      </div>
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
