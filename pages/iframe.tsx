import DesktopARLayout from '../components/DesktopARLayout'
import { docFromImages } from '../utils/sceneBuilder'

const imageFilenames = ['luke.jpg', 'darth.jpg', 'han.jpg', 'trooper.jpg']

const IframePage = () => {
    const src = docFromImages(imageFilenames)
    return (
        <DesktopARLayout>
            <iframe style={{height: '100vh', width: '100vw' }} srcDoc={src} frameBorder='0' />
        </DesktopARLayout>
    )
}

export default IframePage