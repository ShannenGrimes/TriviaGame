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
          var answerGroup = $(".form-check");
          divContainer.append('<h2>Answer the following questions to test your Rock skills:</h2>');

          for (var i = 0; i < questionTally.length; i++) {
              divContainer.append('<div id="question">' + questionTally[i].question + '</div>');
              var answer1 = questionTally[i].answers[0];
              var answer2 = questionTally[i].answers[1];
              var answer3 = questionTally[i].answers[2];
              divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
              divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
              divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
          }
        // Creating a button to close
          var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
          divContainer.append(doneButton);
          $("#done-button").on("click", game.stopTimer); 
      },
// Checking answers
      checkAnswers: function() {
          var correctAnswer;
          var userAnswer;
          var numCorrect = 0;
          var numbIncorrect = 0;
          var numUnanswered = 0;
          for (var i = 0; i < questionTally.length; i++) {
              correctAnswer = questionTally[i].correct;
              useranswer = $('input[id=radio'+i+']:checked + label').text();
              if (userAnswer === correctAnswer) {
                numCorrect++;
              } else if (userAnswer === "") {
                numUnanswered++;
              } else if (userAnswer !== correctAnswer) {
                {
                  numIncorrect++;
                }
          }
      }

    //   Logic to show the results after the game ends

          game.showEndPage(numCorrect,numbIncorrect,numUnanswered);  

      },
  }

    // Array of questions
  var questionTally = 
  [
      {
          question: " ",
          answers: [" "],
          correct: " "
      },
      {
        question: " ",
        answers: [" "],
        correct: " "
      },
      {
        question: " ",
        answers: [" "],
        correct: " "
      },
      {
        question: " ",
        answers: [" "],
        correct: " "
      },      
      {
        question: " ",
        answers: [" "],
        correct: " "
      },      
      {
        question: " ",
        answers: [" "],
        correct: " "
      },      
      {
        question: " ",
        answers: [" "],
        correct: " "
      },      
      {
        question: " ",
        answers: [" "],
        correct: " "
      },      
      {
        question: " ",
        answers: [" "],
        correct: " "
      },      
      {
        question: " ",
        answers: [" "],
        correct: " "
      }
  ]