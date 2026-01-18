/* ========================================
   RESULTS.JS - Display Quiz Results
   Loads results from localStorage and displays
   score, percentage, and answer review
   ======================================== */

// DOM Elements
const scoreDisplay = document.getElementById('score-display');
const percentageDisplay = document.getElementById('percentage');
const messageDisplay = document.getElementById('message');
const reviewContainer = document.getElementById('review-container');

/* ========================================
   LOAD AND DISPLAY RESULTS
   ======================================== */
function displayResults() {
    // Get results from localStorage
    const resultsData = localStorage.getItem('quizResults');
    
    // If no results found, redirect to home
    if (!resultsData) {
        window.location.href = 'index.html';
        return;
    }
    
    // Parse results
    const results = JSON.parse(resultsData);
    const { score, totalQuestions, userAnswers, questions } = results;
    
    // Calculate percentage
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Display score
    scoreDisplay.textContent = `${score}/${totalQuestions}`;
    percentageDisplay.textContent = `${percentage}%`;
    
    // Display personalized message
    displayMessage(percentage);
    
    // Display answer review
    displayAnswerReview(questions, userAnswers);
}

/* ========================================
   DISPLAY PERSONALIZED MESSAGE
   ======================================== */
function displayMessage(percentage) {
    let message = '';
    let messageClass = '';
    
    if (percentage >= 90) {
        message = '🎉 Outstanding! You\'re a true 90\'s house music expert! The Godfather would be proud!';
        messageClass = 'excellent';
    } else if (percentage >= 70) {
        message = '🎵 Great job! You really know your 90\'s house classics! Time to hit the dancefloor!';
        messageClass = 'good';
    } else if (percentage >= 50) {
        message = '🎧 Not bad! You\'ve got some solid knowledge. Keep spinning those records!';
        messageClass = 'okay';
    } else {
        message = '💿 Keep learning! The golden era of house music has so much to discover. Try again!';
        messageClass = 'needs-work';
    }
    
    messageDisplay.textContent = message;
    messageDisplay.className = 'message ' + messageClass;
}

/* ========================================
   DISPLAY ANSWER REVIEW
   ======================================== */
function displayAnswerReview(questions, userAnswers) {
    // Clear container
    reviewContainer.innerHTML = '';
    
    // Loop through each question
    questions.forEach((question, index) => {
        // Create review item
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        
        // Question number and text
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Question ${index + 1}: ${question.question}`;
        reviewItem.appendChild(questionTitle);
        
        // User's answer
        const userAnswerIndex = userAnswers[index];
        const userAnswerText = question.answers[userAnswerIndex];
        const isCorrect = userAnswerIndex === question.correctAnswer;
        
        const userAnswerPara = document.createElement('p');
        userAnswerPara.innerHTML = `<strong>Your Answer:</strong> <span class="user-answer ${isCorrect ? 'correct' : 'incorrect'}">${userAnswerText}</span>`;
        reviewItem.appendChild(userAnswerPara);
        
        // Correct answer (if user got it wrong)
        if (!isCorrect) {
            const correctAnswerText = question.answers[question.correctAnswer];
            const correctAnswerPara = document.createElement('p');
            correctAnswerPara.innerHTML = `<strong>Correct Answer:</strong> <span class="user-answer correct">${correctAnswerText}</span>`;
            reviewItem.appendChild(correctAnswerPara);
        }
        
        // Result indicator
        const resultPara = document.createElement('p');
        resultPara.innerHTML = `<strong>Result:</strong> ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}`;
        reviewItem.appendChild(resultPara);
        
        // Explanation
        const explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation');
        explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
        reviewItem.appendChild(explanationDiv);
        
        // Add to container
        reviewContainer.appendChild(reviewItem);
    });
}

/* ========================================
   INITIALIZE ON PAGE LOAD
   ======================================== */
window.addEventListener('DOMContentLoaded', displayResults);