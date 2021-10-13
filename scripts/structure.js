//Navigation functions

function init() {
    createLandingPage();
}

function createLandingPage() {
    //Insert HTML into the main that creates the landing page
}

function openHighscorePage() {
    //Clear main and insert html for the highscore page

    //Will call retrieveHighscores()
}

function retrieveHighscores () {
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

function displaySummary () {
    //Clear the main and insert the HTML for the summary screen
    //Retrieve the time for the last game from local storage

    //Will call calculateAverageReaction()
    //Will call displayCharacter()
}

function calculateAverageReaction () {
    //Will be called in the displaySummary function
    //Retrieve the ten reaction times saved into sessionStorage/a variable during the last game
    //Average the scores to give an average reaction time
}

const characters = []; //Fill this array with the Matrix chaaracters

function displayCharacter () {
    //Will be called in the displaySummary function
    //Use an else if statement to check the game time against the thresholds we picked, then retrieve a picture from the characters array
}