// set the day in the heading

let date = new Date();

let options = {
    weekday: 'long'
};
let day = date.toLocaleDateString('en-US', options);
document.getElementById("nameOfDay").innerHTML = day;

//array for changing background colors

const colors = ['#edf2fb', '#fce1e4', '#d7e3fc', '#ccdbfd', '#daeaf6', '#c1d3fe', '#abc4ff',
    '#e8dff5', '#fcf4dd', '#ddedea']

//generate quote

const quote = ['The purpose of our lives is to be happy', 'Life is what happens when you’re busy making other plans', 'Get busy living or get busy dying', 'You only live once, but if you do it right, once is enough',
    'Many of life’s failures are people who did not realize how close they were to success when they gave up', 'If you want to live a happy life, tie it to a goal, not to people or things', 'Never let the fear of striking out keep you from playing the game',
    'Money and success don’t change people,they merely amplify what is already there'
]
const author = ['- Dalai Lama', '- John Lennon', '- Stephen King', '- Mae West', '- Thomas A. Edison', '- Albert Einstein', '- Babe Ruth', '- Will Smith']

//changing background color everytime page refreshes

let pickNumber=Math.floor(Math.random()*colors.length);
document.body.style.background=colors[pickNumber];

//getting the quote to be displayed at the quote area

let pickQuoteNumber=Math.floor(Math.random()*quote.length);
document.getElementById("quote").innerText=quote[pickQuoteNumber];
document.getElementById("author_name").innerText=author[pickQuoteNumber];

//changing the color of the heading

document.getElementsByClassName("heading").style.color=colors[pickNumber];