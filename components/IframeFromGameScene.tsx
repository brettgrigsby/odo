import { docFromGameScene } from '../utils/sceneBuilder'
import { GameScene } from '../interfaces'

type IframePageProps = {
    gameScene: GameScene
}

const IframeFromGameScene = (props: IframePageProps) => {
    const src = docFromGameScene(props.gameScene)
    return (
        <iframe style={{height: '100vh', width: '100vw' }} srcDoc={src} frameBorder='0' />
    )
}

export default IframeFromGameScene