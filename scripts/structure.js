var diffCheck = 0;

//Navigation functions

let main = document.getElementById("main");
//Loading the landingpage
document.getElementById("bodyId").onload = function () {
  //setTimeout(createLandingPage, 3500);
  displaySummary();
};

//Inserts HTML into the main that creates the landing page
function createLandingPage() {
  main.innerHTML = `  
      <div id="wrapper_landingpage">
        <img id="gif_choose_score_play" src="./images/Start_game.gif" alt="reflection in sunglasses of two hands holding a blue and a red pill ">
        <img id="gif_choose_score_play_mobil" src="./images/Start_game.gif" alt="reflection in sunglasses of two hands holding a blue and a red pill ">
        <button class="button_landingpage" id="button_play">play</button>
        <button class="button_landingpage" id="button_score">score</button>
    </div>`;
}

// Starting the difficulty page to start the game
// document.getElementById("button_play").onclick = function() {      THESE RETURN AN ERROR
//     difficultyPage();
// }

// Starting highscorepage
// document.getElementById("button_score").onclick = function() {
//     openHighscorePage();
// }

function openHighscorePage() {
  main.innerHtml = "";
  let tableData = "";

  for (i = 0; i < 10; i++) {
    tableData += `
        <tr>
            <td class="table-rank">${i + 1}</td>
            <td class="table-date">Date</td>
            <td class="table-time">Time</td>
            <td class="table-react">React</td>
            <td class="table-difficulty">Difficulty</td>
        </tr>
        `;
  }

  main.innerHTML = `
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
        <button type="button" class="home-btn" onclick="createLandingPage()">Home</button>
      </section>
      `;
}

function retrieveHighscores() {
  //Will be called by the OpenHighscorePage function
  //Retrieve the first ten highscores for the user from the local storage
  //(scores should be stored ordered by lowest time to highest so retrieving first 10 will work)
  //Insert relevant data from those top ten into the page as it is loaded (date, time, average reaction time)
}

function difficultyPage() {
  var diffPage = `
    <div id="box">
    </div>
    <section id="content">
      <div id="contentBox">
        <h1> CLICK THE RABBIT AS FAST AS POSSIBLE</h1>
        <div id="levelBtns">
          <button>EASY</button>
          <button>MEDIUM</button>
          <button>HARD</button>
        </div>
        <embed src="images/tumblr_myo2hr97No1skltbdo1_500.gif"/>
      </div>
    </section>`;
  //clearing the html
  main.innerHTML = "";
  //adding the difficulty page html
  main.innerHTML = diffPage;
}

function launchGamePage() {
  //Clear the main and insert the HTML for the white rabbit game
}

function launchGamePage() {
  //Clear the main and insert the HTML for the white rabbit game
}

function displaySummary() {
  main.innerHTML = "";
  let finalTime = 45;
  displayCharacter(finalTime);
  main.innerHTML = `
    <div id="box">
    </div>
    <section id="content">
    <div id="score-card">
      <div id="score-quote">
        <p>
          I know what you are thinking, cause right now I'm thinking the same
          thing.<br />
          Actually, I've been thinking it ever since I got here: <br />
          WHY OH WHY DIDN'T I TAKE THE BLUE PILL?!?!
        </p>
      </div>
      <div id="score">
        <h2>SCORE:11001s</h2>
        <h1>${gifText}</h1>
      </div>
      <div>
        <embed src="${gifLink}"/></div>
      </div>
      <div id="play-again">
        <p>Would you like to play again?</p><br/>
        <button id="yes-button">YES!</button>
        <button id="no-button">NO</button>
      </div>
    </section>`;
  //Clear the main and insert the HTML for the summary screen
  //Retrieve the time for the last game from local storage
  //Will call calculateAverageReaction()
  //Will call displayCharacter()
}

function calculateAverageReaction() {
  //Will be called in the displaySummary function
  //Retrieve the ten reaction times saved into sessionStorage/a variable during the last game
  //Average the scores to give an average reaction time
}

const characters = []; //Fill this array with the Matrix chaaracters

var displayGif = [
  "./images/look-neo.gif",
  "./images/Agent Smith.gif",
  "./images/Trinity-3.gif",
  "./images/Morpheus.gif",
  "./images/cypher.gif",
];

var displayGifText = [
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
  //Will be called in the displaySummary function
  //Use an else if statement to check the game time against the thresholds we picked, then retrieve a picture from the characters array
}
