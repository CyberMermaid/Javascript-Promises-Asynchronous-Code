// ## **Part 1: Number Facts**
// *(Note: You’ll need to make multiple requests for this.)*
const axios = require('axios');
// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
// (Make sure you get back JSON by including the ***json*** query key, specific to this API. [Details](http://numbersapi.com/#json).
let url = "http://numbersapi.com/14?json"
let promise = axios.get(url);
console.log(promise);
promise
.then(data => console.log(data))
.catch(err => console.log(err));

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let numbers = [14, 60, 20, 4]; 
let promises = numbers.map(number => axios.get(`http://numbersapi.com/${number}?json`));

Promise.all(promises)
 .then(responses => {
    responses.forEach(response => {
      console.log(`Number: ${response.config.url.split('/').pop()}, Fact: ${response.data.text}`);
    });
 })
 .catch(err => console.log(err));

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
let myFavoriteNumber = 14; 
let facts = [];

for (let i = 0; i < 4; i++) {
 axios.get(`http://numbersapi.com/${myFavoriteNumber}/${i}?json`)
    .then(response => {
      facts.push(response.data.text);
      if (facts.length === 4) {
        console.log(facts);
      }
    })
    .catch(err => console.log(err));
}

// Promise {<pending>}
// https://www.freecodecamp.org/news/make-api-calls-in-javascript/
// https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/ 
// https://blog.logrocket.com/understanding-axios-get-requests/ 

// ## **Part 2: Deck of Cards**

// 1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the **same** deck.
    
//     Once you have both cards, ***console.log*** the values and suits of both cards.
    
// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.