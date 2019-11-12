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

    // Stop the timer and chck the answers
    stopTimer: function() {
        clearInterval();
        trivia.checkAnswers();
    },

    // Display results
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
        $("#end").show();
        $("questions").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct-answers").text("Correct answers (You Rock!): " + numCorrect);
        $("#incorrect-answers").text("Incorrect answers (Better luck rockin next time!): " + numIncorrect);
        $("#unanswered").text("Skipped questions (You don't seem much of a rocker!): " + numUnanswered);
    }
  }
//   Logic of looping through the questions and appending them
  var trivia = {
      displayQuestions: function() {
          var divCounter = $("#questions");
          var answerGroup = $("form-check");
          divContainer.append('<h2>Answer the following questions to test your Rock skills:</h2>');
          
      }

  }