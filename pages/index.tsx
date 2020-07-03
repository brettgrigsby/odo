import Link from 'next/link'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="Odo | every card game ever">
    <div className='index-container'>
      <h1>ODO</h1>
      <Link href='/pnpinstructions'>
        <div className='pnp-button index-button'>
          Print and Play Instructions
        </div>
      </Link>
      <div className='post-deck-buttons'>
        <Link href='/app'>
          <div className='app-button index-button'>
            Play
          </div>
        </Link>
        <Link href='/design'>
          <div className='app-button index-button'>
            Design
          </div>
        </Link>
      </div>
    </div>
    <style jsx>{`
        .index-container {
            max-width: 700px;
            margin: auto;
            text-align: center;
        }
        .post-deck-buttons {
          display: flex;
          justify-content: space-between;
          padding: 30px 0;
        }
        .index-button {
          border: 1px solid black;
          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .app-button {
          width: 300px;
          height: 200px;
        }
        .pnp-button {
          height: 100px;
        }
    `}</style>
  </Layout>
)

export default IndexPage
