import SceneFromImages from '../components/SceneFromImages'

const imageFilenames = ['luke.jpg', 'darth.jpg', 'han.jpg', 'trooper.jpg']

const DestinyPage = () => {
    return (
        <SceneFromImages imageFilenames={imageFilenames} />
    )
}

export default DestinyPage