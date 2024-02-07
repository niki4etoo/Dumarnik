export function charactersGenerator(numberOfCharacters: number) : string[] {
    const bulgarianAlphabet = 'абвгдежзийклмнопрстуфхцчшщъьюя';
    const alphabetLength = bulgarianAlphabet.length;
    const randomAlphabetSet: string[] = [];
  
    // Generate random characters from the Bulgarian alphabet
    for (let i = 0; i < numberOfCharacters; i++) {
      const randomIndex = Math.floor(Math.random() * alphabetLength);
      const randomChar = bulgarianAlphabet.charAt(randomIndex);
      randomAlphabetSet.push(randomChar);
    }
  
    return randomAlphabetSet;
  }