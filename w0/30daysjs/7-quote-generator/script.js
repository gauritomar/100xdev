const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/quotes/random";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data)
        quote.innerHTML = data[0].content;
        author.innerHTML = data[0].author;
    }
    catch {
        console.log("Error fetching quote from API");
    }

}

getQuote(apiUrl)

function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}` + ` --by ${author.innerHTML}`, "Tweet Windoe", "width=600", "height=300")
}