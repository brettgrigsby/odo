import { useState } from 'react'
import DesktopARLayout from '../components/DesktopARLayout'
import IframeFromGameScene from '../components/IframeFromGameScene'
import { playingCards, mtg, destiny } from '../utils/games'
import { GameScene } from '../interfaces'

const games = [ playingCards, mtg, destiny ]

const AppPage = () => {
    const [gameScene, setGameScene] = useState(playingCards)

    const handleGameChange = (gameName: string): void => {
        const gameScene: GameScene = games.find(gs => gs.name === gameName) || playingCards
        setGameScene(gameScene)
    }

    return (
        <DesktopARLayout
            title={gameScene.name}
            games={games}
            handleGameChange={handleGameChange}
        >
            <IframeFromGameScene gameScene={gameScene} />
        </DesktopARLayout>
    )
}

export default AppPage