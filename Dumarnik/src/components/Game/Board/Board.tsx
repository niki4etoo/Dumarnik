import { useState, useEffect } from 'react'

import Square from './Square'
import MainInput from '../Input/Main'
import Timer from '../Session/Timer'

const PROTOCOL = 'http';
const HOST_NAME = 'localhost';
const PORT = 3001;

const characterSetSize = 36;
const chunkSize = Math.sqrt(characterSetSize);

const Board = () => {

    //Fetching the character set and storing it in charSet state
    const [charSet, setCharSet] = useState([[]]);

    useEffect(() => {
        fetch(`${PROTOCOL}://${HOST_NAME}:${PORT}/CharacterSet`)
            .then((res) => res.json())
            .then((data) => {
                data = JSON.parse(data);

                let output = [];
                for (let i = 0; i < characterSetSize; i += chunkSize) {
                    output.push(data.slice(i, i + chunkSize))
                }
                setCharSet(output);
                return data;
            }).catch((e) => { // to do 
                return e;
            });
    }, []);

    // mainInput state
    const [ input, setInput ] = useState("");

    // Cell class ( colors ) state

    const [ index, setIndex ] = useState<Number[]>([]);

    useEffect(() => {

        let inputChars = input.split('');

        charSet.map((arr, i) => {
            
            arr.map((v, ii) => {
                
                if(inputChars.includes(v)){
                    setIndex([...index, ((i * chunkSize - 1) + (i + 1) + ii)]);
                }

            })

        })

    }, [input]);

    return (
        <>
            <Square data={charSet} columns={chunkSize} index={index} />
            <MainInput handleInput={ (e) => setInput(e.target.value) } />
            <Timer />
        </>
    )
}

export default Board;