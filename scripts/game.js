//Game functions
let time1 = new Date(2021, 9, 13, 22, 10, 30, 100);
let time2 = new Date(2021, 9, 13, 22, 10, 31, 200);
let time3 = new Date(2021, 9, 13, 22, 10, 31, 900);
let time4 = new Date(2021, 9, 13, 22, 10, 32, 700);

//If there is nothing in local storage, create the gamesArray, strignify it, and save it to local
function checkLocalDataExists (){
    if (localStorage.length == 0) {
        let gamesArray = [];
    
        localStorage.setItem("GameArray", JSON.stringify(gamesArray));
    }
}

let rabbitAppearTime = [time1, time2, time3, time4]; //Empty array that we can fill with the times each rabbit appeared
let rabbitClickedTimes = []; //Empty array we can fill with the time each rabbit was clicked
let today = new Date();
let date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
let finalTime = 0;
let avReactSpeed = 0;
let difficulty = "Easy";

// Sum of not clicked on the rabbit
let rabbitPenalty = 8;
// Sum of clicking wrong
let misclickPenalty = 0;
//Keep track of number of rabbits
let numRabbits = 0;

function clickPlayButton () {
    misclickPenalty = 0;
    rabbitAppear();
}

function misclickPenaltyCounter() {
    misclickPenalty++;
}

// let starttimeGamesession, endtimeGamesession;
// timerFunction();
function timerFunction () {
    finalTime = 0;
    for(let i = 0; i < rabbitAppearTime.length; i++){
        if(rabbitClickedTimes[i] != null){
            finalTime += (rabbitClickedTimes[i].getTime() - rabbitAppearTime[i].getTime());
        }
    }
    //Depending on how much we want the penaltys to be depending on difficulty?*************************
    finalTime += (rabbitPenalty * 4000); 
    finalTime += (misclickPenalty * 1000);
    calculateAverageReaction(finalTime, (rabbitAppearTime.length - rabbitPenalty));
    // clearing the arrays here for next time 
    rabbitAppearTime = [];
    rabbitClickedTimes = [];
    
    return finalTime;
    // Will need to save the time when the game is started into a variable
    //Then save the time when the game ends into a second variable
    //Then compare the difference between the variables
    //Then adjust for penalties
    //Then save the final time into the local storage by a new function (Ben working on)
}

function penaltyNumber(){
    if (difficulty == "Easy"){
        return 2000; 
    }
    else if(difficulty == "Medium"){
        return 1500;
    }
    else if(difficulty == "Hard"){
        return 1000;
    }
}

function calculateAverageReaction(sum, divisor){
    average = sum / divisor; 
    return average; 
} 

function setDifficulty (diff){
    difficulty = diff; 
    launchGamePage();
}

function createGameObject(date, time, react, diff) {
    //Retrieve the GameArray from local storage
    let scoreArray = JSON.parse(localStorage.getItem("GameArray"));

    //Create an object for this game session
    let gameObject = {
        date: date,
        time: time,
        react: react,
        diff: diff
    }

    scoreArray.push(gameObject); //Insert the new game into the retrieved array of games

    sortedScoreArray = sortByKey(scoreArray, 'time'); //Sort the game array by time property of each game
    
    localStorage.removeItem("GameArray"); //Clear existing game array

    localStorage.setItem("GameArray", JSON.stringify(sortedScoreArray)); //Insert the updated, sorted game array into local storage
  } 
  
  //Sort an array based on a single property
  function sortByKey(array, key) {
    return array.sort(function(a, b) {
        let x = a[key]; 
        let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

function rabbitAppear () {
    //Wait a random number of seconds between 2 and 5
    //Place a clickable image of a white rabbit in a random position on the page
    //Save the current time into the rabbitAppear array at position matching numRabbits - 1
    //Run a rabbitTimer()
    //Add one to number of numRabbits counter
}

function rabbitTimer () {
    //Wait a set amount of time (decided by difficulty variable)
    //Check if the rabbit is still present on the page (hasn't been clicked)
    //If the rabbit is still present, make it disappear and add one to rabbitPenalty counter

        //If numRabbits less than 10, run rabbitAppear
        //If numRabbits is equal to 10, save current time into a variable and run displaySummary();
}

function rabbitClicked () {
    //Make the current rabbit disappear
    document.getElementById("game-page").innerHTML = "";

    //Insert time rabbit was clicked into the array of click times at position matching current rabbit count
    rabbitClickedTimes[numRabbits - 1] = Date.now();

    // Add one to rabbit counter
    numRabbits++;

    //Check if 10 rabbits have appeared. If not, spawn next rabbit. If so, end game and show summary
    if (numRabbits < 10) {
        rabbitAppear();
    } else if (numRabbits = 10) {
        displaySummary()
    }
}
