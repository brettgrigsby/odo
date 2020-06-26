import SceneFromImages from '../components/SceneFromImages'
import DesktopARLayout from '../components/DesktopARLayout'

const imageFilenames = ['black.jpeg', 'blue.jpeg', 'green.jpeg', 'red.jpeg']

const MTGPage = () => {
    return (
        <DesktopARLayout title='Magic: The Gathering'>
            <SceneFromImages imageFilenames={imageFilenames} />
        </DesktopARLayout>
    )
}

export default MTGPage