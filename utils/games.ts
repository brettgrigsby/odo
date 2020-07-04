import { Game, GameElement } from '../interfaces'

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

const playingCardsElements: GameElement[] = pcImages.map(fileName => (
    { imgSrc: 'playingCards/' + fileName, id: fileName }
))

export const playingCards: Game = {
    name: 'Playing Cards',
    elements: playingCardsElements
}

const loveLetterElements: GameElement[] = [
    { imgSrc: 'loveLetter/quickReference.png', id: 'quickReference'},
    { imgSrc: 'loveLetter/cardList.png', id: 'cardList'},
    { imgSrc: 'loveLetter/guard.png', id: 'guard1'},
    { imgSrc: 'loveLetter/guard.png', id: 'guard2'},
    { imgSrc: 'loveLetter/guard.png', id: 'guard3'},
    { imgSrc: 'loveLetter/guard.png', id: 'guard4'},
    { imgSrc: 'loveLetter/guard.png', id: 'guard5'},
    { imgSrc: 'loveLetter/priest.png', id: 'priest1'},
    { imgSrc: 'loveLetter/priest.png', id: 'priest2'},
    { imgSrc: 'loveLetter/baron.png', id: 'baron1'},
    { imgSrc: 'loveLetter/baron.png', id: 'baron2'},
    { imgSrc: 'loveLetter/handmaid.png', id: 'handmaid1'},
    { imgSrc: 'loveLetter/handmaid.png', id: 'handmaid2'},
    { imgSrc: 'loveLetter/prince.png', id: 'prince1'},
    { imgSrc: 'loveLetter/prince.png', id: 'prince2'},
    { imgSrc: 'loveLetter/countess.png', id: 'countess'},
    { imgSrc: 'loveLetter/king.png', id: 'king'},
    { imgSrc: 'loveLetter/princess.png', id: 'princess'}
]

export const loveLetter: Game = {
    name: 'Love Letter',
    elements: loveLetterElements
}