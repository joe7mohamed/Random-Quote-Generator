const quotes = [
    {
        author: "Albert Einstein",
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        image: "https://via.placeholder.com/150"
    },
    {
        author: "Isaac Newton",
        text: "If I have seen further it is by standing on the shoulders of Giants.",
        image: "https://via.placeholder.com/150"
    },
    {
        author: "Yoda",
        text: "Do, or do not. There is no try.",
        image: "https://via.placeholder.com/150"
    }
];


let previousIndex = -1;

function generateQuote() {
    let randomIndex;
    // Generate a new random index that is not the same as the previous one
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);
    // Update the previous index
    previousIndex = randomIndex;
    // Get the selected quote
    const randomQuote = quotes[randomIndex];

    // Update the quote card with the random quote
    document.getElementById('quoteAuthor').innerText = randomQuote.author;
    document.getElementById('quoteText').innerText = randomQuote.text;
    // Optionally update the image if needed
    // document.getElementById('quoteImage').src = randomQuote.image;

    // Show the quote card
    document.getElementById('quoteCard').classList.remove('d-none');
}
