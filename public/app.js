// const apiURL = "https://type.fit/api/quotes";
const apiURL = "https://meilune.github.io/quote-generator/uploads/quotes.json"
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const twitterBtn = document.getElementById("twitter");
const load = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");

//loading
function loading() {
    load.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading
function complete() {
    load.hidden = true;
    quoteContainer.hidden = false;
}

//On load
getQuotes()
.catch(error => {
    console.error(error);
});

async function getQuotes() {
    loading();
    const response = await fetch(apiURL);
    const data = await response.json();
    const dataResponse = data[Math.floor(Math.random() * data.length)]; 
    quoteText.textContent += dataResponse.text;
    if (dataResponse.author === null) {
        quoteAuthor.textContent += "Anonymous";
    } else {
        quoteAuthor.textContent += dataResponse.author;
    };
    complete();
}



function refreshPage(){
    loading();
    window.location.reload();
} 
//Tweeting a quote
function loadTweet() {
    const twitterLink = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterLink, '_blank');
}

