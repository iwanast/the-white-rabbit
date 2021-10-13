//Navigation functions

function init() {
   createLandingPage();
}

function createLandingPage() {
  //Insert HTML into the main that creates the landing page
}

function openHighscorePage() {
    document.getElementById("content").innerHtml = "";

    document.getElementById("content").innerHTML += `
        <h1>Highscores</h1>
        <table>
            <tr>
                <th>Date</th>
                <th>Completion Time</th>
                <th>Average Reaction Speed</th>
            </tr>
            `;
            for (i = 0; i < 10; i++) {
                document.getElementById("content").innerHTML += `
                    <tr>
                        <td>TestDate</td>
                        <td>TestCompletion Time</td>
                        <td>TestAverage Reaction Speed</td>
                    </tr>
                    `;
            }
            document.getElementById("content").innerHTML += `
                </table>
                <button type="button" class="homeBtn" onclick"landingPage()">Home</button>
                `;

    //Clear main and insert html for the highscore page

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
