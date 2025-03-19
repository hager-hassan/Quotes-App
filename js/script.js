
let quotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        author: '― Oscar Wilde'
    },
    {
        quote: '“So many books, so little time.”',
        author: '― Frank Zappa'
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: '― Albert Einstein'
    },
    {
        quote: '“A room without books is like a body without a soul.”',
        author: '― Marcus Tullius Cicero'
    },
    {
        quote: '“You only live once, but if you do it right, once is enough.”',
        author: '― Mae West'
    },
    {
        quote: '“Be the change that you wish to see in the world.”',
        author: '― Mahatma Gandhi'
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: '― Mark Twain'
    },
    {
        quote: '“Without music, life would be a mistake.”',
        author: '― Friedrich Nietzsche, Twilight of the Idols'
    },
    {
        quote: '“Insanity is doing the same thing, over and over again, but expecting different results.”',
        author: '― Narcotics Anonymous'
    },
    {
        quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        author: '― Mahatma Gandhi'
    }
]

let lastRandomNum = -1;

function getQuote(){
    let randomNum = Math.floor(Math.random() * quotes.length);

    if(randomNum != lastRandomNum){
        document.getElementById('quote').innerHTML = quotes[randomNum].quote;
        document.getElementById('quote-author').innerHTML = quotes[randomNum].author;
        lastRandomNum = randomNum;
    }
    else{
        getQuote();
    }
}