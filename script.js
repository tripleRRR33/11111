const questions = [
    {
        question: "En quelle année le premier prix Nobel a-t-il été décerné ?",
        options: ["1895", "1901", "1905", "1910"],
        correct: 1,
        anecdote: "Les prix Nobel ont été créés à la suite du testament d'Alfred Nobel, l'inventeur de la dynamite."
    },
    {
        question: "Quel est le pays d'origine d'Alfred Nobel ?",
        options: ["Norvège", "Danemark", "Suède", "Finlande"],
        correct: 2,
        anecdote: "Alfred Nobel a accumulé une immense richesse grâce à ses inventions."
    },
    {
        question: "Qui est la première femme à avoir reçu un prix Nobel ?",
        options: ["Marie Curie", "Bertha von Suttner", "Selma Lagerlöf", "Jane Addams"],
        correct: 0,
        anecdote: "Elle a reçu deux prix Nobel dans deux domaines différents (physique et chimie)."
    },
    {
        question: "Quel est le plus jeune lauréat du prix Nobel ?",
        options: ["Malala Yousafzai", "Nadia Murad", "Tawakkol Karman", "Rigoberta Menchú"],
        correct: 0,
        anecdote: "Elle a reçu le prix Nobel de la paix en 2014 à seulement 17 ans."
    },
    {
        question: "Quel président américain a reçu le prix Nobel de la paix en 2009 ?",
        options: ["Barack Obama", "Bill Clinton", "Jimmy Carter", "George W. Bush"],
        correct: 0,
        anecdote: "Ce choix a été controversé, car il a été honoré en début de mandat."
    }
];

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
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];
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

    startTimer();
}

function handleAnswer(selectedIndex) {
    clearInterval(timer);
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const anecdote = document.querySelector('.anecdote');

    // Afficher la bonne réponse
    options[question.correct].classList.add('correct');

    // Si une réponse a été sélectionnée
    if (selectedIndex >= 0) {
        options[selectedIndex].classList.add(selectedIndex === question.correct ? 'correct' : 'wrong');
        if (selectedIndex === question.correct) {
            score++;
            scoreSpan.textContent = score;
        }
    }

    // Afficher l'anecdote
    anecdote.style.display = 'block';

    // Passer à la question suivante après un délai
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function showResult() {
    quizContainer.style.display = 'none';
    resultDiv.style.display = 'block';
    document.querySelector('.timer').style.display = 'none';
    finalScoreSpan.textContent = Math.round((score / questions.length) * 100);
}

function initQuiz() {
    shuffleArray(questions);
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    totalSpan.textContent = questions.length;
    showQuestion();
}

// Démarrer le quiz
initQuiz();
