//Navigation functions

let main = document.getElementById("main");
//Loading the landingpage

document.getElementById("bodyId").onload = function () {
  createLandingPage();
};

function createLandingPage() {
  main.innerHTML = `  
      <div id="wrapper_landingpage">
        <img id="gif_choose_score_play" src="./images/Start_game.gif" alt="reflection in sunglasses of two hands holding a blue and a red pill ">

        <button class="button_landingpage" id="button_play" onclick="difficultyPage()">play</button>
        <button class="button_landingpage" id="button_score" onclick="openHighscorePage()">score</button>
    </div>`; 
}

function openHighscorePage() {
  main.innerHtml = "";
  retrieveHighscores();
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
  //See first how many highscores are stored (lesser then 10, retrieve the ones who are there)
  //Retrieve the first ten highscores for the user from the local storage
  //(scores should be stored ordered by lowest time to highest so retrieving first 10 will work)
  //Insert relevant data from those top ten into the page as it is loaded (date, time, average reaction time)
}

function difficultyPage() {
    let diffPage = `
    <section id="content">
      <div id="contentBox">
        <h1> CLICK THE RABBIT AS FAST AS POSSIBLE</h1>
        <div id="levelBtns">
          <button type="button" onclick="setDifficulty('easy');">EASY</button>
          <button type="button" onclick="setDifficulty('medium');">MEDIUM</button>
          <button type="button" onclick="setDifficulty('hard');">HARD</button>
        </div>
        <embed src="images/tumblr_myo2hr97No1skltbdo1_500.gif"/>
      </div>
    </section>`;
  main.innerHTML = "";
  main.innerHTML = diffPage;
}

function launchGamePage () {
  main.innerHTML = `
  <div id="game-box">
  </div>
  `
  rabbitAppear(difficulty);
}

let reactionArray = [34, 75, 83, 56, 64, 56, 33, 44, 67, 66]; //Temporary placeholder array for testing calculateAverageReaction

function displaySummary() {
  displayCharacter(); //Needs to be completed  
  createGameObject(date, finalTime, avReactSpeed, difficulty);
  storeGameObject(gameObject);
  main.innerHTML = "";

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
        <button id="yes-button" onclick="difficultyPage()">YES!</button>
        <button id="no-button" onclick="createLandingPage()">NO</button>
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

function createGameObject(date, time, react, diff) {
  let gameObject = {
    date: date,
    time: time,
    react: react,
    diff: diff
  };
  return gameObject;
}

function storeGameObject(object) {
  //gameObject needs to be stringified and stored into local storage here
}




