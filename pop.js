const questions = [
   {
    question: "Quel est le film le plus rentable de tous les temps, ajusté pour l'inflation ?",
    options: ["Avatar", "Avengers: Endgame", "Autant en emporte le vent", "Titanic"],
    correct: 2,
    anecdote: "Bien qu’il ait été dépassé par Avatar en termes de recettes brutes, Autant en emporte le vent reste le plus rentable si l’on ajuste les recettes à l’inflation."
},
{
    question: "Quel film a introduit le personnage de Thanos dans l'univers cinématographique Marvel ?",
    options: ["Iron Man", "Les Gardiens de la Galaxie", "Les Avengers", "Thor"],
    correct: 2,
    anecdote: "Bien que Thanos apparaisse brièvement dans la scène post-générique, c'est dans Avengers que le personnage commence à prendre une place importante dans l'univers Marvel."
},
{
    question: "Dans quel film de 1994 apparaît le personnage de Forrest Gump ?",
    options: ["Forrest Gump", "The Green Mile", "Philadelphia", "Cast Away"],
    correct: 0,
    anecdote: "Ce film, réalisé par Robert Zemeckis et avec Tom Hanks dans le rôle principal, est un classique du cinéma qui raconte la vie d'un homme simple ayant vécu plusieurs événements historiques majeurs."
},
{
    question: "Qui a réalisé Pulp Fiction, un film culte des années 90 ?",
    options: ["Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Christopher Nolan"],
    correct: 2,
    anecdote: "Pulp Fiction a révolutionné la narration cinématographique avec ses intrigues non linéaires et ses dialogues mémorables, devenant un film de référence dans la pop culture."
},
{
    question: "Quel est le nom du vaisseau spatial dans la série Star Wars qui a fait 'le Kessel Run' en moins de 12 parsecs ?",
    options: ["X-Wing", "TIE Fighter", "Millennium Falcon", "Slave I"],
    correct: 2,
    anecdote: "Ce vaisseau emblématique, piloté par Han Solo et Chewbacca, est devenu un symbole de la saga Star Wars et est légendaire pour sa rapidité."
},
]

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;

const quizContainer = document.getElementById('quiz-container');
const resultDiv = document.getElementById('result');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');
const timeSpan = document.getElementById('time');
const finalScoreSpan = document.getElementById('final-score');
const questionCounterSpan = document.getElementById('question-counter');
const startQuizButton = document.getElementById('start-quiz'); // Bouton de démarrage

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer() {
    timeLeft = 20;
    clearInterval(timer);
    updateTimer();
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleAnswer(-1);
        }
    }, 1000);
}

function updateTimer() {
    timeSpan.textContent = timeLeft;
}

function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResult();
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="quiz-card">
            <div class="question">${question.question}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="handleAnswer(${index})">${option}</div>
                `).join('')}
            </div>
            <div class="anecdote">${question.anecdote}</div>
        </div>
    `;

    questionCounterSpan.textContent = `Question ${currentQuestionIndex + 1}/10`;
    startTimer();
}

function handleAnswer(selectedIndex) {
    clearInterval(timer);
    const question = selectedQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const anecdote = document.querySelector('.anecdote');

    options[question.correct].classList.add('correct');

    if (selectedIndex >= 0) {
        options[selectedIndex].classList.add(selectedIndex === question.correct ? 'correct' : 'wrong');
        if (selectedIndex === question.correct) {
            score++;
            scoreSpan.textContent = score;
        }
    }

    anecdote.style.display = 'block';

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function showResult() {
    quizContainer.style.display = 'none';
    resultDiv.style.display = 'block';
    document.querySelector('.timer').style.display = 'none';
    finalScoreSpan.textContent = Math.round((score / 10) * 100);
}

function initQuiz() {
    shuffleArray(questions);
    selectedQuestions = questions.slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    totalSpan.textContent = 10;
    showQuestion();
}

// Ajoutez un gestionnaire d'événements pour le bouton de démarrage du quiz
startQuizButton.addEventListener('click', () => {
    startQuizButton.style.display = 'none'; // Masquer le bouton de démarrage
    initQuiz(); // Initialiser le quiz
});
