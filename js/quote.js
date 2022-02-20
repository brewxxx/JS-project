const quotes = [
    {
        quote: "Never deprive someone of hope; it might be all they have.",
        author: "H. Jackson Brown Jr.",
    },
    {
        quote: "Laughter is the tonic, the relief, the surcease for pain.",
        author: "Charlie Chaplin",
    },
    {
        quote: "The more you find out about the world, the more opportunities there are to laugh at it.",
        author: "Bill Nye",
    },
    {
        quote: "He who has never hoped can never despair.",
        author: "George Bernard Shaw",
    },
    {
        quote: "Blaze with the fire that is never extinguished.",
        author: "Luisa Sigea",
    },
    {
        quote: "Convictions are more dangerous enemies of truth than lies.", 
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Don't be afraid your life will end; be afraid that it will never begin.",
        author: "Grace Hansen",
    },
    {
        quote: "Wheresoever you go, go with all your heart.",
        author: "Confucius",
    },
    {
        quote: "Ability is of little account without opportunity.",
        author: "Napoleon Bonaparte",
    },
    {
        quote: "You have to have confidence in your ability, and then be tough enough to follow through.",
        author: "Rosalynn Carter",
    },
]; // 명언이 들어있는 array. index로 접근한다는 뜻.


const randomNo = Math.floor(Math.random() * quotes.length);

const showQuote = document.querySelector("#quote");
const chosenQuote = quotes[randomNo];



//quoteBase.innerText = chosenQuote.quote;
showQuote.innerHTML = `<span>"${chosenQuote.quote}" <br>- ${chosenQuote.author}</span>`