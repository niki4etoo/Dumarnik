import Square from './Square'
import MainInput from '../Input/Main'
import Timer from '../Session/Timer'

//Size of the board
const board64: number = 64; // 8x8
const board36: number = 36; // 6x6
const board16: number = 16; // 4x4

// Sessions types in minutes
const sessionFive: number = 5*60;
const sessionTen: number = 10*60;
const sessionFifteen: number = 15*60;


const numberOfCharacters = board36; // default session

const Board = () => {

    return (
        <>
            <Square numberOfCharacters={numberOfCharacters} />
            <MainInput />
            <Timer session={sessionFifteen} />
        </>
    )
}

export default Board;