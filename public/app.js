async function getQuotes() {
    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const dataResponse = data[Math.floor(Math.random() * data.length)]
            console.log(dataResponse);
        });
}

//On load
getQuotes();