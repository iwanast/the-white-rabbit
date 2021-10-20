// General variable
let main = document.getElementById("main");

/////////////////////////////////////GAME/////////////////////////////////////

//Declare game variables/arrays
let rabbitAppearTime = [];          //Array for the times each rabbit appeared
let rabbitClickedTimes = [];        //Array for the times each rabbit was clicked
let today = new Date(); 
let date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear(); // Date of today styled
let finalTime = 0;                  // highscore final time
let avReactSpeed = 0;               // average reaction time for clicked rabbits
let difficulty = "Easy";            // difficulty setting
let clicked = false;                // bolean for clicked rabbit true or false
let rabbitPenalty = 0;              // Sum of not clicked  rabbits
let misclickPenalty = 0;            // Sum of wrong clicks 
let numRabbits = 0;                 //Number of already uppeared rabbits

function clickPlayButton() {
  resetVariables();
  rabbitAppear();
}

//Reset all the global variables
function resetVariables() {
  finalTime = 0;
  avReactSpeed = 0;
  clicked = false;
  rabbitAppearTime = [];
  rabbitClickedTimes = [];
  rabbitPenalty = 0;
  misclickPenalty = 0;
  numRabbits = 0;
}

function rabbitAppear() {
  clicked = false;                            // reset the bolean clicked rabbit to false 
  // Calculating the position of the rabbit randomly
  var bodyWidth = document.getElementById("main").clientWidth;
  var bodyHeight = document.getElementById("main").clientHeight;
  var randPosX = Math.floor(Math.random() * (bodyWidth - 100 - 100 + 1)) + 100;
  var randPosY = Math.floor(Math.random() * (bodyHeight - 100 - 100 + 1)) + 100;

  rabbitStructur(randPosX, randPosY);         // calling the function to insert the html for the rabbit 
  rabbitAppearTime[numRabbits] = Date.now();  // saves the current time into the rabbitAppear array at position matching numRabbits
  rabbitTimer();                              // Calls the rabbit timer 
  numRabbits++;                               // increases the number of rabbits appeared on screen
}

function misclickPenaltyCounter() {
  misclickPenalty++;
}

// let starttimeGamesession, endtimeGamesession;
// timerFunction();
function timerFunction() {
  finalTime = 0;
  for (let i = 0; i < rabbitAppearTime.length; i++) {
    if (rabbitClickedTimes[i] != null) {
      finalTime += rabbitClickedTimes[i] - rabbitAppearTime[i];
    }
  }
  //Depending on how much we want the penaltys to be depending on difficulty?*************************
  finalTime += rabbitPenalty * 4000;
  finalTime += misclickPenalty * 1000;
  avReactSpeed =
    calculateAverageReaction(
      finalTime,
      rabbitAppearTime.length - rabbitPenalty
    ) / 1000;

  finalTime = finalTime / 1000;
  finalTime = finalTime.toFixed(2);
  avReactSpeed = avReactSpeed.toFixed(2);
  // clearing the arrays here for next time
  return finalTime;
  // Will need to save the time when the game is started into a variable
  //Then save the time when the game ends into a second variable
  //Then compare the difference between the variables
  //Then adjust for penalties
  //Then save the final time into the local storage by a new function (Ben working on)
}

function penaltyNumber() {
  if (difficulty == "Easy") {
    return 2000;
  } else if (difficulty == "Medium") {
    return 1500;
  } else if (difficulty == "Hard") {
    return 1000;
  }
}

function calculateAverageReaction(sum, divisor) {
  average = sum / divisor;
  return average;
}

function setDifficulty(diff) {
  difficulty = diff;
  launchGamePage();
}


let endTimeAppearanceRabbit = 0;

function rabbitTimer() {
  setTimeout(function () {
    rabbitTimerThird();
  }, timeAfterDifficulties()); // timeAfterDifficulties()
}

function timeAfterDifficulties() {
  if (difficulty == "Easy") {
    return 3000;
  } else if (difficulty == "Medium") {
    return 2000;
  } else {
    return 1000;
  }
}

function rabbitTimerThird() {
  // calling the function rabbitAppear randomly between and with 2000 until 5000 milliseconds
  if (clicked == true && numRabbits < 10) {
    setTimeout(function () {
      rabbitAppear();
    }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000); 
  // calling the displaySummary page and the function to calculate the results
  } else if (clicked == true && numRabbits == 10) {
    timerFunction();
    displaySummary();
  /* if the time is out and the user has not clicked on the rabbit yet and game is still on 
     taking the rabbit from the site, giving rabbitPenalty and 
     calling the function rabbitAppear randomly between and with 2000 until 5000 milliseconds*/
  } else if (numRabbits < 10) {
    main.innerHTML = "";
    rabbitPenalty += 1;
    setTimeout(function () {
      rabbitAppear();
    }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);
  /* if the time is out and the user has not clicked on the rabbit yet and game should end 
     taking the rabbit from the site, giving rabbitPenalty and 
     calling the function who displays summary page*/
  } else {
    main.innerHTML = "";
    rabbitPenalty += 1;
    timerFunction();
    displaySummary();
  }
}

function rabbitClicked() {
  clicked = true;
  main.innerHTML = "";

  //Insert time rabbit was clicked into the array of click times at position matching current rabbit count
  rabbitClickedTimes[numRabbits - 1] = Date.now();

  // Add one to rabbit counter
  // numRabbits++;
}

function rabbitStructur(randPosX, randPosY) {
  console.log("function rabbitStructur appears");
  console.log(randPosX + "  " + randPosY);
  main.innerHTML = `
                  <div id="game-page" onclick="misclickPenaltyCounter()">
                      <img onclick="rabbitClicked()" style="left:${randPosX}px; top:${randPosY}px" src="./images/rabbitpic.png" alt="Rabbit">
                  </div>`;

  console.log(main.innerHTML);
}


///////////////////////////////////////////LOCAL STORAGE////////////////////////////////////////////

//If the local storage is empty, create the gamesArray, strignify it, and save it to local
function checkLocalDataExists() {
  if (localStorage.length == 0) {
    let gamesArray = [];

    localStorage.setItem("GameArray", JSON.stringify(gamesArray));
  }
}

function createGameObject(date, time, react, diff) {
  let scoreArray = JSON.parse(localStorage.getItem("GameArray")); //Retrieve the GameArray from local storage

  //Create an object for this game session
  let gameObject = {
      date: date,
      time: time,
      react: react,
      diff: diff
  }
  scoreArray.push(gameObject); //Insert the new game into the retrieved array of games
  sortedScoreArray = sortByKey(scoreArray, 'time'); //Sort the game array by time property of each game
  localStorage.removeItem("GameArray"); //Remove existing game array
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



///////////////////////////////////////////LANDING PAGE////////////////////////////////////////////

//Loading the landingpage

document.getElementById("bodyId").onload = function () {
  createLandingPage();
};

function createLandingPage() {
  checkLocalDataExists();
  main.innerHTML = `
  <div class = "card">
      <img id= "logo" onclick="createLandingPage()" src="./images/rabbitpic.png" alt="white-rabbit icon">
      <img id= "logo-back" onclick="createLandingPage()" src="./images/ce2c8850dec0b2027695c3e56bc25708-removebg-preview (1).png" alt="white-rabbit icon">
      </div>  
      <div id="wrapper_landingpage">
        <img id="gif_choose_score_play" src="./images/Start_game.gif" alt="reflection in sunglasses of two hands holding a blue and a red pill ">

        <button class="button_landingpage" id="button_play" onclick="difficultyPage()">play</button>
        <button class="button_landingpage" id="button_score" onclick="openHighscorePage()">score</button>
    </div>`;
};


///////////////////////////////////////////HIGHSCORE PAGE////////////////////////////////////////////

//Declare arrays for inserting high score data
let gameDates = [];
let gameTimes = [];
let gameReacts = [];
let gameDiffs = [];

function retrieveHighscores() {
  checkLocalDataExists ()
  let scoreArray = JSON.parse(localStorage.getItem("GameArray"));

  for (i = 0; i < 10; i++){
    if (scoreArray[i]) {
      gameDates[i] = scoreArray[i].date;
      gameTimes[i] = scoreArray[i].time + "s";
      if (scoreArray[i].react == Infinity) {
        gameReacts[i] = "-";
      } else {
        gameReacts[i] = scoreArray[i].react + "ms";
      }
      gameDiffs[i] = scoreArray[i].diff;
    } else {
      gameDates[i] = "-";
      gameTimes[i] = "-";
      gameReacts[i] = "-";
      gameDiffs[i] = "-";
    }
  }
}

function openHighscorePage() {
  retrieveHighscores();
  let tableData = "";

  for (i = 0; i < 10; i++) {
    tableData += `
        <tr>
            <td class="table-rank">${i + 1}</td>
            <td class="table-date">${gameDates[i]}</td>
            <td class="table-time">${gameTimes[i]}</td>
            <td class="table-react">${gameReacts[i]}</td>
            <td class="table-difficulty">${gameDiffs[i]}</td>
        </tr>
        `;
  }

  main.innerHTML = `
  <div class = "card">
  <img id= "logo" onclick="createLandingPage()" src="./images/rabbitpic.png" alt="white-rabbit icon">
  <img id= "logo-back" onclick="createLandingPage()" src="./images/ce2c8850dec0b2027695c3e56bc25708-removebg-preview (1).png" alt="white-rabbit icon">
  </div>
      <div id="box">
      </div>
      <section id="content"> 
      <h1>Highscores</h1>
        <table>
          <th class="table-rank table-header">Rank</th>
          <th class="table-date table-header">Date</th>
          <th class="table-time table-header">Time</th>
          <th class="table-react table-header">Average Speed</th>
          <th class="table-difficulty table-header">Difficulty</th>
          </tr>
          ${tableData}
        </table>
        <div id="highscore-btns">
          <button type="button" onclick="createLandingPage()">Home</button>
          <button type="button" onclick="clearHighscores()">Reset Highscores</button>
        </div>
      </section>
      `;
}

function clearHighscores() {
  let prompt = confirm("Are you sure you want to clear your highscores?");
  if (prompt == true) {
    localStorage.clear();
    openHighscorePage();
  } else {
    openHighscorePage();
  }
}


///////////////////////////////////////////DIFFICULTY PAGE////////////////////////////////////////////

function difficultyPage() {
  let diffPage = `
  <div class = "card">
      <img id= "logo" onclick="createLandingPage()" src="./images/rabbitpic.png" alt="white-rabbit icon">
      <img id= "logo-back" onclick="createLandingPage()" src="./images/ce2c8850dec0b2027695c3e56bc25708-removebg-preview (1).png" alt="white-rabbit icon">
      </div>
    <section id="content">
      <div id="contentBox">
        <h1> CLICK THE RABBIT AS FAST AS POSSIBLE</h1>
        <h3>Be careful - missing a rabbit or clicking in empty space will both increase your final time!</h3>
        <div id="levelBtns">
          <button type="button" onclick="setDifficulty('Easy');">EASY</button>
          <button type="button" onclick="setDifficulty('Medium');">MEDIUM</button>
          <button type="button" onclick="setDifficulty('Hard');">HARD</button>
        </div>
        <embed src="images/tumblr_myo2hr97No1skltbdo1_500.gif"/>
      </div>
    </section>`;
  main.innerHTML = "";
  main.innerHTML = diffPage;
}

function launchGamePage() {
  var gamePage = `
  <div id="game-page" onclick="misclickPenaltyCounter()">
    <button onclick="clickPlayButton()">PLAY</button>
    <div id="rand_pos" class="rand"></div>
  </div>
  `;
  //clearing the html
  main.innerHTML = "";
  //adding the game page html
  main.innerHTML = gamePage;
}

let reactionArray = [34, 75, 83, 56, 64, 56, 33, 44, 67, 66]; //Temporary placeholder array for testing calculateAverageReaction


///////////////////////////////////////////SUMMARY PAGE////////////////////////////////////////////

function displaySummary() {
  displayCharacter(finalTime);
  createGameObject(date, finalTime, avReactSpeed, difficulty);
  let missedRabbitText = "";
  let misclickText = "";
  let avReactText = "";

  //Format strings based on penalty numbers
  if (rabbitPenalty == 0) {
    missedRabbitText = "didn't miss any rabbits and";
  } else if (rabbitPenalty == 1) {
    missedRabbitText = "missed " + rabbitPenalty + " rabbit and";
  } else {
    missedRabbitText = "missed " + rabbitPenalty + " rabbits and";
  }

  if (misclickPenalty == 0) {
    misclickText = "didn't misclick at all!"
  } else if (misclickPenalty == 1) {
    misclickText = "misclicked " + misclickPenalty + " time!"
  } else {
    misclickText = "misclicked " + misclickPenalty + " times!"
  }

  if (avReactSpeed = Infinity) {
    avReactText = "You didn't click any!"
  } else {
    avReactText = avReactSpeed + "s";
  }

  main.innerHTML = `
  <div class = "card">
      <img id= "logo" onclick="createLandingPage()" src="./images/rabbitpic.png" alt="white-rabbit icon">
      <img id= "logo-back" onclick="createLandingPage()" src="./images/ce2c8850dec0b2027695c3e56bc25708-removebg-preview (1).png" alt="white-rabbit icon">
      </div>
    <div id="box">
    </div>
    <section id="content">
    <div id="score-card">
      <div id="score">
        <h1>${gifText}</h1>
        <h2>Total Time: ${finalTime}s</h2>
        <h3>Average Reaction Time: ${avReactText}</h3>
        <h3>You ${missedRabbitText} ${misclickText}</h3>
      </div>
      <div>
        <embed src="${gifLink}"/></div>
      </div>
      <div id="play-again">
        <p>Would you like to play again?</p><br/>
        <button id="yes-button" onclick="difficultyPage()">YES!</button>
        <button id="no-button" onclick="createLandingPage()">NO!</button>
        <button id="highscores" onclick="openHighscorePage()">Highscores</button>
      </div>
    </section>`;
}

let displayGif = [
  "./images/look-neo.gif",
  "./images/Agent Smith.gif",
  "./images/Trinity-3.gif",
  "./images/Morpheus.gif",
  "./images/cypher.gif",
];

let displayGifText = [
  "You are the Chosen One!",
  "You're bad! But your score isn't!",
  "Holy F**king Trinity",
  "Morpheus? More like Morphe-yes!",
  "Um, you suck!",
];

function displayCharacter(finalTime) {
  if (finalTime < 20) {
    gifLink = displayGif[0];
    gifText = displayGifText[0];
  } else if (finalTime < 30) {
    gifLink = displayGif[1];
    gifText = displayGifText[1];
  } else if (finalTime < 40) {
    gifLink = displayGif[2];
    gifText = displayGifText[2];
  } else if (finalTime < 40) {
    gifLink = displayGif[3];
    gifText = displayGifText[3];
  } else {
    gifLink = displayGif[4];
    gifText = displayGifText[4];
  }
}