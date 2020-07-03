type DesignHeaderProps = {
    resetGame: () => void
}

const DesignHeader = (props: DesignHeaderProps): React.ReactElement => {
    const handleResetGame = () => {
        props.resetGame()
    }

    return (
        <>
            <div className='design-header' onClick={handleResetGame}>
                Reset Game
            </div>
            <style jsx>{`
                .design-header {
                    position: fixed;
                    top: 10px;
                    left: 30px;
                    background-color: white;
                    border: 1px solid black;
                    border-radius: 5px;
                    cursor: pointer;
                    padding: 5px 15px;
                }
            `}</style>
        </>
    )
}

export default DesignHeader