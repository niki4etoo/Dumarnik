
import { Link } from 'react-router-dom'

import '../../App.css'

const MainMenu = () => {

    return (
        <>
            <div className="menu">
                <button onClick={() => { console.log("Start the game") }}>
                    <Link to="/board">Start</Link>
                </button>
                <button onClick={() => { console.log("Open the settings") }}>
                    <Link to="/settings">Settings</Link>
                </button>
            </div>
        </>
    )
}

export default MainMenu;