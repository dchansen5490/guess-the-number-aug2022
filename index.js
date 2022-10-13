const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start(){

// Beginning of game will ask the player to guess a number. 
  console.log("Let's play a game where you (human) make up a number between 1 and 100 and I (computer) try to guess it.")

  // This will record the secret number and remember it
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.

  // Computer takes first guess
  var number = Math.floor(Math.random() * 100 + 1)
  //console.log("Is your secret number " + number) 

   // human responds with Yes or No
   
   let answer = await ask("(Y)es or (N)o is your secret number " + number)
  console.log("you answered" + answer)
  if (answer === "Y"){ 
  console.log("I Win")
  // If user says no computer will ask higher or lower
  }else if (answer === "N"){
    let guess = await ask("Is it (H)igher or (L)ower?")
  }else if (guess === "H")
  






  process.exit();

}


