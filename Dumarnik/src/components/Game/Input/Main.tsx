type HandleProps = {
    handleInput: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
};

const Main = ({ handleInput }: HandleProps) => {

    return (
        <div className="main--input">
            <form>
                <input id="mainInput" className="main--input-active" onChange={handleInput}></input>
            </form>
        </div>
    )

}

export default Main