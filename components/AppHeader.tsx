import { Game } from "../interfaces";

type AppHeaderProps = {
    games: Game[]
    changeGame: (game: Game) => void
}

const AppHeader = (props: AppHeaderProps) => {
    const handleGameChange = (e: any): void => {
       const name = e.target.value
       const newGame = props.games.find(game => game.name === name) || props.games[0]
       props.changeGame(newGame)
    }

    return (
        <>
            <div className='app-header'>
                <select onChange={handleGameChange}>
                    {props.games.map((game: Game) => <option value={game.name}>{game.name}</option>)}
                </select>
            </div>
            <style jsx>{`
                .app-header {
                    position: fixed;
                    top: 10px;
                    left: 30px;
                }
            `}</style>
        </>
    )
}

export default AppHeader