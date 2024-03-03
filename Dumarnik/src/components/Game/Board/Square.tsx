const Square = (props: any) => {

    function compare(arr: number[], n: number){
        if(arr.includes(n)){
            return true;
        }
        return false;
    }

    return (
        <div className='game-board'>
            <table className='default-table'>
                <tbody>
                    {!props.data ? "loading..." : props.data.map((row: [], firstIdx: number) => (
                        <tr key={firstIdx}>
                            {row.map((char: string, secondIdx: number) => (
                                <td 
                                
                                className={compare(props.index, ((firstIdx * props.columns - 1) + (firstIdx + 1) + secondIdx)) ? `blue` : `default`}
                                key={(firstIdx * props.columns - 1) + (firstIdx + 1) + secondIdx}>{char}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
            </div>
        </div>
    );
};

export default Square