function playerTurn() {
    console.log('hey we clicked a button with a value X')
    // do logic here, save value in a variable
    
    // make sure you call this at the end after all your playerTurn logic
    computerTurn()
  }
  
  function computerTurn() {
    //logic to make computer do something randomly
    console.log('hey i chose something randomly')
  }
  
  // when we click a button for player to choose thier value, we would call the F playerTurn
  playerTurn()