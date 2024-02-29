import express from 'express';

const SERVER_PORT = 3001;
const CLIENT_PORT = 5173;

const HOST = `localhost`;
const app = express();


function generate(numberOfCharacters) {
  const bulgarianAlphabet = 'абвгдежзийклмнопрстуфхцчшщъьюя';
  const alphabetLength = bulgarianAlphabet.length;
  const randomAlphabetSet = [];

  // Generate random characters from the Bulgarian alphabet
  for (let i = 0; i < numberOfCharacters; i++) {
      const randomIndex = Math.floor(Math.random() * alphabetLength);
      const randomChar = bulgarianAlphabet.charAt(randomIndex);
      randomAlphabetSet.push(randomChar);
  }

  return randomAlphabetSet;
};

let output = JSON.stringify(generate(36));

app.get('/api', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', `http://${HOST}:${CLIENT_PORT}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  res.json(output);
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://${HOST}:${SERVER_PORT}`);
});