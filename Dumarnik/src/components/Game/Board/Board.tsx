import Square from './Square'
import MainInput from '../Input/Main'

//Size of the board
const x64 = 64; // 8x8
const x36 = 36; // 6x6
const x16 = 16; // 4x4

const numberOfCharacters = x36; // default session

const Board = () => {

    return (
        <>
            <Square numberOfCharacters={numberOfCharacters} />
            <MainInput />
        </>
    )
}

export default Board;