import DesktopARLayout from '../components/DesktopARLayout'
import IframeFromGameScene from '../components/IframeFromGameScene'
import { playingCards } from '../utils/games'

const PlayingCardsPage = () => {
    return (
        <DesktopARLayout title="Playing Cards">
            <IframeFromGameScene gameScene={playingCards} />
        </DesktopARLayout>
    )
}

export default PlayingCardsPage