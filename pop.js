const questions = [
   {
    question: "Quel est le film le plus rentable de tous les temps, ajusté pour l'inflation ?",
    options: ["Avatar", "Avengers: Endgame", "Autant en emporte le vent", "Titanic"],
    correct: 2,
    anecdote: "Bien qu’il ait été dépassé par Avatar en termes de recettes brutes, Autant en emporte le vent reste le plus rentable si l’on ajuste les recettes à l’inflation."
},
{
    "question": "Qui est le créateur de Superman ?",
    "options": ["Jerry Siegel et Joe Shuster", "Stan Lee et Steve Ditko", "Bob Kane et Bill Finger", "Jack Kirby et Joe Simon"],
    "correct": 0,
    "anecdote": "Superman a fait sa première apparition en 1938 dans *Action Comics #1* et est devenu l'un des super-héros les plus emblématiques."
},

{
    "question": "Quel super-héros porte le nom d’alter ego de Bruce Wayne ?",
    "options": ["Batman", "Robin", "Iron Man", "Green Lantern"],
    "correct": 0,
    "anecdote": "Batman est un justicier sans pouvoirs surhumains, utilisant son intelligence et ses compétences physiques exceptionnelles pour combattre le crime à Gotham City."
},

{
    "question": "Quel super-héros a été le premier à être créé par Marvel Comics dans les années 1960 ?",
    "options": ["Spider-Man", "Hulk", "Iron Man", "Thor"],
    "correct": 0,
    "anecdote": "Créé par Stan Lee et Steve Ditko, Spider-Man a révolutionné le genre des comics avec un héros adolescent qui fait face à des problèmes humains tout en combattant le crime."
},

{
    "question": "Quelle équipe de super-héros a été formée par Captain America, Iron Man et Thor ?",
    "options": ["Les Avengers", "Les X-Men", "Les Gardiens de la Galaxie", "La Ligue des Justiciers"],
    "correct": 0,
    "anecdote": "Les Avengers ont été formés dans les comics Marvel et sont devenus l'un des groupes de super-héros les plus populaires, notamment grâce aux films à succès."
},

{
    "question": "Qui est l'ennemi juré de Superman, doté de pouvoirs similaires ?",
    "options": ["Lex Luthor", "Doomsday", "Bizarro", "Darkseid"],
    "correct": 0,
    "anecdote": "Lex Luthor est l'un des plus grands génies criminels et utilise sa richesse et son intelligence pour contrer Superman."
},

{
    "question": "Qui a popularisé la phrase 'May the Force be with you' ?",
    "options": ["Star Wars", "Star Trek", "Doctor Who", "Battlestar Galactica"],
    "correct": 0,
    "anecdote": "'May the Force be with you' est devenu une phrase emblématique de *Star Wars*, utilisée par les Jedi pour exprimer leur souhait de chance et de succès avant les batailles."
},

{
    "question": "Quelle marque a popularisé les baskets Air Jordan ?",
    "options": ["Nike", "Adidas", "Reebok", "Puma"],
    "correct": 0,
    "anecdote": "Les Air Jordan, créées pour Michael Jordan, sont devenues une icône de mode et de performance, contribuant à populariser les baskets en tant qu'élément de style."
},

{
    "question": "Quel acteur incarne le personnage de Jack Sparrow dans Pirates des Caraïbes ?",
    "options": ["Johnny Depp", "Orlando Bloom", "Tom Hanks", "Robert Downey Jr."],
    "correct": 0,
    "anecdote": "Johnny Depp a incarné Jack Sparrow de manière mémorable, avec son jeu excentrique et son charisme, faisant du personnage l'une des figures les plus populaires du cinéma moderne."
},

{
    "question": "Quel personnage de Star Wars est célèbre pour dire 'I am your father' ?",
    "options": ["Dark Vador", "Obi-Wan Kenobi", "Yoda", "Han Solo"],
    "correct": 0,
    "anecdote": "La célèbre réplique de Dark Vador à Luke Skywalker dans *L'Empire contre-attaque* reste l'une des scènes les plus mythiques du cinéma."
},

{
    "question": "Qui a joué le rôle de Hermione Granger dans les films Harry Potter ?",
    "options": ["Emma Watson", "Rupert Grint", "Daniel Radcliffe", "Maggie Smith"],
    "correct": 0,
    "anecdote": "Emma Watson a incarné Hermione Granger, un personnage emblématique de l'univers *Harry Potter*, devenu une icône pour des millions de fans."
},

{
    "question": "Quel est le roman le plus célèbre de J.K. Rowling ?",
    "options": ["Harry Potter à l'école des sorciers", "Harry Potter et la Chambre des Secrets", "Harry Potter et le Prisonnier d'Azkaban", "Harry Potter et les Reliques de la Mort"],
    "correct": 0,
    "anecdote": "Le premier livre de la saga *Harry Potter* a captivé des millions de lecteurs et lancé un univers magique qui a influencé toute une génération."
},

{
    "question": "Quelle est l’œuvre littéraire qui a popularisé le personnage de Sherlock Holmes ?",
    "options": ["Les Aventures de Sherlock Holmes", "Le Chien des Baskerville", "La Vallée de la Peur", "Le Dernier Problème"],
    "correct": 0,
    "anecdote": "Sherlock Holmes, le détective brillant de Sir Arthur Conan Doyle, est l'un des personnages les plus célèbres de la littérature policière."
},

{
    "question": "Quel est le premier livre de la série Le Seigneur des Anneaux ?",
    "options": ["La Communauté de l'Anneau", "Les Deux Tours", "Le Retour du Roi", "Le Hobbit"],
    "correct": 0,
    "anecdote": "Ce livre, écrit par J.R.R. Tolkien, commence l'aventure épique de la trilogie *Le Seigneur des Anneaux*, plongeant les lecteurs dans le monde mythique de la Terre du Milieu."
},

{
    "question": "Qui a écrit le roman dystopique 1984 ?",
    "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
    "correct": 0,
    "anecdote": "1984 est une œuvre visionnaire de George Orwell, explorant les dangers d'un gouvernement totalitaire et d'une surveillance omniprésente."
},

{
    "question": "Quelle série de livres pour enfants met en scène des personnages comme Katniss Everdeen et Peeta Mellark ?",
    "options": ["Hunger Games", "Harry Potter", "Percy Jackson", "Les Chroniques de Narnia"],
    "correct": 0,
    "anecdote": "La série *Hunger Games* de Suzanne Collins suit Katniss, une jeune fille forcée de participer à des jeux de survie, abordant des thèmes puissants de résistance et de pouvoir."
},

{
    "question": "Quel est le mème internet le plus célèbre impliquant un chat avec un visage perplexe ?",
    "options": ["Grumpy Cat", "Nyan Cat", "Keyboard Cat", "Lil Bub"],
    "correct": 0,
    "anecdote": "Grumpy Cat, dont le vrai nom était Tardar Sauce, est devenu une icône de mème grâce à son expression faciale constante de mécontentement."
},

{
    "question": "Quel est le nom du mème viral de 2016 qui met en scène un homme avec un doigt pointé et un regard de défi ?",
    "options": ["Distracted Boyfriend", "Woman Yelling at a Cat", "Roll Safe", "Mocking SpongeBob"],
    "correct": 0,
    "anecdote": "Le mème *Distracted Boyfriend* est une image qui symbolise la distraction ou la tentation, avec l'homme qui regarde une autre femme alors qu'il est en couple."
},

{
    "question": "Quel est le nom du créateur de l'énorme phénomène viral Gangnam Style ?",
    "options": ["PSY", "BTS", "Big Bang", "EXO"],
    "correct": 0,
    "anecdote": "PSY a rendu célèbre *Gangnam Style* avec son style de danse unique et sa chanson qui a battu des records de vues sur YouTube."
},

{
    "question": "Quel mème populaire utilise une image d’un chien Shiba Inu accompagné de textes en anglais 'such' et 'much' ?",
    "options": ["Doge", "Pepe the Frog", "Bad Luck Brian", "Success Kid"],
    "correct": 0,
    "anecdote": "Doge est un mème qui met en scène un chien Shiba Inu avec des légendes humoristiques, devenu un symbole de l'absurdité sur internet."
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
    {
        "question": "Quel est le nom de l’application qui a révolutionné les vidéos courtes et a popularisé des mèmes ?",
        "options": ["TikTok", "Instagram", "Vine", "Snapchat"],
        "correct": 0,
        "anecdote": "TikTok a popularisé les vidéos courtes, permettant aux utilisateurs de créer des contenus créatifs avec des chansons, des danseurs, des effets et des défis, devenant un phénomène culturel majeur."
    },
    {
        "question": "Quelle marque de chaussures a collaboré avec Kanye West pour créer les Yeezy ?",
        "options": ["Nike", "Adidas", "Puma", "Reebok"],
        "correct": 1,
        "anecdote": "Adidas a collaboré avec Kanye West pour créer la ligne de baskets Yeezy, qui est rapidement devenue un phénomène dans le monde de la mode et des baskets."
    },
    {
        "question": "Quel designer est célèbre pour avoir inventé la petite robe noire ?",
        "options": ["Coco Chanel", "Christian Dior", "Yves Saint Laurent", "Jean-Paul Gaultier"],
        "correct": 0,
        "anecdote": "Coco Chanel a révolutionné la mode féminine avec la création de la petite robe noire, un vêtement intemporel et élégant qui est devenu un essentiel dans la garde-robe de nombreuses femmes."
    },
    {
        "question": "Quelle icône pop des années 2000 a lancé la tendance des jeans taille basse ?",
        "options": ["Beyoncé", "Britney Spears", "Christina Aguilera", "Shakira"],
        "correct": 1,
        "anecdote": "Britney Spears, dans ses vidéos et apparitions publiques, a popularisé les jeans taille basse, qui sont devenus un élément clé de la mode féminine au début des années 2000."
    },
    {
        "question": "Quelle entreprise est célèbre pour ses sacs à main de luxe souvent arborés par des célébrités comme Kim Kardashian ?",
        "options": ["Gucci", "Louis Vuitton", "Chanel", "Prada"],
        "correct": 1,
        "anecdote": "Louis Vuitton est l’une des marques de luxe les plus emblématiques, célèbre pour ses sacs à main, ses valises et ses accessoires, devenus des symboles de statut dans la culture pop."
    },
    {
        "question": "Quelle marque de vêtements streetwear a gagné en popularité grâce à sa collaboration avec Supreme ?",
        "options": ["Nike", "Louis Vuitton", "Adidas", "Under Armour"],
        "correct": 1,
        "anecdote": "La collaboration entre Louis Vuitton et Supreme a mélangé le luxe et le streetwear, créant une nouvelle vague d'articles de mode qui étaient à la fois accessibles et exclusifs."
    },
    {
        "question": "Quelle entreprise a lancé le premier smartphone iPhone ?",
        "options": ["Apple", "Samsung", "Nokia", "BlackBerry"],
        "correct": 0,
        "anecdote": "L’iPhone, lancé en 2007 par Apple, a révolutionné l'industrie des smartphones avec son design innovant et son interface tactile, transformant ainsi l'ensemble du marché des technologies mobiles."
    },
    {
        "question": "Quel réseau social a été fondé par Mark Zuckerberg en 2004 ?",
        "options": ["Instagram", "Twitter", "Facebook", "Snapchat"],
        "correct": 2,
        "anecdote": "Facebook est devenu le plus grand réseau social au monde, permettant à des milliards d’utilisateurs de se connecter, de partager des informations et de créer des communautés en ligne."
    },
    {
        "question": "Quelle entreprise a développé l'outil de recherche internet Google ?",
        "options": ["Microsoft", "Yahoo", "Google Inc.", "Bing"],
        "correct": 2,
        "anecdote": "Google a été fondé par Larry Page et Sergey Brin en 1998 et est rapidement devenu le moteur de recherche le plus utilisé au monde, modifiant ainsi l'accès à l'information sur Internet."
    },
    {
        "question": "Quel appareil de réalité virtuelle a été lancé par Facebook (maintenant Meta) sous le nom de Oculus ?",
        "options": ["PlayStation VR", "Oculus Rift", "HTC Vive", "Valve Index"],
        "correct": 1,
        "anecdote": "Oculus Rift est un casque de réalité virtuelle qui permet une immersion totale dans les mondes virtuels, populaire dans les jeux vidéo et les applications immersives."
    },
    {
        "question": "Quel est le nom de l'assistant vocal intelligent développé par Amazon ?",
        "options": ["Siri", "Google Assistant", "Alexa", "Cortana"],
        "correct": 2,
        "anecdote": "Alexa, l’assistant virtuel d'Amazon, utilise la reconnaissance vocale pour répondre aux commandes et contrôler des appareils intelligents, facilitant l'interaction avec la technologie à domicile."
    },
    {
        "question": "Qui est le créateur du personnage Mickey Mouse ?",
        "options": ["Walt Disney", "Hanna-Barbera", "Tex Avery", "Max Fleischer"],
        "correct": 0,
        "anecdote": "Mickey Mouse est devenu l'une des figures les plus emblématiques de l'animation, symbole de l'empire Disney et de la culture populaire."
    },
    {
        "question": "Quelle chanteuse a popularisé le style 'hipster' avec des lunettes rondes et un style rétro ?",
        "options": ["Lana Del Rey", "Amy Winehouse", "Lady Gaga", "Taylor Swift"],
        "correct": 0,
        "anecdote": "Lana Del Rey a contribué à populariser un style vintage avec ses vidéos et ses morceaux empreints de nostalgie, influençant le courant rétro de la pop culture."
    },
    {
        "question": "Quelle série télévisée a lancé la carrière de Jennifer Aniston ?",
        "options": ["Friends", "The Office", "Parks and Recreation", "How I Met Your Mother"],
        "correct": 0,
        "anecdote": "Friends a propulsé Jennifer Aniston au sommet de la célébrité mondiale, grâce à son rôle de Rachel Green et ses performances comiques mémorables."
    },
   {
    "question": "Quelle icône de la mode a popularisé les looks exagérés avec des structures volumineuses et des couleurs vives dans les années 80 ?",
    "options": ["Jean-Paul Gaultier", "Coco Chanel", "Christian Dior", "Yves Saint Laurent"],
    "correct": 0,
    "anecdote": "Jean-Paul Gaultier est reconnu pour ses créations avant-gardistes et audacieuses, influençant de nombreux designers dans l'industrie de la mode."
},
{
    "question": "Quelle peinture de l’artiste Andy Warhol a représenté une boîte de soupe Campbell’s ?",
    "options": ["Campbell's Soup Cans", "Marilyn Diptych", "Eight Elvises", "Gold Marilyn Monroe"],
    "correct": 0,
    "anecdote": "Ce tableau emblématique de Warhol, réalisé en 1962, est un exemple classique de l’Art Pop, remettant en question les notions d’art traditionnel et de consommation de masse."
},
{
    "question": "Quel artiste contemporain est connu pour ses œuvres géantes en street art, souvent inspirées par la politique et la société ?",
    "options": ["Banksy", "Jean-Michel Basquiat", "Keith Haring", "Shepard Fairey"],
    "correct": 0,
    "anecdote": "Banksy est un artiste anonyme dont les œuvres dissidentes sont devenues célèbres pour leurs messages critiques sur la société, la politique et les institutions."
},
{
    "question": "Quel réseau social a été racheté par Meta (anciennement Facebook) en 2012 ?",
    "options": ["Instagram", "Snapchat", "Twitter", "TikTok"],
    "correct": 0,
    "anecdote": "Instagram est devenu l’une des plateformes les plus populaires pour le partage de photos et vidéos, avec des millions d’utilisateurs dans le monde entier."
},
{
    "question": "Quel site de vidéos courtes est devenu viral avec ses défis et ses effets visuels ?",
    "options": ["TikTok", "Vine", "Instagram Reels", "YouTube Shorts"],
    "correct": 0,
    "anecdote": "TikTok a révolutionné le partage de contenu court, introduisant des filtres, des défis et des contenus créatifs adaptés à un public mondial."
},
{
    "question": "Quelle application permet de créer des stories et de partager des contenus éphémères ?",
    "options": ["Snapchat", "Instagram", "WhatsApp", "Facebook"],
    "correct": 0,
    "anecdote": "Snapchat a popularisé le contenu éphémère avec ses filtres innovants et ses stories interactives, devenant une plateforme incontournable pour les jeunes utilisateurs."
},
{
    "question": "Quelle est l’application de messagerie instantanée la plus utilisée dans le monde ?",
    "options": ["WhatsApp", "Messenger", "Telegram", "WeChat"],
    "correct": 0,
    "anecdote": "WhatsApp permet d’envoyer des messages texte, des appels vocaux et des appels vidéo, rendant la communication instantanée accessible et universelle."
},
{
    "question": "Quel réseau social a popularisé les 'threads' où les utilisateurs publient des messages en série ?",
    "options": ["Twitter", "Facebook", "Reddit", "Tumblr"],
    "correct": 0,
    "anecdote": "Twitter a introduit les 'threads' pour structurer les discussions et permettre des dialogues approfondis sous forme de posts successifs."
},
{
    "question": "Quel designer est connu pour avoir réinventé le concept de l’élégance avec des créations minimalistes ?",
    "options": ["Yves Saint Laurent", "Coco Chanel", "Karl Lagerfeld", "Jean-Paul Gaultier"],
    "correct": 0,
    "anecdote": "Yves Saint Laurent a été un pionnier dans la mode contemporaine, introduisant des looks épurés et des silhouettes modernes qui redéfinissaient l'élégance."
},
{
    "question": "Quelle it-girl des années 2000 est célèbre pour ses apparitions dans The Simple Life ?",
    "options": ["Paris Hilton", "Kim Kardashian", "Nicole Richie", "Lindsay Lohan"],
    "correct": 0,
    "anecdote": "Paris Hilton est devenue une icône de la mode et du divertissement, connue pour ses looks excentriques et ses multiples collaborations dans la mode et les affaires."
},
{
    "question": "Quelle marque de baskets est associée au modèle 'Air Jordan 1' ?",
    "options": ["Nike", "Adidas", "Puma", "Reebok"],
    "correct": 0,
    "anecdote": "La série Air Jordan, développée en partenariat avec Michael Jordan, est devenue un classique du streetwear, symbolisant la culture sneaker."
},
{
    "question": "Quel designer est reconnu pour ses créations de haute couture qui mélangent tradition et modernité ?",
    "options": ["Valentino Garavani", "Chanel", "Giorgio Armani", "Dior"],
    "correct": 0,
    "anecdote": "Valentino est célèbre pour ses robes de bal et ses créations qui allient raffinement et modernité, souvent portées par des célébrités sur les tapis rouges."
},
{
    "question": "Quelle icône de la musique a popularisé les lunettes aviateurs et les tenues futuristes ?",
    "options": ["Lady Gaga", "Madonna", "Beyoncé", "Rihanna"],
    "correct": 0,
    "anecdote": "Lady Gaga est connue pour ses tenues extravagantes et ses performances théâtrales, influençant la mode pop avec des looks avant-gardistes et uniques."
},
{
    "question": "Quel jeu a popularisé le genre Battle Royale avant Fortnite ?",
    "options": ["PlayerUnknown's Battlegrounds (PUBG)", "Apex Legends", "Call of Duty: Warzone", "H1Z1"],
    "correct": 0,
    "anecdote": "PUBG a été l’un des premiers jeux à introduire le genre Battle Royale, où des joueurs s’affrontent sur une île jusqu’à ce qu’un seul survivant reste."
},
{
    "question": "Quel jeu vidéo a introduit les éléments de survie dans un monde ouvert avec des zombies ?",
    "options": ["DayZ", "Left 4 Dead", "The Last of Us", "State of Decay"],
    "correct": 0,
    "anecdote": "DayZ a lancé le genre de survie zombie dans des environnements massifs et réalistes, inspirant de nombreux jeux modernes."
},
{
    "question": "Quel jeu a introduit les mécaniques de crafting et de construction massives, influençant des jeux comme Minecraft ?",
    "options": ["Terraria", "Minecraft", "Roblox", "No Man's Sky"],
    "correct": 0,
    "anecdote": "Terraria a popularisé les jeux de survie et de création dans un monde ouvert 2D, mettant l’accent sur l’exploration et l’innovation du gameplay."
},
{
    "question": "Quel jeu est connu pour ses 'emotes' et son style visuel cartoon ?",
    "options": ["Fortnite", "Overwatch", "League of Legends", "Apex Legends"],
    "correct": 0,
    "anecdote": "Fortnite a popularisé le concept de danses et d’émotions virtuelles sous forme d’emotes, enrichissant l’interaction dans le jeu avec des éléments sociaux."
},
{
    "question": "Quel jeu de rôle célèbre est axé sur la mythologie nordique avec le personnage principal Kratos ?",
    "options": ["God of War", "Skyrim", "Dark Souls", "The Witcher 3"],
    "correct": 0,
    "anecdote": "God of War a redéfini les jeux d’action-aventure en offrant une narration immersive et un gameplay axé sur la mythologie scandinave."
},
{
    "question": "Quel film de science-fiction a popularisé l’idée de voyages dans le temps et a introduit le personnage de Doc Brown ?",
    "options": ["Retour vers le Futur (Back to the Future)", "Terminator", "Interstellar", "Donnie Darko"],
    "correct": 0,
    "anecdote": "Ce film, réalisé par Robert Zemeckis, raconte les aventures de Marty McFly, qui voyage dans le passé grâce à la DeLorean, une voiture modifiée par le Dr. Emmett Brown."
},
{
    "question": "Quel film d’animation de Pixar met en scène un robot nommé WALL-E ?",
    "options": ["WALL-E", "Toy Story", "Monstres & Cie", "Coco"],
    "correct": 0,
    "anecdote": "WALL-E est un film d’animation où un robot solitaire cherche à nettoyer la Terre, tout en découvrant l’amour et l’espoir dans un monde abandonné par l’humanité."
},
{
    "question": "Dans quelle série de films trouve-t-on des personnages tels que Han Solo, Luke Skywalker et Darth Vader ?",
    "options": ["Star Wars", "Star Trek", "Harry Potter", "The Matrix"],
    "correct": 0,
},
    {
        "question": "Quel artiste hip-hop a popularisé les tatouages faciaux et le style excentrique avec des teintes de cheveux colorées ?",
        "options": ["Lil Uzi Vert", "Travis Scott", "Post Malone", "Kanye West"],
        "correct": 2,
        "anecdote": "Post Malone a contribué à l'évolution de la culture rap, combinant des éléments de rock, de hip-hop et de musique alternative dans son style unique."
    },
    {
        "question": "Quelle série de télé-réalité a lancé les sœurs Kardashian sur le devant de la scène ?",
        "options": ["The Kardashians", "Jersey Shore", "The Real Housewives of Beverly Hills", "Keeping Up with the Kardashians"],
        "correct": 3,
        "anecdote": "Cette série a documenté la vie des Kardashian-Jenner, transformant leur famille en une marque influente dans la mode, les affaires et les médias sociaux."
    },
    {
        "question": "Quelle peinture de Pablo Picasso est considérée comme l'une des œuvres les plus importantes du Cubisme ?",
        "options": ["Guernica", "Les Demoiselles d’Avignon", "Le Vieil Guitariste", "La Femme qui Pleure"],
        "correct": 1,
        "anecdote": "Cette œuvre emblématique, peinte en 1907, est l'une des premières œuvres de Picasso qui a défini le mouvement Cubiste, transformant l'art moderne du XXe siècle."
    },
    {
        "question": "Quel graphiste a créé le logo du succès mondial Coca-Cola ?",
        "options": ["Paul Rand", "Saul Bass", "Frank Mason Robinson", "Milton Glaser"],
        "correct": 2,
        "anecdote": "Frank Mason Robinson a écrit le nom de Coca-Cola en 1885, contribuant à l'identité visuelle intemporelle de la marque emblématique."
    }
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
