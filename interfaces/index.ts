export type GameSceneElement = {
  id: string
  imgSrc: string
  metaData?: string
  height?: number
  width?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

export type SceneFunction = {
  element: string
  script: string
}

export type GameScene = {
  name: string
  elements: GameSceneElement[]
  functions?: SceneFunction[]
}