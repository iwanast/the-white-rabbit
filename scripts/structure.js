//Navigation functions

window.addEventListener('load', (event) => {
  createLandingPage();
});

function createLandingPage() {
  //Insert HTML into the main that creates the landing page
}

function openHighscorePage() {
    document.getElementById("content").innerHtml = "";

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
          `
      }



    document.getElementById("content").innerHTML = `
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
                <button type="button" class="home-btn" onclick"landingPage()">Home</button>
                `

    //Will call retrieveHighscores()
}

function retrieveHighscores() {
  //Will be called by the OpenHighscorePage function
  //Retrieve the first ten highscores for the user from the local storage
  //(scores should be stored ordered by lowest time to highest so retrieving first 10 will work)
  //Insert relevant data from those top ten into the page as it is loaded (date, time, average reaction time)
}

function difficultyPage () {
    //Clear the main and insert the HTML for the difficulty page
    //Set difficulty and save it to session storage on click
    
    //Call launchGamePage()
}

function launchGamePage () {
    //Clear the main and insert the HTML for the white rabbit game
}

function displaySummary() {
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").innerHTML = `
    <div id="scoreQuote">
        <h4>
          I know what you are thinking, cause right now I'm thinking the same
          thing.<br />
          Actually, I've been thinking it ever since I got here: <br />
          WHY OH WHY DIDN'T I TAKE THE BLUE PILL?!?!
        </h4>
      </div>
      <div id="SCORE">
        <h2>SCORE:</h2>
        <h2>You are the Chosen One!</h2>
        <embed src="./Gifs/look-neo.gif" You are the Chosen One! />
      </div>`;
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

function displayCharacter() {
  //Will be called in the displaySummary function
  //Use an else if statement to check the game time against the thresholds we picked, then retrieve a picture from the characters array
}
