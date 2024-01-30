import Square from './Square'
import MainInput from '../Input/Main'
import Timer from '../Session/Timer'

//Size of the board
const x64: number = 64; // 8x8
const x36: number = 36; // 6x6
const x16: number = 16; // 4x4

// Sessions types in minutes
const type5: number = 5*60;
const type10: number = 10*60;
const type15: number = 15*60;


const numberOfCharacters = x36; // default session

const Board = () => {

    return (
        <>
            <Square numberOfCharacters={numberOfCharacters} />
            <MainInput />
            <Timer session={type15} />
        </>
    )
}

export default Board;