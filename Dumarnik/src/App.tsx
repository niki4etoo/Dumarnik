import './App.css'

import Square from './components/GameBoard/Square'
import MainInput from './components/GameBoard/UserInput/MainInput'


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
