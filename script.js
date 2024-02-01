'use strict'

let quote = document.querySelector(".quote");
let btn = document.querySelector("button");

let quotes = [
    {
        quote: "The journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
    },
    {
        quote: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi",
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
    }
];



const newQoute = () => {
    let index = Math.floor(Math.random() * 10);
    let html = `
        <p>${quotes[index].quote} <p>
        <span>~ ${quotes[index].author} <span>
    `;

    quote.innerHTML = html;
}

btn.addEventListener("click", newQoute);