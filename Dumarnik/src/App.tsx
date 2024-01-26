import './App.css'
import Dictionary from './components/Dictionary/Dictionary';

import Square from './components/GameBoard/Square'
import MainInput from './components/GameBoard/UserInput/MainInput'

let words = new Dictionary();

function App() {

  const numberOfCharacters = 64;

  return (
    <>
      <div className='header'>Добре дошли в думарник</div>
      <Square numberOfCharacters={numberOfCharacters} />
      <MainInput />
    </>
  )
}

export default App
