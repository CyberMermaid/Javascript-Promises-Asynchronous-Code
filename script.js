        // This function fetches a new deck and draws a card
        async function drawCard() {
            try {
                // Fetch a new deck
                const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
                const data = await response.json();

                // Check if there are cards left in the deck
                if (data.success) {
                    // Display the drawn card
                    document.getElementById('cardContainer').innerHTML = `
                        <img src="${data.cards[0].image}" alt="Drawn Card"> `;
                } else {
                    alert('No cards left in the deck.');
                    document.getElementById('drawCardBtn').disabled = true;
                }
            } catch (error) {
                console.error('Error fetching a new deck or drawing a card:', error);
            }
        }
        // Fetch a new deck as soon as the DOM is fully loaded
        document.addEventListener('DOMContentLoaded',async function() {
            await drawCard();});

        // Add event listener to the draw card button
        document.getElementById('drawCardBtn').addEventListener('click', drawCard);