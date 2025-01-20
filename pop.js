const questions = [
   {
    question: "Quel est le film le plus rentable de tous les temps, ajusté pour l'inflation ?",
    options: ["Avatar", "Avengers: Endgame", "Autant en emporte le vent", "Titanic"],
    correct: 2,
    anecdote: "Bien qu’il ait été dépassé par Avatar en termes de recettes brutes, Autant en emporte le vent reste le plus rentable si l’on ajuste les recettes à l’inflation."
},
   {
    question: "Quel est le groupe légendaire qui a écrit Bohemian Rhapsody ?",
    options: ["The Beatles", "Queen", "Pink Floyd", "Led Zeppelin"],
    correct: 1,
    anecdote: "Cette chanson, écrite par Freddie Mercury, est l'une des compositions les plus célèbres et originales du groupe, connue pour sa structure complexe et ses influences variées."
},
{
    question: "En quelle année Michael Jackson a-t-il sorti son album Thriller ?",
    options: ["1979", "1982", "1984", "1987"],
    correct: 1,
    anecdote: "Thriller reste l'album le plus vendu de tous les temps, avec des tubes comme 'Billie Jean' et 'Beat It', et a solidifié Michael Jackson en tant que 'King of Pop'."
},
{
    question: "Quel artiste a popularisé la danse du 'moonwalk' ?",
    options: ["James Brown", "Elvis Presley", "Michael Jackson", "Prince"],
    correct: 2,
    anecdote: "Le moonwalk est devenu emblématique après la performance de Jackson lors du concert de Motown 25: Yesterday, Today, Forever en 1983."
},
{
    question: "Quelle chanson de Nirvana a été un hymne de la scène grunge dans les années 1990 ?",
    options: ["Come As You Are", "Lithium", "Smells Like Teen Spirit", "Heart-Shaped Box"],
    correct: 2,
    anecdote: "Cette chanson, souvent vue comme l'hymne de la génération X, a marqué l'essor du mouvement grunge et propulsé Nirvana sur la scène internationale."
},
{
    question: "Qui a chanté 'Like a Virgin', un des plus grands succès des années 1980 ?",
    options: ["Cyndi Lauper", "Whitney Houston", "Madonna", "Cher"],
    correct: 2,
    anecdote: "Madonna a redéfini la pop dans les années 80 avec des chansons comme 'Like a Virgin', et elle est devenue l'une des artistes les plus influentes de l'histoire de la musique."
},
{
    question: "Quel est le jeu vidéo le plus vendu de tous les temps ?",
    options: ["Grand Theft Auto V", "Minecraft", "Tetris", "Fortnite"],
    correct: 1,
    anecdote: "Minecraft a surpassé les autres jeux avec plus de 200 millions d'exemplaires vendus, offrant une expérience de monde ouvert et de création sans fin."
},
{
    question: "Quelle franchise de jeu vidéo est devenue célèbre grâce à des personnages comme Mario et Luigi ?",
    options: ["Super Mario", "Donkey Kong", "Sonic the Hedgehog", "The Legend of Zelda"],
    correct: 0,
    anecdote: "Créée par Nintendo, Super Mario a lancé une série de jeux qui a marqué l’histoire du jeu vidéo, devenant un des personnages les plus iconiques du secteur."
},
{
    question: "Dans quelle série de jeux vidéo le personnage de Link doit-il sauver la princesse Zelda ?",
    options: ["Final Fantasy", "The Legend of Zelda", "Dragon Quest", "Elder Scrolls"],
    correct: 1,
    anecdote: "Cette série, lancée par Nintendo en 1986, combine aventure, exploration et résolution de puzzles, avec Link combattant des forces maléfiques pour sauver Hyrule."
},
{
    question: "Quel jeu vidéo a popularisé le mode Battle Royale en 2017 ?",
    options: ["PlayerUnknown's Battlegrounds", "Fortnite", "Call of Duty: Warzone", "Apex Legends"],
    correct: 1,
    anecdote: "Fortnite a révolutionné les jeux en ligne en introduisant un mode Battle Royale gratuit, avec des compétitions mondiales et un immense succès commercial."
},
{
    question: "Quel jeu a marqué la fin d'une génération avec sa sortie en 1998, mettant en vedette un personnage nommé Solid Snake ?",
    options: ["Metal Gear Solid", "Resident Evil 2", "Final Fantasy VII", "Half-Life"],
    correct: 0,
    anecdote: "Ce jeu, réalisé par Hideo Kojima, est devenu un classique du genre action-infiltration et a marqué l'histoire des consoles PlayStation."
},
{
    question: "Quelle série télévisée a popularisé l’expression 'Winter is Coming' ?",
    options: ["Breaking Bad", "Vikings", "Game of Thrones", "The Witcher"],
    correct: 2,
    anecdote: "Game of Thrones, adaptée des livres de George R. R. Martin, a captivé les téléspectateurs avec ses intrigues complexes, ses personnages profonds et ses moments dramatiques."
},
{
    question: "Quelle série télévisée a réuni des personnages comme Walter White et Jesse Pinkman ?",
    options: ["The Wire", "Sons of Anarchy", "Breaking Bad", "Better Call Saul"],
    correct: 2,
    anecdote: "Cette série acclamée suit l’évolution de Walter White, un professeur de chimie devenu fabricant de méthamphétamine, et de son acolyte Jesse."
},
{
    question: "Quelle série a introduit le personnage de Don Draper dans les années 1960 ?",
    options: ["The Sopranos", "Mad Men", "Boardwalk Empire", "The Americans"],
    correct: 1,
    anecdote: "Mad Men explore la vie de publicitaires dans les années 60, avec un focus sur les contradictions sociales, politiques et personnelles de l’époque."
},
{
    question: "Quelle série à succès a introduit des personnages comme Eleven et Mike Wheeler ?",
    options: ["Stranger Things", "The OA", "Dark", "Black Mirror"],
    correct: 0,
    anecdote: "Mélange de science-fiction et de drame psychologique, cette série s’inspire des années 80 et plonge les téléspectateurs dans un monde mystérieux rempli de créatures surnaturelles."
},
{
    question: "Quel personnage de Friends a un travail de scientifique en biologie ?",
    options: ["Joey Tribbiani", "Ross Geller", "Chandler Bing", "Rachel Green"],
    correct: 1,
    anecdote: "Ross, incarné par David Schwimmer, est l'un des six amis principaux de la série, connu pour ses aventures amoureuses et sa carrière de paléontologue."
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
