//Game functions
let time1 = new Date(2021, 9, 13, 22, 10, 30, 100); console.log(time1);
let time2 = new Date(2021, 9, 13, 22, 10, 31, 200);
let time3 = new Date(2021, 9, 13, 22, 10, 31, 900);
let time4 = new Date(2021, 9, 13, 22, 10, 32, 700);

let rabbitAppearTime = [time1, time2, time3, time4]; //Empty array that we can fill with the times each rabbit appeared
let rabbitClickedTimes = [ , time3, , ]; //Empty array we can fill with the time each rabbit was clicked
let finalTime = 0;
let today = new Date();
let date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
let avReactSpeed = 0;
let difficulty = "easy";

// Sum of not clicked on the rabbit
let rabbitPenalty = 2;
// Sum of clicking wrong
let misclickPenalty = 1;

// let starttimeGamesession, endtimeGamesession;
timerFunction();
function timerFunction () {
    finalTime = 0;
    for(let i = 0; i < rabbitAppearTime.length; i++){
        if(rabbitClickedTimes[i] != null){
            finalTime += (rabbitClickedTimes[i].getTime() - rabbitAppearTime[i].getTime());
        }
    }
    //Depending on how much we want the penaltys to be depending on difficulty?*************************
    finalTime += (rabbitPenalty * penaltyNumber()); // example with "easy" 2000 milliseconds 
    finalTime += (misclickPenalty * penaltyNumber()); // should we set this different??
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
    if (difficulty == "easy"){
        return 2000; 
    }
    else if(difficulty == "medium"){
        return 1500;
    }
    else if(difficulty == "hard"){
        return 1000;
    }
}

function calculateAverageReaction(sum, divisor){
    console.log("sum: " + sum);
    console.log("divisor: " + divisor);
    average = sum / divisor; 
    console.log(average);
    let testObj = createGameObject(date, finalTime, average, difficulty);
    console.log(testObj)
return average; 
}

function setDifficulty (diff){
    difficulty = diff; 
}

function createGameObject(date, time, react, diff) {
    let gameObject = {
          date: date,
          time: time,
          react: react,
          diff: diff
        }
    storeGameObject(gameObject);
    return gameObject;
}
      
function storeGameObject(object) {
        //gameObject needs to be stringified and stored into local storage here
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
