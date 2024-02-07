import React, { useState } from 'react';
import { charactersGenerator } from './CharactersGenerator'

import './table.css'

interface RandomBulgarianCharactersTableProps {
    numberOfCharacters: number;
}

const Square: React.FC<RandomBulgarianCharactersTableProps> = ({ numberOfCharacters }) => {

    // Generate a random set of Bulgarian alphabet characters
    const letters = charactersGenerator(numberOfCharacters);
    const cellLetters = letters.map((letter, index) => ({ id: index, char: letter, backgroundColor: 'white', active: false }));
    const [rows, cols] = [Math.sqrt(numberOfCharacters), Math.sqrt(numberOfCharacters)]
    const [cells, setCells] = useState(cellLetters);

    const chunkedCharacters: string[][] = [];

    for (let i = 0; i < letters.length; i += rows) {
        chunkedCharacters.push(letters.slice(i, i + cols));
    }

    const handleClick = (rowIndex: number, columnIndex: number, e: any) => {
        console.log(`row index: ${rowIndex}; column index: ${columnIndex}`);

        console.log(letters);
        console.log(`Row index: ${rowIndex}  Column index: ${columnIndex}`);
        console.log(cellLetters[rows * rowIndex + columnIndex].char);
        console.log(cellLetters[rows * rowIndex + columnIndex].backgroundColor);
        console.log(cellLetters[rows * rowIndex + columnIndex].active);
        
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
                                    onClick={(e) => handleClick(rowIndex, columnIndex, e)}
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