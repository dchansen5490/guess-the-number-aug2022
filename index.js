const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number between 1 and 100 and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.

  // Computer takes first guess
  var number = Math.floor(Math.random() * 100 + 1)
console.log("is your secret number" + number) 

// If Computer answered correctly

if number == secretNumber {
  console.log(" Congrats, you win!!!")
}

// If Computer was incorrect 
ask










  process.exit();

}




