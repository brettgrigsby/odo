import { srcDocFromGame } from '../utils/'
import { Game } from '../interfaces'

type IframePageProps = {
    game: Game
}

const IframeFromGame = (props: IframePageProps) => {
    const srcDoc = srcDocFromGame(props.game)
    return (
        <iframe style={{height: '100vh', width: '100vw' }} srcDoc={srcDoc} frameBorder='0' />
    )
}

export default IframeFromGame