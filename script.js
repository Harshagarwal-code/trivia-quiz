// Example JavaScript for quiz functionality
$(document).ready(function() {
    // Sample quiz questions (can be fetched from an API or defined statically)
    var questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
      },
      {
        question: "Who wrote Hamlet?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Fitzgerald"],
        answer: "Shakespeare"
      },
      // Add more questions as needed
    ];
  
    var quizContainer = $("#quiz-container");
  
    // Function to display questions
    function displayQuestions() {
      quizContainer.empty();
      questions.forEach(function(question, index) {
        var questionHTML = `
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">Question ${index + 1}</h5>
              <p class="card-text">${question.question}</p>
              <div class="form-check">
                ${question.options.map(option => `
                  <input class="form-check-input" type="radio" name="question${index}" id="option${index}-${option}" value="${option}">
                  <label class="form-check-label" for="option${index}-${option}">
                    ${option}
                  </label><br>
                `).join('')}
              </div>
            </div>
          </div>
        `;
        quizContainer.append(questionHTML);
      });
    }
  
    // Function to calculate quiz result
    function calculateResult() {
      var score = 0;
      questions.forEach(function(question, index) {
        var selectedOption = $(`input[name=question${index}]:checked`).val();
        if (selectedOption === question.answer) {
          score++;
        }
      });
      var percentage = (score / questions.length) * 100;
      return percentage.toFixed(2);
    }
  
    // Display questions on page load
    displayQuestions();
  
    // Handle quiz submission
    $("#submit-btn").click(function() {
      var percentageScore = calculateResult();
      $("#result-body").html(`<p>Your score: ${percentageScore}%</p>`);
      $("#resultModal").modal('show');
    });
  });
  