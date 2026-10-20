// let count = 1;

// while (count <= 3) {
//     console.log(count);
//     count++;
// }
// let age =5;
// while (age <=3){
//     console.log(count);count++;
// }




// const quote = document.getElementById("quote");
// const author = document.getElementById("author");

// const api_url = "https://dummyjson.com/quotes/random";

// async function getquote(url) {
//     const response = await fetch(url);
//     const data = await response.json();

//     console.log(data);

//     quote.innerHTML = data.quote;
//     author.innerHTML = data.author;
// }

// getquote(api_url);

// function tweet(){
//     window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML,"---- by" + author.innerHTML "Tweet Window","height=500px width=600px",)
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

function tweet() {
    const tweetText = quote.innerHTML + " — by " + author.innerHTML;

    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText),
        "Tweet Window",
        "height=500,width=600"
    );
}
