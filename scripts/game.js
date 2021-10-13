//Game functions
let rabbitAppearTime = []; //Empty array that we can fill with the times each rabbit appeared
let rabbitClickedTimes = []; //Empty array we can fill with the time each rabbit was clicked

let numRabbits = 0;
let rabbitPenalty = 0;
let misclickPenalty = 0;

function timerFunction () {
    //Hard one. Will need to save the time when the game is started into a variable
    //Then save the time when the game ends into a second variable
    //Then compare the difference between the variables
    //Then adjust for penalties
    //Then save the final time into the local storage
}

function rabbitAppear () {
    //Wait a random number of seconds between 2 and 5
    //Place a clickable image of a white rabbit in a random position on the page
    //Save the current time into the rabbitAppear array at position matching numRabbits - 1
    //Run a rabbitTimer()
}

function rabbitTimer () {
    //Wait a set amount of time (decided by difficulty variable)
    //Check if the rabbit is still present on the page (hasn't been clicked)
    //If the rabbit is still present, make it disappear and add one to rabbitPenalty counter
        //Add one to number of numRabbits counter
        //If numRabbits less than 10, run rabbitAppear
        //If numRabbits is equal to 10, save current time into a variable and run displaySummary();
}

function rabbitClicked () {
    //Make the rabbit disappear
    //Save the current time into the rabbitClicked array at position matching numRabbits - 1
    //Add one to number of numRabbits counter
    //If numRabbits less than 10, run rabbitAppear
    //If numRabbits is equal to 10, save current time into a variable and run displaySummary();
}
