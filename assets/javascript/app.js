$(document).ready(function(){
    // Start game
    $("#startBtn").on("click", game.startTimer);


  });

  var game = {
      
    // Start timer
    timeRemaining : 60,
    startTimer: function() {
        $("#timer").text("Time remaining: " + game.timeRemaining);
        setInterval(game.countdown, 1000);
        $("#start-page").hide();
        trivia.displayQuestions();

    },
    // Decrement timer
    countdown: function() {
        game.timeRemaining--;
        $("#timer").text("Time remaining: " + game.timeRemaining);
        if (game.timeRemaining ===0) {
            game.stopTimer();
            $("#timer").empty();
        }
    },

        

  }