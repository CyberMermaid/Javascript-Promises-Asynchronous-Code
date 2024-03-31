import fetch from 'node-fetch';

// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
async function drawCard() {
    let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    let cardData = await response.json(); 
    console.log(`${cardData.cards[0].value} of ${cardData.cards[0].suit}`);
    return `${cardData.cards[0].value} of ${cardData.cards[0].suit}`;
}

drawCard();

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the **same** deck.
// Once you have both cards, ***console.log*** the values and suits of both cards.

async function drawTwoCards() {
    // Step 1: Create a new deck
    const newDeckResponse = await fetch('https://deckofcardsapi.com/api/deck/new/');
    if (!newDeckResponse.ok) {
        throw new Error(`HTTP error! status: ${newDeckResponse.status}`);
    }
    const newDeckData = await newDeckResponse.json();
    const deckId = newDeckData.deck_id;

    // Step 2: Draw the first card
    const firstCardResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    if (!firstCardResponse.ok) {
        throw new Error(`HTTP error! status: ${firstCardResponse.status}`);
    }
    const firstCardData = await firstCardResponse.json();
    console.log(`${firstCardData.cards[0].value} of ${firstCardData.cards[0].suit}`);

    // Step 3: Draw the second card
    const secondCardResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    if (!secondCardResponse.ok) {
        throw new Error(`HTTP error! status: ${secondCardResponse.status}`);
    }
    const secondCardData = await secondCardResponse.json();
    console.log(`${secondCardData.cards[0].value} of ${secondCardData.cards[0].suit}`);
}

drawTwoCards();

export {drawCard, drawTwoCards}