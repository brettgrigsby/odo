export type GameElement = {
  id: string
  imgSrc: string
  height?: number
  width?: number
  position?: [number, number, number]
}

export type Game = {
  name: string
  elements: GameElement[]
}

// export type GameSceneElement = {
//   id: string
//   imgSrc: string
//   height?: number
//   width?: number
//   position?: [number, number, number]
//   rotation?: [number, number, number]
// }

// export type SceneFunction = {
//   element: string
//   script: string
// }

// export type GameScene = {
//   name: string
//   elements: GameSceneElement[]
//   functions?: SceneFunction[]
// }
