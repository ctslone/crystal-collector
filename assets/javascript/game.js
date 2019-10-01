// pseudocode
// page loads and displays HTML and CSS
// when the document finishes loading the HTML and CSS, load the JS
// Upon page laod, generate a winning number and assign random numbers to each of the 4 crystals. Winning number should be 19-120 and the numbers assigned to the crystals should be 1-12 (math.floor.random)
// display the winning number in the random winning number div but do not display the numbers assigned to the crystals
// create a variable to hold the users total of numbers. starts at 0
// assign click listeners to each of the 4 crystals and when a crystal is clicked, add the value of the crystal to the users total(counter)
// if the user total matches the winner number, add to wins
// else if the user total surpasses the winning number, add to losses
// when a win or loss occurs, reset the page without actually refreshing the HTMl and CSS.
// use a function that runs when a win or loss happens, the winning number resets and the crystal numbers reset.
// can probably combine into one or two function... if win happens, add to wins and reset the variables. if loss happens, add to losses and reset variables.

$(document).ready(function() {
// making sure document is ready for use
    console.log( "ready!" );
// declaring variables to be used in the game
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var winningNumber = 0;
        

// call a functions when the page loads to start a new game
newGame ();

// declaring a function that begins a new game. will be called when page loads
function newGame() {
    // reset counter
    counter = 0;
    // generating a new winning number
    winningNumber = Math.floor(Math.random()*102) + 19;
        console.log("The current winning number is: " + winningNumber);
    // using the DOM to display the winning number in the winningNum div
    $("#winningNum").text("Number to match: " + winningNumber)
    // using the DOM to change the wins/losses to 0
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    // using the DOM to reset the current score to 0
    $("#yourScoreText").html("Your current score is:");
    $("#yourScore").html(counter);
    // give each crystal a random value from 1-12
    // $("img").each(function () {
        // a random number between 1 and 12 is assigned to crystalNumber
        // var crystalNumber = Math.floor(Math.random()*12) + 1;
        // assigning a data atribute to the variable crystalNumber and logging the number assigned to each crystal
        // COME BACK TO THIS
        // $("img").attr("value", crystalNumber);
            // console.log($(this).attr("id"), crystalNumber);
        
    // });

    // assigning each crystal a number. the long way. need to get .each to work right. this is DRY

    $("#first-button").each(function () {
        var crystalNumber = Math.floor(Math.random()*12) + 1;
        $(this).attr("crystalValue", crystalNumber);
            console.log($(this).attr("id"), crystalNumber);
    });
    $("#second-button").each(function () {
        var crystalNumber = Math.floor(Math.random()*12) + 1;
        $(this).attr("crystalValue", crystalNumber);
            console.log($(this).attr("id"), crystalNumber);
            // console.log("You clicked on the " + $(this).attr("id")); 
    });
    $("#third-button").each(function () {
        var crystalNumber = Math.floor(Math.random()*12) + 1;
        $(this).attr("crystalValue", crystalNumber);
            console.log($(this).attr("id"), crystalNumber); 
    });
    $("#fourth-button").each(function () {
        var crystalNumber = Math.floor(Math.random()*12) + 1;
        $(this).attr("crystalValue", crystalNumber);
            console.log($(this).attr("id"), crystalNumber); 
    });
    
};

// creating on click listeners for each button and logging each click to console
$(".button").on("click", function() {
        console.log("You clicked on the " + $(this).attr("id"));
    // grabbing the stored value out of the crystalValue attribute (assigned to each button) of whichever button is clicked
    var crystalNumber = ($(this).attr("crystalValue"));
    // converting the HTML string to number for use in counter
    crystalNumber = parseInt(crystalNumber);
    // adding each clicked value to the current counter
    counter += crystalNumber;
    // displaying the newest value on the screen
    $("#yourScoreText").text("Your current score is: ");
    $("#yourScore").text(counter);
        console.log ("Current score is " + counter)
        // if the user losses, add to losses and then display the # of losses in the div. then run the newGame function
        if (counter === winningNumber) {
            wins++;
            $("#wins").text("Wins: " + wins)
                console.log("Current wins total" + wins)
            newGame();
        }
        // if the user wins, add to wins and then display the # of wins in the div. then run the newGame function
        if (counter > winningNumber) {
            losses++;
            $("#losses").text("Losses: " + losses)
                console.log("Current loss total" + losses)
            newGame();
        }
        // stop the function (dont think its really needed?)
        return;
        
});


});