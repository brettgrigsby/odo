import { useState } from 'react'
import DesignerHeader from '../components/DesignerHeader'
import IframeFromGameScene from '../components/IframeFromGameScene'
import { GameScene, GameSceneElement } from '../interfaces'

const buildSceneFromLocalImages = (images): GameScene => {
    return {
        name: 'Designer Mode',
        elements: []
    }
}

const resetButtonStyles = {
    position: 'fixed',
    top: 10,
    left: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    width: 100,
    padding: 10,
    cursor: 'pointer'
}

const DesignerPage = () => {
    const [gameScene, setGameScene] = useState<GameScene | undefined>(undefined)

    const handleImagesUpload = (images: string[]): void => {
        // TODO allow images to be 'uploaded'
        // store images in localStorage?
        // eventually upload game data to share on the network
        setGameScene(buildSceneFromLocalImages(images))
    }

    const handleFiles = (e) => {
        const { files } = e.target
        const gameElements: GameSceneElement[] = []
        for (let file of files) {
            const imgSrc = URL.createObjectURL(file)
            gameElements.push({ id: imgSrc, imgSrc })
        }
        const newScene: GameScene = {
            name: 'local design',
            elements: gameElements
        }
        setGameScene(newScene)
    }

    const renderGameOrMessage = () => {
        if (gameScene) {
            return (
                <>
                    <div
                        onClick={removeCardSet}
                        style={resetButtonStyles}
                    >
                        Change Cards
                    </div>
                    <IframeFromGameScene gameScene={gameScene} />
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

    const removeCardSet = () => {
        setGameScene(undefined)
    }

    return (
        <>
            {renderGameOrMessage()}
        </>
    )
}

export default DesignerPage