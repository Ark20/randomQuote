// FSJS - Random Quote Generator
//array of colors to change background
var colors = [
	"pink", "green", "red", "blue", "black", "magenta"
]

//Quotes are now in their own file...
// js/quotes.js
//they are included in the index.html file as a script tag.


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomColor(array)
{
	//create and store a random number
	var rand = Math.floor(Math.random() * array.length);
	//use number to randomly select color from array
	var randColor = array[rand];
	document.getElementById('loadQuote').style.background = randColor;
	document.getElementById('quote-box').style.background = randColor;
	document.body.style.background = randColor;
	console.log(randColor);
};

//pick a random number and use it to select a random quote
//I could have created one random number function and called it in these functions to get random quotes and colors but wanted to adhere to guidelines
function getRandomQuote(array)
{
	var rando = Math.floor(Math.random() * array.length);
	var randomQuote = array[rando];
	return randomQuote;
}


// Create the printQuote funtion and name it printQuote
function printQuote()
{
	//call randomquote and store the returned quote in a variable
	getRandomColor(colors);
	var randomQuote = getRandomQuote(quotes);
	if (randomQuote.hasOwnProperty('tags'))
	{
		var tags = "";
		for (var i = 0; i < randomQuote.tags.length; i++)
		{
			tags += '<p class="tags">' + randomQuote.tags[i] + '</p>';
		};


		document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '</p>' + tags;

	}
	else
	{
		document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '</p>';
	}
};
//refresh page every 5 seconds
setInterval(printQuote, 9000);
printQuote()

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
