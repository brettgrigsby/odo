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
            <div style={{ padding: 30 }}>
                <p>
                    Select the images you would like to use in your game.
                </p>
                <p>
                    Once you have selected your images, they will be automatically mapped to
                    your ODO deck and displayed.
                </p>
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
        <Layout title="ODO | Design">
            {renderGameOrMessage()}
        </Layout>
    )
}

export default DesignerPage