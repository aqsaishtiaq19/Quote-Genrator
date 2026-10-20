// let count = 1;

// while (count <= 3) {
//     console.log(count);
//     count++;
// }
// let age =5;
// while (age <=3){
//     console.log(count);count++;
// }

const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://dummyjson.com/quotes/random";

async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello+World")
}