

const score = JSON.parse(localStorage.getItem('score'));
updateScores();

function handleClicked(){
  document.querySelector('.rules').innerHTML = `
  <button class="cross-btn" onclick="crossTheRules();">x</button>
  <div class="js-display">
  <h1>Games Rules</h1>
  <ul  style="list-style: square;">
  <li>
    Rock beats scissors, scissors beat paper, and paper beats rock.
  </li>
  <li>Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”</li>
  <li>Use rock, paper, scissors to settle minor decisions or simply play to pass the time</li>
  <li>If both players lay down the same hand, each player lays down another hand</li>
</ul>  
  </div>

  `
}

function crossTheRules(){
  document.querySelector('.rules').innerHTML = '';
}


function computerTurn(){
  let randomMove = Math.random();
  let computerMove = '';
  if(randomMove > 0 && randomMove< 1/3)
   computerMove = 'rock';
  else if(randomMove > 1/3 && randomMove< 2/3)
   computerMove = 'paper';
  else
   computerMove = 'scissors';
  return computerMove;
}


function playGame(userChoice) {
  let computerChoice = computerTurn();
  let result = '';
  if(computerChoice === 'rock')
  {
    if(userChoice === 'rock')
     result = 'Tie';
    else if(userChoice === 'paper')
     result= 'you won';
    else 
     result = 'you lose';
  }
 

  if(computerChoice === 'paper')
  {
    if(userChoice === 'rock')
     result = 'You Lose';
    else if(userChoice === 'paper')
     result = 'Tie';
    else 
     result = 'You Won';
  }


  if(computerChoice  === 'scissors')
  {
    if(userChoice === 'rock')
     result = 'You Won';
    else if(userChoice === 'paper')
     result =  'You Lose';
    else 
     result = 'Tie';
  }

  if( result === 'You Won')
   score.Won++;
  else if(result === 'You Lose')
   score.Lose++;
  else
   score.Tie++;

  localStorage.setItem('score', JSON.stringify(score));
  updateScores();

  
 const buttonHTML = document.querySelector('.second').
  innerHTML = `
  <div class="secondIcons">
  <div class="${getClass(userChoice)}">
    <img  src="./pictures/${userChoice}.jpg" alt="">
  </div>
  <div class="final-result">
    <p>${result} <br> <span>Against Pc</span></p>
    <button onclick="${result === 'Tie' ? 'playAgain();' : 'playAgain();'}">${getButtonText(result)}</button>
  </div>
  <div class="${getClass(computerChoice)}">
   <img src="./pictures/${computerChoice}.jpg" alt="">
  </div>
</div>
  
`;


}



function getButtonText(result){
  return result === 'Tie' ? 'Replay' : 'PLAY AGAIN';
}
function getClass(choice) {
  switch (choice) {
    case 'rock':
      return 'rock-class'; // Add your CSS class name for 'rock' choice
    case 'paper':
      return 'paper-class'; // Add your CSS class name for 'paper' choice
    case 'scissors':
      return 'scissors-class'; // Add your CSS class name for 'scissors' choice
    default:
      return ''; // Default class or no class
  }
}

function playAgain(){
  document.querySelector('.second').
   innerHTML = `
   <div class='icons'>
   <div class="rock">
   <img onclick="playGame('rock');" src="./pictures/rock.jpg" alt="">
 </div>
 <div class="paper">
   <img onclick="playGame('paper');" src="./pictures/paper.jpg" alt="">
 </div>
 <div class="scissors scissors2">
   <img onclick="playGame('scissors');" src="./pictures/scissors.jpg" alt="">
 </div>
 <img id = line1 src="./pictures/Line 1.png" alt="">
 <img id = line2 src="./pictures/Line 2.png" alt="">
 <img id = line3 src="./pictures/Line 3.png" alt="">
 </div>
 <div class="rules">
 </div>
 <button class="rules-btn" onclick="handleClicked();">Rules</button>
 <button class="next-btn" >Next</button>
 `;
}

function updateScores() {
  document.querySelector('.score')
  .innerHTML = 
    ` <div class="compScore" >
    <p class="title">COMPUTER SCORE</p>
    <p class="number">${score.Lose}</p>
  </div>
  <div class="yourScore" >
    <p class="title">YOUR SCORE</p>
    <p class="number">${score.Won}</p>
  </div>`;
}

