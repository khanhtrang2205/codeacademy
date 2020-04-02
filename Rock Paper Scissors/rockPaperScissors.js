//function to know user choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb'){
    return userInput
  }else {
    console.log('Error, please type: rock, paper or scissors.');
  }
};

//function to know computer choice
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return  'rock'
      break;
    case 1:
        return  'paper'
        break;
    case 2:
            return  'scissors'
            break;  
  };
}

//determine a winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
      return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return  'The computer is won!'
    }
  else {
    return  'Congratulations, you won!';
  }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return  'The computer is won!'
    }
  else {
    return  'Congratulations, you won!';
  }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return  'The computer is won!'
    }
  else {
    return  'Congratulations, you won!';
  }
  }
  
  if (userChoice === 'bomb') {
    return  'Congratulations, you won!';
}    
};

//start the game
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice ();
  console.log('You threw: ' + userChoice );
  console.log('The computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice,computerChoice));  
};

playGame()
