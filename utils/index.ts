import { Game, GameElement } from "../interfaces";

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

const srcDocFromGame = (game: Game): string => {
    const { elements } = game
    const imgElements: string = elements.reduce((acc: string, ele: GameElement) => (
        acc + `<img id="${ele.id}" src="${ele.imgSrc}" />`
    ), '')

    // TODO: experiment more with <a-marker smooth="true">
    const markerElements: string = elements.reduce((acc: string, ele: GameElement, idx: number) => (
        acc + `
            <a-marker type="barcode" value="${idx}" smooth="true">
                <a-image
                    class="cardImage"
                    src="#${ele.id}"
                    position="${ele.position?.join(' ') || '0.9 0 1.4'}"
                    width="${ele.width || 3.25}"
                    height="${ele.height || 4.5}"
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

export { srcDocFromGame }

