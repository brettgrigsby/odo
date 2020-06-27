import { docFromImages } from '../utils/sceneBuilder'

type IframePageProps = {
    imageFilenames: string[],
    path?: string
}

const IframePage = (props: IframePageProps) => {
    const src = docFromImages(props.imageFilenames, props.path || '')
    return (
        <iframe style={{height: '100vh', width: '100vw' }} srcDoc={src} frameBorder='0' />
    )
}

export default IframePage