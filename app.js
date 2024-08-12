let randomNumber; ////variable to hold the random number
let attempts;     //// variable to count the number of attempts



/// function to start the game 

const startGame = () => {
    randomNumber = Math.floor(Math.random() * 10) + 1; // generate a random number between 1 and 10 (BOM)
    attempts = 0;    //reset attempts counter
    document.getElementById("message").textContent = "Try to guess the number!"  //DOM display a message to the user
    getGuess();      // call the function to get the users guess
}



/// function to prompt the user for a guess   

const getGuess = () => {
    setTimeout(() => {   //use setTimeout to avoid blocking the webpage (BOM)
       const userGuess = window.prompt("Enter your guess (1-10):")   // BOM prompt the user for a guess  
       if (userGuess !== null) {  // check if the user pressed Cnacel
        attempts++;   // increment the attempts counter
        checkGuess(Number(userGuess));       // convert the input to a number and check it
       }   
    }, 1000) /// display the prompt by 1000 milliseconds (1 secont)
};





////// function to check the user's guess

const checkGuess = (guess) => {
    const messageDiv = document.getElementById("message");       // dom : GET THE MESSAGE DISPLAY AREA
    if (guess === randomNumber) { // check if the guess is too low
        messageDiv.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts !`; //disp a cong message

    } else if (guess < randomNumber) {// Check if the guess is too low 
        messageDiv.textContent = "Too low! Try again."
        getGuess();
    } else {  //The guess must be too high
        messageDiv.textContent = "Too high! Try again.";
        getGuess();  /// ask for another guess

    }
};


document.getElementById("startGame").addEventListener("click", startGame); 