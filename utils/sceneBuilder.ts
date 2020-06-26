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

const sceneFromImages = (imageNames: string[]): string => {
    const imgElements: string = imageNames.reduce((acc, imageName) => (
        acc + `<img id="${imageName.split('.')[0]}" src="${imageName}" />`
    ), '')

    const markerElements: string = imageNames.reduce((acc, imageName, idx) => (
        acc + `
            <a-marker type="barcode" value="${idx}">
                <a-image
                    class="cardImage"
                    src="#${imageName.split('.')[0]}"
                    position="0.6 0 1.1"
                    width="2.5"
                    height="3.5"
                    rotation="270 0 0"
                />
            </a-marker>
        `
    ), '')
    return (`
        <a-scene embedded arjs='sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3; debugUIEnabled: false;'>
            <a-assets id="image-assets">
                ${imgElements}
            </a-assets>

            ${markerElements}

            <!-- add a simple camera -->
            <a-entity camera></a-entity>
        </a-scene>
    `)
}

const docFromImages = (imageNames: string[]): string => (
    wrapARDocument(sceneFromImages(imageNames))
)

export { wrapARDocument, sceneFromImages, docFromImages }