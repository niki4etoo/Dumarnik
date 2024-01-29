import Square from './Square'
import MainInput from '../Input/Main'


const numberOfCharacters = 64; // default session

const Board = () => {

    return (
        <>
            <Square numberOfCharacters={numberOfCharacters} />
            <MainInput />
        </>
    )
}

export default Board;