import { Game, GameElement } from '../../interfaces'

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

const loveLetter: Game = {
    name: 'Love Letter',
    elements: loveLetterElements
}

export default loveLetter