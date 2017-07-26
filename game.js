var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var wins=0;
var losses=0;
var guesses=10;
var guessesSoFar = [];
//couldn't get the document.getElementById to work outside of the function psychicGame
//so i decided to just use an alert to start the game

function psychicGame()
{
document.onkeyup = function(event) 
{
	var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	var lowerCase = event.key;
	var userChoice = lowerCase.toUpperCase();
	guessesSoFar.push(userChoice);
	

		if(userChoice === randomLetter)
		{
			 wins++;
			 guesses=10;
			 guessesSoFar=[];
		}
		else if (guesses>1 && userChoice !== randomLetter)
		{
			guesses-=1;

		}
		else
		{
			 losses++;
			 guesses=10;
			 guessesSoFar=[];
		}
		console.log(guessesSoFar);
	
	

	document.getElementById("message").innerHTML = "Psychic Game!" + "<br>" +
	 "Guess what letter I'm thinking of!" + "<br>" + "Wins: " + wins + "<br>" + "Losses: " +
	  losses + "<br>" + "You guessed: " + guessesSoFar + "<br>" + "Guesses remaining: " + guesses;	
}
}
psychicGame();

