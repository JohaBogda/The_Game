const playerScore = document.querySelector("playerScore")
const robotScore = document.querySelector("robotScore")


function playerTurn() {



    console.log('hey we clicked a button with a value X')
    // do logic here, save value in a variable
    
    // make sure you call this at the end after all your playerTurn logic
    computerTurn(3)
  }
  
  function computerTurn(max) {

     if(Math.floor(Math.random()*max) === 1){
          console.log("computer chose rock")
      }
      else if(Math.floor(Math.random()*max) === 2){
              console.log("computer chose paper")
        }
        else{
            console.log("computer chose scissors")
        }
  }
  
  // when we click a button for player to choose thier value, we would call the F playerTurn
  playerTurn()
  