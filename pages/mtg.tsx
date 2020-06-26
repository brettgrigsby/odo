import SceneFromImages from '../components/SceneFromImages'

const imageFilenames = ['black.jpeg', 'blue.jpeg', 'green.jpeg', 'red.jpeg']

const MTGPage = () => {
    return (
        <SceneFromImages imageFilenames={imageFilenames} />
    )
}

export default MTGPage