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
        $("#correctAnswers").text("You Rock!  Here are the answers that were correct: " + numCorrect);
        $("#incorrectAnswers").text("Incorrect answers (Better luck rockin next time!): " + numIncorrect);
        $("#unanswered").text("Skipped questions (You don't seem much of a rocker!): " + numUnanswered);
    }
  }
//   Logic of looping through the questions and appending them
  var trivia = {
      displayQuestions: function() {
          var divContainer = $("#questions");
          var answerGroup = $(".form-check");
          divContainer.append('<h2>Answer the following questions to test your Rock skills:</h2>');

          for (var i = 0; i < questionTally.length; i++) {
              divContainer.append('<div id="questions">' + questionTally[i].questions + '</div>');
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
          var numIncorrect = 0;
          var numUnanswered = 0;
          for (var i = 0; i < questionTally.length; i++) {
              correctAnswer = questionTally[i].correct;
              userAnswer = $('input[id=radio'+i+']:checked + label').text();
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

          game.showEndPage(numCorrect,numIncorrect,numUnanswered);  

      },
  }

    // Array of questions
  var questionTally = 
  [
      {
          questions: "Bands Soundgarden, Alice In Chains and Pearl Jam are from what American city?",
          answers: ["Spokane","Seattle","Portland"],
          correct: "Seattle"
      },
      {
          questions: "Vocalist and guitarist Jimi Hendrix served in which unit military unit?",
          answers: ["101st Airborne Division", "7th Special Forces Group", "United States Army Band"],
          correct: "101st Airborne Division"
      },
      {
          questions: "Two of these groups are tied for 1st with 3 tours in the in the Top 20 of all time highest grossing tours. Which band only has 2 in the Top 20?",
          answers: ["Rollings Stones", "U2", "Bruce Springsteen and the E Street Band"],
          correct: "Bruce Springsteen and the E Street Band"
      },
      {
          questions: "In 2019, which festival changed it's name to Sonic Temple?",
          answers: ["Louder Than Life, Louisville, KY", "Rock on the Range, Columbus, OH", "Rock USA, Oshkosh, WI"],
          correct: "Rock on the Range, Columbus, OH"
      },      
      {
          questions: "Of the top 3 albums of all time worldwide in certified sales, which is the highest?",
          answers: ["Thriller, Michael Jackson", "Eagles: Their Greatest Hits 1971-1975", "Hotel California, Eagles"],
          correct: "Thriller, Michael Jackson"
      },      
      {
          questions: "Dave Grohl had a designed a throne to play from after breaking his leg when he fell off a stage while performing. Who did he let use his throne for concerts after suffering a foot injury?",
          answers: ["Axl Rose", "Chester Bennington", "James Hatfield"],
          correct: "Axl Rose"
      },      
      {
          questions: "Who has not been a lead singer for Black Sabbath?",
          answers: ["Ozzy Osborne", "Ronnie James Dio", "Tommy Lommi"],
          correct: "Tommy Lommi"
      },      
      {
          question: "Paul McCartney traded his what to get his first guitar?",
          answers: ["Piano", "Trumpet", "violin"],
          correct: "Trumpet"
      },      
      {
          questions: "What band's previous names was The Tea Set and The Abdabs?",
          answers: ["Cream", "The Who", "Pink Floyd"],
          correct: "Pink Floyd"
      },      
      {
          questions: "Guitarists Angus and Malcolm Young of the Australian band AC/DC were born where?",
          answers: ["New Zealand", "Scotland", "Wales"],
          correct: "Scotland"
      }
  ]