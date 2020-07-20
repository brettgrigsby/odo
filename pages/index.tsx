import Link from 'next/link'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="ODO | Every Card Game Ever">
    <div className='index-container'>
      <h1>ODO</h1>
      <Link href='/pnpinstructions'>
        <div className='pnp-button index-button'>
          Print and Play
        </div>
      </Link>
      <div className='post-deck-buttons'>
        <Link href='/app'>
          <div className='app-button index-button'>
            Play
          </div>
        </Link>
        <div style={{ width: 20 }} />
        <Link href='/design'>
          <div className='app-button index-button'>
            Design
          </div>
        </Link>
      </div>
      <h3>Here's me using ODO:</h3>
      <div className='video-container'>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/eXb0WXXVkBU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </div>

    <style jsx>{`
        .index-container {
            max-width: 700px;
            margin: auto;
            text-align: center;
            padding: 0 20px;
        }
        .post-deck-buttons {
          display: flex;
          justify-content: space-between;
          padding: 30px 0;
        }
        .index-button {
          border: 1px solid black;
          border-radius: 10px;
          padding: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        .app-button {
          width: 300px;
          height: 200px;
        }
        .pnp-button {
          height: 100px;
        }
        .video-container {
          padding-bottom: 80px;
        }
    `}</style>
  </Layout>
)

export default IndexPage
