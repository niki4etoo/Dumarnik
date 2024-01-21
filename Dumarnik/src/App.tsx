import './App.css'

import Square from './components/Square'
import MainInput from './components/UserInput/MainInput'

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
