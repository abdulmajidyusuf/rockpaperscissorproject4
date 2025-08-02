const characters = document.getElementsByClassName('characters');
const placeHolder = document.getElementById('placeholder');
const playerChoiceDisplay = document.getElementById('playerschoice');
const computerChoiceDisplay = document.getElementById('computerschoice');
const playerScrDsp = document.getElementById('playerscorecnt');
const compScrDsp = document.getElementById('computerscorecnt');
const winner = document.getElementById('winner');
const resetButton = document.getElementById('reset')
let playerChoice = "";
let computerChoice = "";
let playerScoreCount = 0;
let computerScoreCount = 0;


// rock = 1
//paper = 2
//scissors = 3

function computerPick () {
    const computerIndex = Math.floor(Math.random()* 3) + 1;
    if(computerIndex === 1){
        computerChoice = "rock" ;
        computerChoiceDisplay.textContent = "rock"
        
    }
    else if(computerIndex === 2){
        computerChoice = "paper" ;
        computerChoiceDisplay.textContent = "paper"
        }
    else if(computerIndex === 3){
        computerChoice = "scissors" ;
        computerChoiceDisplay.textContent = "scissors"
        }
    
            }

characters[0].addEventListener("click", function(){
        
      playerChoiceDisplay.textContent = " rock"
        playerChoice = "rock"
       setTimeout(function() {computerPick();
        getWinner()}, 700)
        
}
    );

characters[1].addEventListener("click", function (){

    playerChoiceDisplay.textContent = "paper"
    playerChoice = "paper"
    setTimeout(function() {computerPick()
        getWinner()}, 500)
}
    );    
     
characters[2].addEventListener("click", function (){

    playerChoiceDisplay.textContent = " scissors"
    playerChoice = "scissors"
    setTimeout(function() {computerPick()
        getWinner()}, 500)
    
}
    );   

    function getWinner(){
      
    if(playerChoice === "rock" && computerChoice === "paper"){
        computerScoreCount++
        winner.classList.remove('playerwins');
        winner.classList.add('computerwins');
        winner.textContent = "you lose!";
        
        }
    else if(playerChoice === "rock" && computerChoice === "scissors"){
        playerScoreCount++
        winner.classList.remove('computerwins');
        winner.classList.add('playerwins');
        winner.textContent = "you win"
        
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
        computerScoreCount++
        winner.classList.remove('playerwins');
        winner.classList.add('computerwins');
        winner.textContent = "you lose!"
        
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        playerScoreCount++
        winner.classList.remove('computerwins');
        winner.classList.add('playerwins');
        winner.textContent = "you win"
        
    }
    else if(playerChoice === "scissors" && computerChoice === "rock"){
        computerScoreCount++
        winner.classList.remove('playerwins');
        winner.classList.add('computerwins');
        winner.textContent = "you lose!"
        
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        playerScoreCount++
        winner.classList.remove('computerwins');
        winner.classList.add('playerwins');
        winner.textContent = "you win"
        
    }
    else{
        winner.classList.remove('computerwins')
        winner.classList.remove('playerwins')
        winner.textContent = "DRAW"
    }
    playerScrDsp.textContent = playerScoreCount;
    compScrDsp.textContent = computerScoreCount;

}
    function resetFnctn(){
        playerChoice = "";
        computerChoice = "";
        playerScoreCount = 0;
        computerScoreCount = 0;
        playerScrDsp.textContent = playerScoreCount;
        compScrDsp.textContent = computerScoreCount;
        playerChoiceDisplay.textContent = "";
        computerChoiceDisplay.textContent = "";
        winner.textContent = "";

    }

    resetButton.addEventListener("click", resetFnctn)
