import { GameScene, GameSceneElement } from "../interfaces"

const wrapARDocument = (content: string): string => {
    return (`
        <!DOCTYPE html>
        <head>
            <title>The Base Game</title>
            <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
            <!-- include aframe-ar.js -->
            <script src="./aframe-ar.js"></script>
        </head>

        <body style='margin : 0px; overflow: hidden; font-family: Monospace;'>
            ${content}
        </body>
        </html>
    `)
}

const sceneFromImages = (imageNames: string[], path = ''): string => {
    const imgElements: string = imageNames.reduce((acc, imageName) => (
        acc + `<img id="${imageName.split('.')[0]}" src="${path + imageName}" />`
    ), '')

    const markerElements: string = imageNames.reduce((acc, imageName, idx) => (
        acc + `
            <a-marker type="barcode" value="${idx}">
                <a-image
                    class="cardImage"
                    src="#${imageName.split('.')[0]}"
                    position="0.9 0 1.4"
                    width="3.25"
                    height="4.5"
                    rotation="270 0 0"
                />
            </a-marker>
        `
    ), '')
    return (`
        <a-scene
            embedded
            arjs='sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3; debugUIEnabled: false;'
        >
            <a-assets id="image-assets">
                ${imgElements}
            </a-assets>

            ${markerElements}

            <!-- add a simple camera -->
            <a-entity camera></a-entity>
        </a-scene>
    `)
}

const docFromImages = (imageNames: string[], path: string): string => (
    wrapARDocument(sceneFromImages(imageNames, path))
)

const docFromGameScene = (gameScene: GameScene): string => {
    const { elements } = gameScene
    const imgElements: string = elements.reduce((acc: string, ele: GameSceneElement) => (
        acc + `<img id="${ele.id}" src="${ele.imgSrc}" />`
    ), '')

    const markerElements: string = elements.reduce((acc: string, ele: GameSceneElement, idx: number) => (
        acc + `
            <a-marker type="barcode" value="${idx}" smooth="true">
                <a-image
                    class="cardImage"
                    src="#${ele.id}"
                    position="0.9 0 1.4"
                    width="3.25"
                    height="4.5"
                    rotation="270 0 0"
                />
            </a-marker>
        `
    ), '')
    return wrapARDocument(`
        <a-scene
            embedded
            arjs='sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3; debugUIEnabled: true;'
        >
            <a-assets id="image-assets">
                ${imgElements}
            </a-assets>

            ${markerElements}

            <!-- add a simple camera -->
            <a-entity camera></a-entity>
        </a-scene>
    `)
}

export { wrapARDocument, sceneFromImages, docFromImages, docFromGameScene }