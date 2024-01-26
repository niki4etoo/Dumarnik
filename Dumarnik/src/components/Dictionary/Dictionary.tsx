
import * as wordsJSON from './dictionary_chunk1.json'

class Dictionary {

    words: string[] = wordsJSON.words;

    constructor() {
        
        for(let i = 0; i < this.words.length; i++){
            //to do
        }
    }

}

export default Dictionary;