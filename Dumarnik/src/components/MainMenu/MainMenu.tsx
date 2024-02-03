
import './mainmenu.css';

const MainMenu = () => {

    return (
        <>
            <div className="menu">
                <button onClick={() => { console.log("Start the game") }}>
                    Start
                </button>
                <button onClick={() => { console.log("Open the settings") }}>
                    Settings
                </button>
            </div>
        </>
    )
}

export default MainMenu;