let minRange = 1;
let maxRange = 2;
let player = "";
let stage = 1;
let point = 0;


const generateRandNum = function(minRange, maxRange) {
	let randNumber = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
	return randNumber;

}

const resetVariable = function(){
	let maxRange = 2;
	let player = "";
	let stage = 1;
	let point = 0;
}

if (player === "") {
	player = prompt("Enter Your name: ");
	console.log(player);
	let bool =false;
	 do{
		  let randNum = generateRandNum(minRange, maxRange);
				console.log(randNum);  ///uncomment to see the generated number (for test)
		 	guessedNum = parseInt(prompt(`Guess a number between ${minRange} and ${maxRange}`));
			if (guessedNum > maxRange || guessedNum < minRange  ){   //Ensure that the user guess was lower than the max range
			console.log(`Pls enter a number between ${minRange} and ${maxRange}, inclusive`)
		 }else{
				
				if(guessedNum === randNum){
					point +=1;
					maxRange +=1;
					stage +=1;
					
					//if (stage > 10)? '': "dddd";
				  console.log(`Congrats!! ${player} ,your guessed Number is correct ${guessedNum} is equal to  ${randNum} \n Point Earned: ${point} \n Next Stage: ${stage}`);
					bool =true;
				}else{
					resetVariable();
					console.log(`GameOver! ${player} ,your guessed Number is wrong, ${guessedNum} is not equal to ${randNum} \n Point Earned: ${point} \n Stage Reached : ${stage}`);
					break;
					
				}
			
		}
		 }while(bool);

}




