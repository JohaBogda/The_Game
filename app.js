// have to add this in order to have it start at 0
let playerScoreZero = 0 
let earthScoreZero = 0

// select from HTML so we can work on the JS with selected elements
const playerScore = document.querySelector("#playerScore")
const earthScore = document.querySelector("#earthScore")

// select buttons
const fireButton = document.querySelector("#fire")
const windButton = document.querySelector("#wind")
const waterButton = document.querySelector("#water")

// select modal for instructions
const open = document.getElementById("open")
const modal_container = document.getElementById("modal_container")
const close = document.getElementById("close")

// modal for winning/losing
let modal = document.querySelector(".modal-bg")
let winnerOfGame = document.querySelector("#winner")
const restartButton = document.querySelector(".restart-button")


// have player gives their name in order to start the game
let playerName = document.querySelector(".playerName") // make variable to grab player name
function playerNameSelect(){ // create a function for player to input their name 
  let newPlayer =  prompt("What's your name?") // create variable for prompt
  console.log(newPlayer)
  playerName.innerHTML = newPlayer // have whatever is input into the prompt show up in the playerName spot 
}
playerNameSelect()


// Create modal for instructions: 
open.addEventListener("click", () => {
    modal_container.classList.add("show"); // this adds a class to show the modal; class needs to be added in CSS
});

close.addEventListener("click", () => {
    modal_container.classList.remove("show"); // this adds a class to hide the modal; class needs to be added in CSS
});


// Earth aka the computer chooses elements in the background; set up function for the random choices Earth makes:
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
 
 // modal for winning
function endgame(winner) {
    if(winner == 1){
        winnerOfGame.innerHTML = "Player won!"
    } else{
        winnerOfGame.innerHTML = "Earth won!"
    }
    modal.classList.add("bg-active")
}

// function for restart button
restartButton.addEventListener("click", reset)
    function reset(){
    window.location.reload()
}

// when Earth/computer scores:
function earthScores() {
    earthScoreZero++;
    console.log(earthScoreZero)
    earthScore.innerHTML = earthScoreZero
    if(earthScoreZero == 3){
        endgame(2)
    }
}

// when Player scores:
function playerScores(){
        playerScoreZero++;
        console.log(playerScoreZero)
        playerScore.innerHTML = playerScoreZero
        if(playerScoreZero == 3){
            endgame(1)
        } 
}

// Function for playing the game: player clicks on button, computer choice runs in the background & determines who wins
function entireFunction() { 

        // player selects fire
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

        // player selects wind
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

        // player selects water
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



// attempts made in order to end game: 
// 1. in entireFunction create "while score is under 3, continue" else if player reaches 3 alert/modal they won or vv
// 2. function run separately if player or computer scores = 3, alert or modal pops up  
// 3. use modal to stop the game
// 4. idea of function to be incorporated: 
// function win(){
//     if(earthScoreZero = 3){
//         alert "Earth won!"
//     } else if(playerScoreZero = 3){
//         alert "player won!"
//     }
// }
// win()