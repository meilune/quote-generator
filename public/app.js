// const apiURL = "https://type.fit/api/quotes";
const apiURL = "uploads/quotes.json"
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

async function getQuotes() {
    const response = await fetch(apiURL);
    const data = await response.json();
    const dataResponse = data[Math.floor(Math.random() * data.length)]; 
    quoteText.textContent += dataResponse.text;
    if (dataResponse.author === null) {
        quoteAuthor.textContent += "Anonymous";
    } else {
        quoteAuthor.textContent += dataResponse.author;
    };
}

//On load
getQuotes()
.catch(error => {
    console.error(error);
});

function refreshPage(){
    window.location.reload();
} 
// function loadTweet() {
//     twitterLink = "https://twitter.com/intent/tweet?text="+quoteText+" By "+quoteAuthor;
//     document.getElementById("twitter-id").href = twitterLink;
// }

