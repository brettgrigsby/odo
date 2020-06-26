import SceneFromImages from '../components/SceneFromImages'
import DesktopARLayout from '../components/DesktopARLayout'

const imageFilenames = ['luke.jpg', 'darth.jpg', 'han.jpg', 'trooper.jpg']

const DestinyPage = () => {
    return (
        <DesktopARLayout title="Star Wars: Destiny">
            <SceneFromImages imageFilenames={imageFilenames} />
        </DesktopARLayout>
    )
}

export default DestinyPage