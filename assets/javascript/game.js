

// var cChoice = Math.floor(Math.random() * 4);


// if (cChoice <= 0){
// 	cChoice = "A";
// }else if (cChoice <= 1){
// 	cChoice = "B";

// }else if (cChoice <= 2) {
// 	cChoice = "C"
// }else{
// 	cChoice = "D";
// }
// console.log(cChoice);

// var pChoice = document.onkeydown = function(event){
	
// 	var key_press = String.fromCharCode(event.keyCode);
// 	console.log(key_press);
// 	 // pChoice = key_press;
// 	// document.getElementById('yourGuessSoFar').innerhtml = pChoice;

// 	if(key_press === "A"){
// 		pChoice = "A";
// 	}else if (key_press === "B"){
// 		pChoice = "B";
// 	}else if (key_press === "C"){
// 		pChoice = "C";
// 	}else if (key_press === "D"){
// 		pChoice = "D";
// 	}
// }

// var win = 0;
// var loss = 0;
// var guess = 3;



// if (pChoice === cChoice){
// 	win ++;
// 	guess = 3;
// 	console.log("Win");
// 	console.log(win);
// 	document.getElementById("wins").innerHTML = ("Wins: " + win);
// 	document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);

//  } 


	

// 	 if (pChoice === "A"){
// 	 	if (cChoice ==="B"){
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	} else if (cChoice === "C"){
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}else{
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}
	 
	

// 	} if (pChoice === "B"){
// 		if (cChoice ==="A"){
// 			console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}else if (cChoice ==="C"){
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}else{
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}




// 	}if (pChoice === "C"){
// 		if (cChoice ==="A"){
// 			console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}else if (cChoice ==="B"){
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}else {
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}



// 	if (pChoice === "D"){
// 		if (cChoice ==="A"){
// 			console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}else if (cChoice ==="B"){
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}else {
// 	 		console.log("Lose");
// 	 		guess --;
// 	 		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + guess);
// 	 	}
// 	 }



// 	}












 //else {
// 	loss ++;
// 	guess --;
// 	console.log("lose");
// 	document.getElementById("losses").innerHTML = ("Losses: " + loss);
// 	document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + guess );

// }





// var pChoice = null;

// // Player Choice...

// document.onkeyup = function(event){
// 	var key_press = String.fromCharCode(event.keyCode);
// 	 if (key_press === ("A" || "a")){
// 	 	pChoice = "A";
// 	 	console.log(pChoice);
// 	 }
	 

// }


// // Computer Choices..
//  var cChoice = Math.floor(Math.random() * 4)

// if(cChoice === 0){
// 	cChoice = "A";
// }else if (cChoice === 1){
// 	cChoice = "B";
// }else if (cChoice === 2){
// 	cChoice = "C";
// }else{
// 	cChoice = "D";
// }
// console.log(cChoice);





// var score = {
// 	wins: 0,
// 	losses: 0,
// 	guessesLeft: 3,
// 	picked: [],
// }

// var game = {

// 	pChoice:document.onkeyup = function(event){
// 	var key_press = String.fromCharCode(event.keyCode);},
	
	
// 	compare: function(a,b,){
// 		if (a === b){
// 			score.wins ++;
// 			score.guessesLeft = 3;
// 			score.picked = [];
// 		};
// 		if (a === ("A" || "a")){
// 			if(b=== ("B" || "b")){
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("A");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			} else if (b === ("C" || "c")){
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("A");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			} else{
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("A");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			};
// 		}else if (a === ("B" || "b")){
// 			if (b === ("A" || "a")){
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("B");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			}else if (b === ("C" || "c")){
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("B");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			}else{
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("B");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			};
// 		}else if (a === ("C" || "c")){
// 			if (b === ("A") || "a"){
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("C");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);

// 			}else if (b === ("B" || "b")){
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("C");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			}else{
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("C");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			};
// 		}else{
// 			if (b === ("A") || "a"){
// 				console.log("lose");
// 				score.guessesLeft --;
// 				// document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("D");
// 				// document.getElementById('guessSoFar').innerHTML = (score.picked);

// 			}else if (b === ("B" || "b")){
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("D");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			}else{
// 				console.log("lose");
// 				score.guessesLeft --;
// 				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + score.guessesLeft);
// 				score.picked.push("D");
// 				document.getElementById('guessSoFar').innerHTML = (score.picked);
// 			};

// 		}
// 	}
   
   	
// }
	

// console.log (game.compare(pChoice, cChoice));
	
// // console.log(game.compare(playerChoice, cChoice));






// Attempt #3




// Results
var win = 0;
var loss = 0;
var gLeft = 3;
var picked = [];


// Players

var human = document.onkeyup = function(event){
 	var key_press = String.fromCharCode(event.keyCode);
 	human = key_press;
 	console.log(human);
 	compare(human, computer);
 	winner(human, computer);
 	loser(human, computer);
 }

var computer = Math.floor(Math.random() * 4);
	if (computer === 0){
		computer = "A";
	}else if (computer === 1){
		computer = "B";
	}else if (computer === 2){
		computer = "C";
	}else{
		computer = "D";
	}
	
	
console.log(computer);



// Functions

var winner = function(a,b){
	if ( a === b){
			win ++;
			
			document.getElementById('wins').innerHTML = ("Wins: " + win);
			gLeft = 3;
			document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
			picked = [];
			document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
			reset();
		}
}


var compare = function(a,b){
	
	

		if (a === ("A" || "a")){
			
			if (b === ("B" || "b")){
				picked.push("A");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}else if (b === ("C" || "c")){
				picked.push("A");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}else{
				picked.push("A");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}
		
		}else if (a === ("B" || "b")){
			
			if (b === ("A" || "a")){
				picked.push("B");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}else if (b === ("C" || "c")){
				picked.push("B");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}else{
				picked.push("B");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}
		
		}else if (a === ("C" || "c")){

			if (b === ("A" || "a")){
				picked.push("C");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}else if (b === ("B" || "b")){
				picked.push("C");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}else{
				picked.push("C");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}
		
		}else if (a === ("D" || "d")){

			if (b === ("A" || "a")){
				picked.push("D");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}else if (b === ("B" || "b")){
				picked.push("D");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}else{
				picked.push("D");
				gLeft --;
				document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
				document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
				
			}
		}else{
			 
			win ++;
			console.log(win);
			document.getElementById('wins').innerHTML = ("Wins: " + win);
			gLeft = 3;
			document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
			picked.pop();
			document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
			reset();
		}
		
}		
		

var reset = function (){
	 computer = Math.floor(Math.random() * 4);
				if (computer === 0){
					computer = "A";
				}else if (computer === 1){
					computer = "B";
				}else if (computer === 2){
					computer = "C";
				}else{
					computer = "D";
				};
		console.log(computer);

}

var loser = function(){
	if (gLeft === 0){
		loss ++;
		document.getElementById('losses').innerHTML = ("Losses: " + loss);
		gLeft = 3;
		document.getElementById('guessesLeft').innerHTML = ("Guesses Left: " + gLeft);
		picked = [];
		document.getElementById('guessSoFar').innerHTML = ("Your Guesses So Far: " + picked);
		reset();
	}
}

	



	
	 
	
































