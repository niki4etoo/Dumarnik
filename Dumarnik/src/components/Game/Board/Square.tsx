import React from 'react';
import { charactersGenerator } from './CharactersGenerator'

import './table.css'

interface RandomBulgarianCharactersTableProps {
    numberOfCharacters: number;
}

const Square: React.FC<RandomBulgarianCharactersTableProps> = ({ numberOfCharacters }) => {

    // Generate a random set of Bulgarian alphabet characters
    const letters = charactersGenerator(numberOfCharacters);

    // Chunk the characters into rows (assuming 8 columns per row)
    const chunkedCharacters: string[][] = [];
    for (let i = 0; i < letters.length; i += 8) {
        chunkedCharacters.push(letters.slice(i, i + 8));
    }

    return (
        <div className='game-board'>
            <table className='default-table'>
                <tbody>
                    {chunkedCharacters.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((char, columnIndex) => (
                                <td id={columnIndex.toString()} className='default-cells' key={columnIndex}>{char}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Square