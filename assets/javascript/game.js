// set variables
var wins             = 0;
var losses           = 0;
var targetValue      = 0;
var yourScoreValue   = 0;
var greenGem         = 0;
var redGem           = 0;
var blueGem          = 0;
var purpleGem        = 0;

// jQuery otuput fields
var targetScore      = $('#target-score');
var currentScore     = $('#your-score');
var winScore         = $('#wins');
var lossScore        = $('#losses');

// jQuery get fields
var greenRupeeCard   = $('.card-rupee-green');
var redRupeeCard     = $('.card-rupee-red');
var blueRupeeCard    = $('.card-rupee-blue');
var purpleRupeeCard  = $('.card-rupee-purple');


// on document ready run resetGame
$(document).ready(resetGame);

// reset function
function resetGame(){
    // reset variables
    targetValue     = 0;
    yourScoreValue  = 0;
    greenGem        = 0;
    redGem          = 0;
    blueGem         = 0;
    purpleGem       = 0;
    setGemValues();

    // reset output
    currentScore.text("0")
}

// function to set the value to that gem
function setGemValues(){
    // green value will be even
    greenGem    = 2*(Math.floor(Math.random() * 6) + 1);
    // red value will be odd between 1 - 11
    redGem      = 2*(Math.floor(Math.random() * 6) + 1) - 1;
    // regular random values
    blueGem     = Math.floor(Math.random() * 12) + 1;
    purpleGem   = Math.floor(Math.random() * 12) + 1;
    targetValue = Math.floor(Math.random() * 102) + 19;
    targetScore.text(targetValue);
}

// On click functions for rupee cards
greenRupeeCard.on("click", function(){
    yourScoreValue += greenGem;
    console.log("green click",greenGem);
    currentScore.text(yourScoreValue);
    checkScore();
})
redRupeeCard.on("click", function(){
    yourScoreValue += redGem;
    console.log("red click",redGem);
    currentScore.text(yourScoreValue);
    checkScore();
})
blueRupeeCard.on("click", function(){
    yourScoreValue += blueGem;
    console.log("blue click",blueGem);
    currentScore.text(yourScoreValue);
    checkScore();
})
purpleRupeeCard.on("click", function(){
    yourScoreValue += purpleGem;
    console.log("purple click", purpleGem);
    currentScore.text(yourScoreValue);
    checkScore();
})

// compares current score to target score
function checkScore(){
    // if score equal target you win
    if(yourScoreValue === targetValue){
        // increase wins by 1
        wins++;
        // update wins to html
        winScore.text(wins);
        // alert you win
        alert("You Win!");
        // reset game
        resetGame();
    }
    // if score is greater than target you lose
    else if(yourScoreValue > targetValue){
        // increase losses
        losses++;
        // update losses score
        lossScore.text(losses);
        // alert loss
        alert("You Lose");
        // reset game
        resetGame();
    }
}