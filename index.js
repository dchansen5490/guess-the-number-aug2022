const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start(){


  console.log("Let's play a game where you (human) make up a number between 1 and 100 and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.

  // Computer takes first guess
  var number = Math.floor(Math.random() * 100 + 1)
  console.log("Is your secret number " + number) 
   // human responds
   let answer = await ask( "Y or 'N")
  console.log("You answered "  +  answer);
  if (answer === "Y"){
    console.log("You Win!!!")
  }else if (answer === "N"){
    console.log("Wrong, Guess again loser")
  }

  // computer will guess again






  process.exit();

}


