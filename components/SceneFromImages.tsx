import DesktopARLayout from './DesktopARLayout'
import { docFromImages } from '../utils/sceneBuilder'

type IframePageProps = {
    imageFilenames: string[]
}

const IframePage = (props: IframePageProps) => {
    const src = docFromImages(props.imageFilenames)
    return (
        <DesktopARLayout>
            <iframe style={{height: '100vh', width: '100vw' }} srcDoc={src} frameBorder='0' />
        </DesktopARLayout>
    )
}

export default IframePage