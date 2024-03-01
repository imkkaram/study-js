const quotes = [
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    },
    {
        "quote": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
    },
    {
        "quote": "Get busy living or get busy dying.",
        "author": "Stephen King"
    },
    {
        "quote": "You only live once, but if you do it right, once is enough.",
        "author": "Mae West"
    },
    {
        "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "author": "Thomas A. Edison"
    },
    {
        "quote": "If life were predictable it would cease to be life, and be without flavor.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "Life is either a daring adventure or nothing at all.",
        "author": "Helen Keller"
    }
]
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");
const selectedIndex = rand(0, quotes.length-1);
const quoteText = quotes[selectedIndex].quote;
const authorText = quotes[selectedIndex].author;
quote.innerText = quoteText;
author.innerText = `\n- ${authorText} -`;
