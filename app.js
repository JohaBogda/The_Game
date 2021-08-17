const playerScore = document.querySelector("#playerScore")
const earthScore = document.querySelector("#earthScore")

let playerName = document.querySelector(".playerName")
function playerNameSelect(){
  var newPlayer =  prompt("What's your name?")
  console.log(newPlayer)
  playerName.innerHTML = newPlayer
}
playerNameSelect()

// while i for either players is <=3 (they need to win 3 out of 5) continue playing
// 
// player selects either fire, wind, or water

// when player selects fire, run computerTurn to have computer select an element; 
//      if computer selects water, #earthScore ++


function playerTurn() { // each time player selects a button
    while(i =0, i<=3, i++){ // while player hasn't won 3 out of 5 games 
        function selectFire() { //why is this function not declared?
            computerTurn()
            if(computerTurn === 1){
                console.log(playerScore +1) // connect back to playerScore so it goes up a point if won
            }
            


        }
    }
}
playerTurn()

function computerTurn() {
    if(Math.floor(Math.random()*3) === 1){
         //console.log("computer chose fire")
     }
     else if(Math.floor(Math.random()*3) === 2){
             //console.log("computer chose wind")
       }
       else{
           //console.log("computer chose water")
       }
 }
 //computerTurn() //put inside of playerTurn function to run each time player clicks a button
  


  