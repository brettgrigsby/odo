import { useState } from 'react'
import Layout from '../components/Layout'
import IframeFromGame from '../components/IframeFromGame'
import { playingCards, mtg, destiny } from '../utils/games'
import { Game } from '../interfaces'
import AppHeader from '../components/AppHeader'

const games = [ playingCards, mtg, destiny ]

const AppPage = () => {
    const [game, setGame] = useState(playingCards)

    const changeGame = (newGame: Game): void => {
        setGame(newGame)
    }

    return (
        <Layout title="ODO | App">
            <AppHeader changeGame={changeGame} games={games} />
            <IframeFromGame game={game} />
        </Layout>
    )
}

export default AppPage