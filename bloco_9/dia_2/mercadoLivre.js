const fetch = require('node-fetch');

const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=$computador '; 

async function verifiedFetch(url) {
  if (url === API_URL) {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.results));
  }
  throw new Error('endpoint não existe');
}

console.log(verifiedFetch);
async function sendJokeToFriend(name) {
  const message = await verifiedFetch(API_URL)
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")