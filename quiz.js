/* ========================================
   QUIZ.JS - Main Quiz Logic
   Handles question display, answer selection,
   navigation, and score calculation
   ======================================== */

// Quiz State Variables
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];
let userAnswers = [];

// DOM Elements
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');

/* ========================================
   INITIALIZE QUIZ
   ======================================== */
function initQuiz() {
    // Get 10 random questions
    quizQuestions = getRandomQuestions(10);
    
    // Initialize user answers array
    userAnswers = new Array(quizQuestions.length).fill(null);
    
    // Set total questions display
    totalQuestionsSpan.textContent = quizQuestions.length;
    
    // Display first question
    displayQuestion();
}

/* ========================================
   DISPLAY QUESTION
   ======================================== */
function displayQuestion() {
    // Get current question object
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Update question text
    questionElement.textContent = currentQuestion.question;
    
    // Update question counter
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    updateProgressBar();
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer buttons
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer;
        button.setAttribute('data-index', index);
        
        // If user already selected an answer for this question, show it
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        
        // Add click event listener
        button.addEventListener('click', selectAnswer);
        
        // Add to container
        answersContainer.appendChild(button);
    });
    
    // Update Next button text
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.textContent = 'Submit Quiz';
    } else {
        nextBtn.textContent = 'Next Question';
    }
    
    // Enable/disable next button based on whether answer is selected
    if (userAnswers[currentQuestionIndex] !== null) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}

/* ========================================
   SELECT ANSWER
   ======================================== */
function selectAnswer(e) {
    // Remove 'selected' class from all buttons
    const allButtons = answersContainer.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Add 'selected' class to clicked button
    e.target.classList.add('selected');
    
    // Store user's answer
    const selectedIndex = parseInt(e.target.getAttribute('data-index'));
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    // Enable next button
    nextBtn.disabled = false;
}

/* ========================================
   UPDATE PROGRESS BAR
   ======================================== */
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressBar.style.width = progress + '%';
}

/* ========================================
   NEXT QUESTION / SUBMIT QUIZ
   ======================================== */
function nextQuestion() {
    // Check if this is the last question
    if (currentQuestionIndex === quizQuestions.length - 1) {
        // Submit quiz and calculate score
        calculateScore();
        saveResultsToStorage();
        // Redirect to results page
        window.location.href = 'results.html';
    } else {
        // Move to next question
        currentQuestionIndex++;
        displayQuestion();
    }
}

/* ========================================
   CALCULATE SCORE
   ======================================== */
function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correctAnswer) {
            score++;
        }
    });
}

/* ========================================
   SAVE RESULTS TO LOCAL STORAGE
   ======================================== */
function saveResultsToStorage() {
    const results = {
        score: score,
        totalQuestions: quizQuestions.length,
        userAnswers: userAnswers,
        questions: quizQuestions
    };
    
    // Store in localStorage
    localStorage.setItem('quizResults', JSON.stringify(results));
}

/* ========================================
   EVENT LISTENERS
   ======================================== */
nextBtn.addEventListener('click', nextQuestion);

/* ========================================
   START QUIZ ON PAGE LOAD
   ======================================== */
window.addEventListener('DOMContentLoaded', initQuiz);