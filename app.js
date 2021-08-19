// have to add this in order to have it start at 0
let playerScoreZero = 0 
let earthScoreZero = 0

// select from HTML so we can work on the JS with selected elements
const playerScore = document.querySelector("#playerScore")
const earthScore = document.querySelector("#earthScore")

const fireButton = document.querySelector("#fire")
const windButton = document.querySelector("#wind")
const waterButton = document.querySelector("#water")

// have player give us their name in order to start the game
let playerName = document.querySelector(".playerName") // make variable to grab player name
function playerNameSelect(){ // create a function for player to input their name 
  let newPlayer =  prompt("What's your name?") // create variable for prompt
  console.log(newPlayer)
  playerName.innerHTML = newPlayer // have whatever is input into the prompt show up in the playerName spot 
}
playerNameSelect()
// console.log(playerScore) //to check if it's working in the console

// Earth chooses elements in the background; set up function for the random choices Earth makes:
function computerTurn() {
    if(Math.floor(Math.random()*3) === 1){
         console.log("computer chose fire")
         return "fire"
     }
     else if(Math.floor(Math.random()*3) === 2){
        console.log("computer chose wind")
        return "wind"
       }
       else{
           console.log("computer chose water")
           return "water"
       }
 }
 

// function needed for when earth wins = earthScore++
function earthScores() {
    earthScoreZero++;
    console.log(earthScoreZero)
    earthScore.innerHTML = earthScoreZero
}

function playerScores(){
        playerScoreZero++;
        console.log(playerScoreZero)
        playerScore.innerHTML = playerScoreZero
}


function entireFunction() { // GOAL: once either score = 3 the person wins/ ends the loop
    //if(playerScoreZero <= 2 || earthScoreZero <= 2){ // while i for either players is <=3 (they need to win 3 out of 5), continue playing

        // player selects either fire
        fireButton.addEventListener("click", function(){

            // when player selects fire, run computerTurn to have computer select an element; 
            //      if computer selects water, #earthScore ++
            //      if computer selects wind, #playerScore ++
            //      else remains the same
           let computerChoice = computerTurn() // need to make computerTurn a variable to call upon the different options below
       
                if(computerChoice === "water") {
                console.log("Computer chose water & scores against fire")
                earthScores()
                }
                else if(computerChoice === "wind"){
                    console.log("Computer chose wind & loses against fire")
                    playerScores()
                }
        console.log("Player clicked fire");
        }
        )

        // player selects either wind
        windButton.addEventListener("click", function(){

            // when player selects wind, run computerTurn to have computer select an element; 
            //      if computer selects water, #playerScore ++
            //      if computer selects fire, #earthScore ++
            //      else remains the same
            let computerChoice = computerTurn()
       
            if(computerChoice === "fire") {
            console.log("Computer chose fire & scores against wind")
            earthScores()
            }
            else if(computerChoice === "water"){
                console.log("Computer chose water & loses against wind")
                playerScores()
            }
        console.log("Player clicked wind");
        }
        )

        // player selects either water
        waterButton.addEventListener("click", function(){

        // when player selects water, run computerTurn to have computer select an element; 
        //      if computer selects wind, #playerScore ++
        //      if computer selects fire, #earthScore ++
        //      else remains the same
            let computerChoice = computerTurn()
       
            if(computerChoice === "wind") {
            console.log("Computer chose fire & scores against water")
            earthScores()
            }
            else if(computerChoice === "fire"){
                console.log("Computer chose water & loses against water")
                playerScores()
            }
        console.log("Player clicked water");
        })
 }
entireFunction()



  
