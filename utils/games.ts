import { GameScene, GameSceneElement } from '../interfaces'

const pcImages = [
    "10_of_clubs.png", "10_of_diamonds.png", "10_of_hearts.png",
    "10_of_spades.png", "2_of_clubs.png", "2_of_diamonds.png",
    "2_of_hearts.png", "2_of_spades.png", "3_of_clubs.png",
    "3_of_diamonds.png", "3_of_hearts.png", "3_of_spades.png",
    "4_of_clubs.png", "4_of_diamonds.png", "4_of_hearts.png",
    "4_of_spades.png", "5_of_clubs.png", "5_of_diamonds.png",
    "5_of_hearts.png", "5_of_spades.png", "6_of_clubs.png",
    "6_of_diamonds.png", "6_of_hearts.png", "6_of_spades.png",
    "7_of_clubs.png", "7_of_diamonds.png", "7_of_hearts.png",
    "7_of_spades.png", "8_of_clubs.png", "8_of_diamonds.png",
    "8_of_hearts.png", "8_of_spades.png", "9_of_clubs.png",
    "9_of_diamonds.png", "9_of_hearts.png", "9_of_spades.png",
    "ace_of_clubs.png", "ace_of_diamonds.png", "ace_of_hearts.png",
    "ace_of_spades.png", "ace_of_spades2.png", "black_joker.png",
    "jack_of_clubs.png", "jack_of_clubs2.png", "jack_of_diamonds.png",
    "jack_of_diamonds2.png", "jack_of_hearts.png", "jack_of_hearts2.png",
    "jack_of_spades.png", "jack_of_spades2.png", "king_of_clubs.png",
    "king_of_clubs2.png", "king_of_diamonds.png", "king_of_diamonds2.png",
    "king_of_hearts.png", "king_of_hearts2.png", "king_of_spades.png",
    "king_of_spades2.png", "queen_of_clubs.png", "queen_of_clubs2.png",
    "queen_of_diamonds.png", "queen_of_diamonds2.png", "queen_of_hearts.png",
    "queen_of_hearts2.png", "queen_of_spades.png", "queen_of_spades2.png",
    "red_joker.png"
]

const playingCardsElements: GameSceneElement[] = pcImages.map(fileName => (
    { imgSrc: 'playingCards/' + fileName, id: fileName }
))

export const playingCards: GameScene = {
    name: 'Playing Cards',
    elements: playingCardsElements
}

const mtgImages = ['blue.png', 'black.jpeg', 'green.jpeg', 'red.jpeg']

const mtgCardsElements: GameSceneElement[] = mtgImages.map(fileName => (
    {
        imgSrc: fileName,
        id: fileName,
        metaData: 'Prowess: Whenever you cast a non-creature spell, this creature get +1/+1 until end of turn.'
    }
))

export const mtg: GameScene = {
    name: 'Magic: The Gathering',
    elements: mtgCardsElements
}

const destinyImages = ['luke.jpg', 'darth.jpg', 'han.jpg', 'trooper.jpg']

const destinyCardsElements: GameSceneElement[] = destinyImages.map(fileName => (
    { imgSrc: fileName, id: fileName }
))

export const destiny: GameScene = {
    name: 'Star Wars: Destiny',
    elements: destinyCardsElements
}