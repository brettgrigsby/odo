import Link from 'next/link'
import { GameScene } from '../interfaces'
import { ChangeEvent } from 'react'

const arHeaderStyles = {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#ffffff',
    height: 20,
    padding: 15,
    borderRadius: '0 0 10px 0',
    boxShadow: '3px 5px 3px rgba(0, 0, 0, 0.5)'

}

type ARLayoutProps = {
    title: string
    children: React.ReactNode
    games: GameScene[]
    handleGameChange: (gameName: string) => void
}

const DesktopARLayout = (props: ARLayoutProps) => {
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.handleGameChange(event.target.value)
    }

    return (
        <>
            <div style={arHeaderStyles}>
                <Link href="/">
                    <a style={{marginRight: 20}}>{'<- Back'}</a>    
                </Link> 
                <span>{props.title}</span>
                <label style={{ marginLeft: 20 }}>
                    Change the current game:{' '}
                    <select onChange={handleSelectChange}>
                        { props.games.map(gs => (
                            <option value={gs.name}>{gs.name}</option>
                        ))}
                    </select>
                </label>
            </div>
            {props.children}
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}</style>
        </>
    )
}

export default DesktopARLayout