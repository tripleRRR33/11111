const questions = [
    {
        question: "En quelle année le premier prix Nobel a-t-il été décerné ?",
        options: ["1895", "1901", "1905", "1910"],
        correct: 1,
        anecdote: "Les prix Nobel ont été créés à la suite du testament d'Alfred Nobel, l'inventeur de la dynamite."
    },
    {
        "question": "Pourquoi le prix Nobel de la paix de 1973 est-il controversé ?",
        "options": [
            "Il a été attribué à Henry Kissinger et Lê Đức Thọ pour les accords de paix au Vietnam, bien que la guerre ait continué.",
            "Il a été attribué à des personnes accusées de crimes de guerre.",
            "Il n'a pas été décerné cette année-là.",
            "Il a été partagé entre plus de trois personnes."
        ],
        "correct": 0,
        "anecdote": "Lê Đức Thọ a refusé le prix, une première dans l'histoire du Nobel."
    },
    {
        "question": "Quel écrivain controversé a reçu le prix Nobel de littérature en 2016 ?",
        "options": [
            "Bob Dylan",
            "Haruki Murakami",
            "Stephen King",
            "Margaret Atwood"
        ],
        "correct": 0,
        "anecdote": "Ce choix a surpris beaucoup de monde, car Dylan est un auteur-compositeur."
    },
    {
        "question": "Quelle grande omission des prix Nobel est souvent critiquée ?",
        "options": [
            "Mahatma Gandhi",
            "Nelson Mandela",
            "Frédéric Chopin",
            "Sigmund Freud"
        ],
        "correct": 0,
        "anecdote": "Malgré plusieurs nominations, Gandhi n’a jamais reçu le prix Nobel de la paix."
    },
    {
        "question": "Quel prix Nobel n'a pas été décerné pendant les deux guerres mondiales ?",
        "options": [
            "Le prix Nobel de la paix",
            "Le prix Nobel de littérature",
            "Le prix Nobel de chimie",
            "Le prix Nobel de physique"
        ],
        "correct": 0,
        "anecdote": "Pendant ces périodes, les conflits rendaient difficile l'attribution de ce prix."
    },
    {
        "question": "Quel pays compte le plus grand nombre de lauréats Nobel ?",
        "options": [
            "Les États-Unis",
            "Le Royaume-Uni",
            "L'Allemagne",
            "La France"
        ],
        "correct": 0,
        "anecdote": "Une part importante des prix américains est attribuée à des scientifiques immigrés."
    },
    {
        "question": "Quel événement a conduit à la création du prix Nobel de la paix ?",
        "options": [
            "La lecture du testament d'Alfred Nobel",
            "La fin des guerres napoléoniennes",
            "Le traité de Versailles",
            "La correspondance d'Alfred Nobel avec un scientifique pacifiste"
        ],
        "correct": 0,
        "anecdote": "Nobel a été influencé par sa correspondance avec Bertha von Suttner, militante pacifiste."
    },
    {
        "question": "Combien de fois le prix Nobel de littérature a-t-il été décerné à des écrivains francophones ?",
        "options": [
            "16 fois",
            "10 fois",
            "12 fois",
            "20 fois"
        ],
        "correct": 0,
        "anecdote": "Parmi eux, des auteurs comme Albert Camus, Jean-Paul Sartre (qui l'a refusé) et Annie Ernaux."
    },
    {
        "question": "Quelle scientifique a découvert la radioactivité et reçu deux prix Nobel ?",
        "options": [
            "Marie Curie",
            "Irène Joliot-Curie",
            "Barbara McClintock",
            "Rosalind Franklin"
        ],
        "correct": 0,
        "anecdote": "Elle est enterrée au Panthéon à Paris, et son cercueil est plombé en raison de la radioactivité."
    },
    {
        "question": "Quel auteur américain a reçu le prix Nobel de littérature en 1954 ?",
        "options": [
            "Ernest Hemingway",
            "Mark Twain",
            "F. Scott Fitzgerald",
            "William Faulkner"
        ],
        "correct": 0,
        "anecdote": "Il a failli mourir dans deux crashs d’avion en Afrique l’année précédente."
    },
    {
        "question": "Quel ancien secrétaire général de l'ONU a reçu le prix Nobel de la paix en 2001 ?",
        "options": [
            "Kofi Annan",
            "Ban Ki-moon",
            "Dag Hammarskjöld",
            "Boutros Boutros-Ghali"
        ],
        "correct": 0,
        "anecdote": "Il a partagé le prix avec les Nations unies pour leurs efforts en faveur de la paix mondiale."
    },
    {
        "question": "Qui a été le premier Afro-Américain à recevoir un prix Nobel ?",
        "options": [
            "Ralph Bunche",
            "Martin Luther King Jr.",
            "Frederick Douglass",
            "Barack Obama"
        ],
        "correct": 0,
        "anecdote": "Il a reçu le prix de la paix en 1950 pour son rôle dans la médiation du conflit israélo-arabe."
    },
    {
        "question": "Quel célèbre physicien a reçu le prix Nobel de physique en 1921 ?",
        "options": [
            "Albert Einstein",
            "Niels Bohr",
            "Max Planck",
            "Enrico Fermi"
        ],
        "correct": 0,
        "anecdote": "Ce n’est pas pour sa théorie de la relativité, mais pour sa découverte de l'effet photoélectrique."
    },
    {
        "question": "Quel est le seul domaine dans lequel Alfred Nobel n’a pas instauré de prix ?",
        "options": ["Les mathématiques", "La chimie", "La médecine", "La physique"],
        "correct": 0,
        "anecdote": "Une rumeur populaire, bien que non vérifiée, dit qu'il aurait exclu les mathématiques par jalousie envers un mathématicien."
    },
    {
        "question": "Quel prix a été ajouté en 1968 ?",
        "options": ["Le prix d'économie", "Le prix de littérature", "Le prix de médecine", "Le prix de physique"],
        "correct": 0,
        "anecdote": "Ce prix est souvent appelé à tort 'Prix Nobel d'économie'."
    },
    {
        "question": "Qui est la première femme à avoir reçu un prix Nobel ?",
        "options": ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Barbara McClintock"],
        "correct": 0,
        "anecdote": "Elle a reçu le prix de physique en 1903 et est la seule femme à avoir reçu deux prix Nobel dans deux domaines différents (physique et chimie)."
    },
    {
        "question": "Quel écrivain français a refusé le prix Nobel de littérature en 1964 ?",
        "options": ["Jean-Paul Sartre", "Albert Camus", "Marcel Proust", "Simone de Beauvoir"],
        "correct": 0,
        "anecdote": "Il a refusé tous les honneurs officiels, y compris ce prestigieux prix."
    },
    {
        "question": "Quelle organisation a reçu le prix Nobel de la paix en 1965 ?",
        "options": ["UNICEF", "ONU", "Croix-Rouge", "Amnesty International"],
        "correct": 0,
        "anecdote": "L'UNICEF a été récompensée pour son travail en faveur des enfants dans le monde entier."
    },
    {
        "question": "Quel président américain a reçu le prix Nobel de la paix en 2009 ?",
        "options": ["Barack Obama", "Jimmy Carter", "Theodore Roosevelt", "Woodrow Wilson"],
        "correct": 0,
        "anecdote": "Ce choix a été controversé, car il a été honoré en début de mandat."
    },
    {
        "question": "Combien de fois un prix Nobel a-t-il été partagé par plus de deux personnes ?",
        "options": ["Jamais", "Une fois", "Deux fois", "Trois fois"],
        "correct": 0,
        "anecdote": "Jamais plus de trois personnes ne peuvent partager un prix Nobel, selon les règles du comité Nobel."
    },
    {
        "question": "Quel est le plus âgé des lauréats du prix Nobel ?",
        "options": ["John B. Goodenough", "Leonid Hurwicz", "William Nordhaus", "Arthur Ashkin"],
        "correct": 0,
        "anecdote": "Il a reçu le prix de chimie en 2019 à l'âge de 97 ans."
    },
    {
        "question": "Combien de femmes ont reçu un prix Nobel en 2023 ?",
        "options": ["3", "5", "2", "4"],
        "correct": 0,
        "anecdote": "Ce chiffre est en augmentation, mais les femmes restent sous-représentées parmi les lauréats."
    },
    {
        "question": "Quel domaine récompense le plus de femmes parmi les prix Nobel ?",
        "options": ["La paix", "La littérature", "La chimie", "La médecine"],
        "correct": 0,
        "anecdote": "Ce prix met souvent en avant les efforts pour l'égalité et les droits des femmes."
    },
    {
        "question": "Qui a reçu le prix Nobel de littérature en 2021 ?",
        "options": ["Abdulrazak Gurnah", "Kazuo Ishiguro", "Svetlana Alexievitch", "Bob Dylan"],
        "correct": 0,
        "anecdote": "Il est né à Zanzibar et écrit principalement sur les thèmes de l'exil et de la migration."
    },
    {
        "question": "Dans quel domaine le prix Nobel est-il le plus souvent décerné à des équipes ?",
        "options": ["La physique", "La chimie", "La médecine", "L'économie"],
        "correct": 0,
        "anecdote": "La physique exige souvent des collaborations importantes."
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
    totalSpan.textContent = 10; // Fixer à 10 pour refléter le nombre de questions
    showQuestion();
}

// Démarrer le quiz
initQuiz();
