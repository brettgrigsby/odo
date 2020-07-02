import { useState } from 'react'
import { Game, GameElement } from '../interfaces'
import DesignHeader from '../components/DesignHeader'
import IframeFromGame from '../components/IframeFromGame'
import Layout from '../components/Layout'

const DesignerPage = () => {
    const [game, setGame] = useState<Game | undefined>(undefined)

    const handleFiles = (e: any) => {
        const { files } = e.target
        const gameElements: GameElement[] = []
        for (let file of files) {
            const imgSrc = URL.createObjectURL(file)
            gameElements.push({ id: imgSrc, imgSrc })
        }
        const newScene: Game = {
            name: 'local design',
            elements: gameElements
        }
        setGame(newScene)
    }

    const resetGame = (): void => {
        setGame(undefined)
    }

    const renderGameOrMessage = () => {
        if (game) {
            return (
                <>
                    <DesignHeader resetGame={resetGame} />
                    <IframeFromGame game={game} />
                </>
            )
        }
        return (
            <div>
                <p>You need to add cards to render a game.</p>
                <input
                    type="file"
                    name="cardInput"
                    accept="image/x-png,image/gif,image/jpeg"
                    multiple
                    onChange={handleFiles}
                />
            </div>
        )
    }

    return (
        <Layout>
            {renderGameOrMessage()}
        </Layout>
    )
}

export default DesignerPage