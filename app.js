const playerScore = document.querySelector(".playerScore")
const earthScore = document.querySelector(".earthScore")

const fireButton = document.querySelector("#fire")
const windButton = document.querySelector("#wind")
const waterButton = document.querySelector("#water")

let playerName = document.querySelector(".playerName") // make variable to grab player name
function playerNameSelect(){ // create a function for player to input their name 
  let newPlayer =  prompt("What's your name?") // create variable for prompt
  console.log(newPlayer)
  playerName.innerHTML = newPlayer // have whatever is input into the prompt show up in the playerName spot 
}
playerNameSelect()

// while i for either players is <=3 (they need to win 3 out of 5), continue playing
// 
// player selects either fire, wind, or water

// when player selects fire, run computerTurn to have computer select an element; 
//      if computer selects water, #earthScore ++
//      if computer selects wind, #playerScore ++
//      else remains the same

// when player selects wind, run computerTurn to have computer select an element; 
//      if computer selects water, #playerScore ++
//      if computer selects fire, #earthScore ++
//      else remains the same

// when player selects water, run computerTurn to have computer select an element; 
//      if computer selects wind, #playerScore ++
//      if computer selects fire, #earthScore ++
//      else remains the same

// GOAL: once either score = 3 the person wins/ ends the loop

fireButton.addEventListener("click", function(){
    console.log("Player clicked fire");
})

windButton.addEventListener("click", function(){
    console.log("Player clicked wind");
})

waterButton.addEventListener("click", function(){
    console.log("Player clicked water");
})

// function playerTurn() { // each time player selects a button
//     while(i =0, i<=3, i++){ // while player hasn't won 3 out of 5 games 
//         function selectFire() { //why is this function not declared?
//             computerTurn()
//             if(computerTurn === 1){
//                 console.log(playerScore +1) // connect back to playerScore so it goes up a point if won
//             }
            


//         }
//     }
// }
// playerTurn()

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
 computerTurn() //put inside of playerTurn function to run each time player clicks a button
  
