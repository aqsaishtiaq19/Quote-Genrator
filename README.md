# Quote Generator

A simple web app that shows a random quote each time you click a button. You can also share the quote on Twitter/X. Built with plain HTML, CSS, and JavaScript, with no frameworks.

## Live Demo

https://velvety-cucurucho-8c5fcd.netlify.app

## Features

- Shows a random quote and its author
- "New Quote" button loads a fresh quote without reloading the page
- "Tweet" button shares the current quote on Twitter/X
- Loading text while the quote is being fetched
- Responsive layout

## Built With

- HTML5
- CSS3
- JavaScript (Fetch API, async/await, DOM manipulation)
- Quotes fetched from [API NAME]

## How It Works

1. When the page loads, JavaScript sends a request to the quotes API.
2. The quote text and author are inserted into the page.
3. Clicking **New Quote** calls the API again and updates the page.
4. Clicking **Tweet** opens a Twitter/X share window with the quote pre-filled.

## Project Structure

```
quote-generator/
├── index.html
├── style.css
├── index.js
└── images.png
```

## Run Locally

1. Clone the repository
```bash
   git clone https://github.com/aqsaishtiaq19/<your-repo-name>.git
```
2. Open the folder
```bash
   cd <your-repo-name>
```
3. Open `index.html` in your browser (or use the Live Server extension in VS Code).

## What I Learned

- Fetching data from an API using JavaScript
- Updating the DOM dynamically
- Handling button events
- Deploying a static site on Netlify

## Future Improvements

- Copy-to-clipboard button
- Quote categories
- Dark mode
- Error message if the API fails

## Author

**Aqsa Ishtiaq**
- GitHub: [aqsaishtiaq19](https://github.com/aqsaishtiaq19)
- LinkedIn: [Aqsa Ishtiaq](https://linkedin.com/in/aqsa-ishtiaq-67523627a)
