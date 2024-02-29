import { useEffect, useState } from 'react';

// import { charactersGenerator } from "./CharactersGenerator";

const characterSetSize = 36;
const chunkSize = Math.sqrt(characterSetSize);

const Square = () => {

    const [data, setData] = useState([[]]);

    useEffect(() => {
        fetch('http://localhost:3001/api')
            .then((res) => res.json())
            .then((data) => {
                data = JSON.parse(data);
                
                let output = [];
                for (let i = 0; i < characterSetSize; i += chunkSize) {
                    output.push(data.slice(i, i + chunkSize))
                }
                setData(output);                
                return data;
            })
    }, []);

    return (
        <div className='game-board'>
            <table className='default-table'>
                <tbody>
                    {!data ? "loading..." : data.map((row, firstIdx) => (
                        <tr key={firstIdx}>
                            {row.map((char, secondIdx) => (
                                <td key={firstIdx + secondIdx}>{char}</td>
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