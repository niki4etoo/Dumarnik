export default function generate(numberOfCharacters) {
    const bulgarianAlphabet = 'абвгдежзийклмнопрстуфхцчшщъьюя';
    const alphabetLength = bulgarianAlphabet.length;
    const randomAlphabetSet = [];

    // Generate random characters from the Bulgarian alphabet
    for (let i = 0; i < numberOfCharacters; i++) {
        const randomIndex = Math.floor(Math.random() * alphabetLength);
        const randomChar = bulgarianAlphabet.charAt(randomIndex);
        randomAlphabetSet.push(randomChar);
    }

    return JSON.stringify(randomAlphabetSet);
};
