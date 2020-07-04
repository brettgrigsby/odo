import Layout from "../components/Layout"

const PnpinstructionsPage = () => {
    return (
        <Layout>
            <div className='pnp-container'>
                <h1>The ODO Deck</h1>
                <p>
                    The ODO Deck consists of 64 cards (0 - 63) each with a marker in the
                    upper-left hand corner to allow the app the track and map the cards.
                </p>
                <p>
                    Here's the first one:
                </p>
                <div>
                    <img className='card-img' src='/0.png' alt='ODO card 0' />
                </div>
                <p>
                    For best results, make sure the cards are rigid and you're playing
                    in a well lit area.
                </p>
                <p>
                    Ready to get started? Here's a <a href="/odo-deck.zip">zip file</a> with
                    all of the card images you'll need to print your own ODO deck.
                </p>
            </div>
            <style jsx>{`
                .pnp-container {
                    padding: 0 20px;
                }
                .card-img {
                    width: 150px;
                    border: 1px solid black;
                    border-radius: 5px;
                }
            `}</style>
        </Layout>
    )
}

export default PnpinstructionsPage