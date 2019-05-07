// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Globally Accessible
var output = '';

var quotes = [
  {quote: 'You can\'t always get what you want.', source: 'The Rolling Stones', citation: 'Let It Bleed', year: 1969, tag: 'Music'},
  {quote: 'Would I rather be feared, or loved? Easy. Both. I want people to be afraid of how much they love me.', source: 'Michael Scott', citation: 'The Office', year: 2005, tag: 'Humor'},
  {quote: 'Stay thirsty my friends.', source: 'The Most Interesting Man in the World', citation: 'Dos Equis', year: 2006},
  {quote: 'I\'m gonna make him an offer he can\'t refuse.', source: 'Don Vito Corleone', citation: 'The Godfather', year: 1972, tag: 'Movies'},
  {quote: 'Frankly, my dear, I don\'t give a damn.', source: 'Rhett Butler', citation: 'Gone With The Wind', year: 1939, tag: 'Movies'},
  {quote: 'Go ahead, make my day.', source: 'Harry Callahan', citation: 'Sudden Impact', year: 1983, tag: 'Movies'},
  {quote: 'E.T. phone home.', source: 'E.T.', citation: 'E.T.', year: 1982, tag: 'Movies'},
  {quote: 'I\'ll have what she\'s having.', source: 'Sally Albright', citation: 'When Harry Met Sally', year: 1989, tag: 'Movies'},
  {quote: 'You don\'t need to change the world. Just change yours.', source: 'Craig Coria', citation: 'Himself', year: 2016, tag: 'Lifestyle'}
];

//Prints getRandomQuote function
function printQuote() {
  var randomQuote = getRandomQuote();
  output = document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span>' + '<span class="year">' + randomQuote.year + '</span></p>';
  
  if (randomQuote.citation) {
  	output += '<span class="citation">' + randomQuote.citation + '</span>';
  } else {
  	output += '';
  }
  if (randomQuote.year) {
  	output += '<span class="year">' + randomQuote.year + '</span>';
  } else {
  	output += '';
  } 
  if (randomQuote.tag) {
  	output += '<span class="tag">' + randomQuote.tag + '</span>'; 
  } else {
  	output += '';
  }

}

//Gets a random object to be called by printQuote
function getRandomQuote(){
	var thisQuote = Math.floor(Math.random() * quotes.length);
	return quotes[thisQuote];
}