import React, { useState } from 'react';
import { charactersGenerator } from './CharactersGenerator'

import './table.css'

interface RandomBulgarianCharactersTableProps {
    numberOfCharacters: number;
}



const Square: React.FC<RandomBulgarianCharactersTableProps> = ({ numberOfCharacters }) => {

    // Generate a random set of Bulgarian alphabet characters
    const letters = charactersGenerator(numberOfCharacters);
    const [rows, cols] = [Math.sqrt(numberOfCharacters), Math.sqrt(numberOfCharacters)]
    const [cells, setCells] = useState(letters);

    const chunkedCharacters: string[][] = [];

    for (let i = 0; i < letters.length; i += rows) {
        chunkedCharacters.push(letters.slice(i, i + cols));
    }

    console.log(cells);

    const handleClick = (rowIndex: number, columnIndex: number) => {
        console.log(`row index: ${rowIndex}; column index: ${columnIndex}`);

    }

    return (
        <div className='game-board'>
            <table className='default-table'>
                <tbody>
                    {chunkedCharacters.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((char, columnIndex) => (
                                <td id={rowIndex.toString() + columnIndex.toString()}
                                    className='default-cells'
                                    onClick={() => handleClick(rowIndex, columnIndex)}
                                    key={columnIndex}
                                >{char}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Square