// set the day in the heading

let date = new Date();

let options = {
    weekday: 'long'
};
let day = date.toLocaleDateString('en-US', options);
document.getElementById("nameOfDay").innerHTML = day;

//array for changing  backgroundColors

const backgroundColors = ['#aec5ed','#f7b3ba','#b8fb9b','#ccb8e9','#f6dd97']

const quoteColors=['#edf2fb', '#fce1e4', '#dbfdcc', '#e8dff5', '#fcf4dd']

    
//generate quote

const quote = ['The purpose of our lives is to be happy', 'Life is what happens when you’re busy making other plans', 'Get busy living or get busy dying', 'You only live once, but if you do it right, once is enough',
    'Many of life’s failures are people who did not realize how close they were to success when they gave up', 'If you want to live a happy life, tie it to a goal, not to people or things', 'Never let the fear of striking out keep you from playing the game',
    'Money and success don’t change people,they merely amplify what is already there'
]
const author = ['- Dalai Lama', '- John Lennon', '- Stephen King', '- Mae West', '- Thomas A. Edison', '- Albert Einstein', '- Babe Ruth', '- Will Smith']


//change the placeholder according to the timezone
let temp_time=new Date();
let time=temp_time.getHours();

console.log(time);

if(time>=00 && time<12)
   document.getElementById("timeOfDay").innerText="morning";
else if(time>=12 && time<16)
document.getElementById("timeOfDay").innerText="afternoon";
else if(time>=16 && time<20 )
document.getElementById("timeOfDay").innerText="evening";
else
document.getElementById("timeOfDay").innerText="night";


//changing background color everytime page refreshes

//getting the quote to be displayed at the quote area


//changing the color of the heading


document.getElementById("new_quote_button").addEventListener("click",()=>{

    
let pickNumber=Math.floor(Math.random()*backgroundColors.length);
document.body.style.background=backgroundColors[pickNumber];
document.getElementById("new_quote_button").style.backgroundColor=backgroundColors[pickNumber];

// document.getElementsByClassName("heading").style.color=backgroundColors[pickNumber];
let pickQuoteNumber=Math.floor(Math.random()*quote.length);
document.getElementById("quote").innerText=quote[pickQuoteNumber];
document.getElementById("author_name").innerText=author[pickQuoteNumber];
document.getElementById("quote_area").style.backgroundColor=quoteColors[pickNumber];
})

//changing the color of the button
