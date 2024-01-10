
const en = {
    translation: {
        menu: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            cv: 'Resume',
            contact: 'Contact',
            coffee: 'Buy me a ☕'
        },
        multiple: {
            follow: "<b class='purple'>Follow</b> me on",
        },
        home: {
            Hello: "<b class='purple'>Hello</b>",
            MyName: "My name is ",
            im: "I'm",
            listTranslate: ['Developer', 'Designer', 'Programmer'],
            workat: "I <b class='purple'>worked </b> at :",
            myself: {
                introTitle: "Let me <b class='purple'>introduce</b> myself",
                intro: "I discovered IT on a work placement when I was 15, and the creativity and freedom that IT development gives me immediately appealed to me.<br><br> mainly code in <b class='purple'>C#, Javascript, PHP</b>. <br><br>After 4 years at the ETML, from which I graduated with <b class='purple'>a CFC and a professional matriculation diploma.</b><br><br>I'm currently doing my <b class='purple'>my bachelor's degree in IT security</b> at HEIG-VD<br><br>I did various projects during my training and privately.<br>Some are available on my <b class='purple'>Github</b>",
            },
            recommandation: "My <b class='purple'>recommendations</b>",
            listRecommandation: [
                { name: 'Angelica Rosso', designation: 'Research and Development Director', src: 'Assets/image/entreprise/solmani/solmani_logo.png', linkedin: 'https://www.linkedin.com/in/angelicarosso/', content: 'Organized, conscientious, punctual and professional, Mr. Füllemann made a good impression on us. He completed the tasks entrusted to him to our complete satisfaction.' },
            ],
        },
        about: {
            titleMe: "Two or three <b class='purple'>information</b> about me",
            MyCard: "My name is <b class='purple'>Nathan Füllemann</b> and I live in Lausanne, Switzerland. I'm a 20-year-old front and backend developer.<br><br>I started studying computer science at the <b class='purple'>ETML</b> and the fact that we're totally free to develop things appealed to me straight away. After spending 4 years at the school, including a year's <b class='purple'>internship at Solmani SA</b>, I came out with a degree in software development. I came out with a <b class='purple'>CFC in general computer science</b>, with a focus on development, and a <b class='purple'>professional maturity</b>. I'm currently studying for a <b class='purple'>bachelor's degree in IT security</b> at <b class='purple'>HEIG-VD</b>.<br><br> Apart from computing, I like sports, photography and <b class='purple'>electronic music</b>...",
            languageUsed: "The <b class='purple'>programming languages</b> I master",
            computerUsed: "<b class='purple'>The computer</b> I use",
            computerText: "I use a <b class='purple'>MacBook Pro 16</b> with <b class='purple'>16GB of RAM</b> and <b class='purple'>512GB of SSD</b>.",
            outilsUsed: "<b class='purple'>The tools</b> I use",
            logicielUsed: "The <b class='purple'>software</b> I use",
            osUsed: "The <b class='purple'>OS</b> I use",
            pushDone: "Push made on <b class='purple'>Github</b>"
        },
        contact: {
            title: "Interested in <b class='purple'>working together?</b>."
        },
        projects: {
            title: "My <b class='purple'>projects</b>",
            desc: "This page lists some of my personal and professional projects. <b class='purple'>Click on it</b> for more information.",
            all: "All",
            techno: 'Technology used :', 
            titlePerso: "<b class='purple'>Personal</b> Projects",
            titlePro: "<b class='purple'>Professional</b> Projects",
            titleSchool: "<b class='purple'>School</b> Projects",
            liste: [
                {
                    "id": 1,
                    "title": "Jali Bot",
                    "tech": ["NodeJS", "Discord.JS"],
                    "github": "https://github.com/Fullann/JALI-BOT",
                    "demoLink": "",
                    "desc": "asd",
                    "imgname": "",
                    "text": "<h1 id=\"jali-bot\">Jali Bot</h1><h2 id=\"introduction\">Introduction</h2><p>Ce projet a été réalisé dans le cadre du confinement en 2020. En recherche de choses à faire, je me suis penché sur les bots Discord car à cause du confinement, j'étais assez souvent sur cette application. Malheureusement, ce projet n'est pas encore terminé pour le moment.</p><h2 id=\"instalation\">Installation</h2><p>Il vous suffit de cloner le répertoire</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/JALI-BOT.git</span></code></pre><p>Installer les dépendances</p><pre><code>npm <span class=\"hljs-built_in\">run</span> <span class=\"hljs-built_in\">setup</span></code></pre><p>Puis copiez le .env.example</p><pre><code><span class=\"hljs-selector-tag\">cp</span> <span class=\"hljs-selector-class\">.env</span><span class=\"hljs-selector-class\">.example</span> <span class=\"hljs-selector-class\">.env</span></code></pre><p>À l'intérieur, configurez-le selon vos préférences</p><p>Puis démarrez le projet</p><pre><code>npm <span class=\"hljs-keyword\">run</span><span class=\"bash\"> start</span></code></pre><p>Et enjoy ;)</p>"

                },]
        }
    }
}
const fr = {
    translation: {
        menu: {
            home: 'Acceuil',
            about: 'À propos',
            projects: 'Projets',
            cv: 'CV',
            contact: 'Contacter',
            coffee: 'Me soutenir !'
        },
        multiple: {
            follow: "me <b class='purple'>retouver</b> sur",
        },
        home: {
            Hello: "<b class='purple'>Bonjour</b>",
            MyName: "Mon nom est ",
            im: 'Je suis',
            listTranslate: ['Développeur', 'Designer', 'Programmeur'],
            workat: "J'ai <b class='purple'>travaillié</b> chez :",
            myself: {
                introTitle: "JE ME <b class='purple'>PRésente</b>",
                intro: "J'ai découvert l'<b class='purple'>informatique</b> lors d'un stage fait à 15ans et la création et la liberté que permet le <b class='purple'>developpent</b> informatique m'ont directement plu.<br><br>Je code en <b class='purple'>C#, Javascript, PHP</b> principalement.<br><br>Après 4 ans a l'ETML d'où je ressort avec un <b class='purple'>CFC et une matu proffesionnel</b><br><br>Je suis acctuelement entrain de passer mon <b class='purple'>bachelor en sécurité informatique</b> à l'HEIG-VD<br><br>J'ai fais différents projets lors de ma formation et en privé.<br>Certains sont disonible sur mon <b class='purple'>Github</b>",
            },
            recommandation: "Mes <b class='purple'>recommandations</b>",
            listRecommandation: [
                { name: 'Angelica Rosso', designation: 'Directrice Recherche et Developpement', src: 'Assets/image/entreprise/solmani/solmani_logo.png', linkedin: 'https://www.linkedin.com/in/angelicarosso/', content: 'Organisé, concencieux, ponctuel et professionnel, Monsieur Füllemann, nous a fait une bonne impression. Il s\u0027est aquitté des tâches confiées à notre entière satisfaction.' },
            ],
        },
        about: {
            titleMe: "Deux trois <b class='purple'>informations</b> sur moi",
            MyCard: "Je m'appelle <b class='purple'>Nathan Füllemann</b> et je vis à Lausanne en Suisse. Je suis un jeune front et backend devloppeur de 20ans.<br><br>J'ai commencé l'informatique à <b class='purple'>l'ETML</b> et le fait que l'on soit totallement libre en developpement m'a tout de suite plu. J'ai acquis de nombreuses compétences par mes propres moyens, notamment en suivant des tutoriels sur Internet.Après avoir passer 4 ans dans cette école avec un stage d'une année chez <b class='purple'> Solmani SA</b>. J'en suis ressorti avec un  <b class='purple'>CFC d'informaticien</b> généraliste orienté développement et une <b class='purple'> maturité professionnel</b>.<br><br>Je suis acctuellement à <b class='purple'>l'HEIG-VD</b> pour faire un <b class='purple'>bachelor en sécurité informatique</b>.<br><br>Sinon a part l'informatique j'aime faire du sport, faire de la photographie et faire de la  <b class='purple'>musique électronique</b> ...",
            computerUsed: "Mon <b class='purple'>ordinateur</b>",
            computerText: "J'utilise un <b class='purple'>MacBook Pro</b> qui me permet de pouvoir programmer dans n'importe quelle condition et à n'importe quel endroit. J'ai aussi une tour sous <b class='purple'>Windows</b> 11 chez moi.<br>Je possède aussi un <b class='purple'>NAS</b> sous OpenMediaVault avec docker ce qui me permet de gérer bon nombre d'applications tel que Nextcloud,Jellyfin,Pihole.<br>De plus tous les sites web fait pour des clients sont héberger sur un <b class='purple'>VPS</b> sous Ubuntu gérer avec CloudPannel.<br>En bref je touche à toute sorte de système d'explotation et ne m'arrête jamais de tester de nouvelles choses.",
            languageUsed: "Les <b class='purple'>languages de programation</b> que je métrise",
            outilsUsed: "Les <b class='purple'>outils</b> que je métrise",
            logicielUsed: "Les <b class='purple'>logiciels</b> que j'utilise",
            osUsed: "Les <b class='purple'>OS</b> que j'utilise",
            pushDone: "Push fait sur <b class='purple'>Github</b>"
        },
        contact: {
            title: "Intéressé à <b class='purple'>travailler ensemble ?</b>"
        },
        projects: {
            title: "Mes <b class='purple'>projets</b>",
            desc: "Cette page énumère mes projets personnels et professionnels. <br>Pour plus d'information <b class='purple'>cliquer dessus.</b>",
            all: 'Tous',
            techno: 'Technologie utilisée :',
            titlePerso: "Projets  <b class='purple'>Personnels</b>",
            titlePro: "Projets  <b class='purple'>Professionnels</b>",
            titleSchool: "Projets fait à  <b class='purple'>l'école</b>",
            liste: [
                {
                    "id": 1,
                    "title": "Jali Bot",
                    "tech": ["NodeJS", "Discord.JS"],
                    "category": 'personnel',
                    "github": "https://github.com/Fullann/JALI-BOT",
                    "demoLink": "",
                    "desc": "Bot discord de managment de server",
                    "imgname": "",
                    "text": "<h1 id=\"jali-bot\">Jali Bot</h1><h2 id=\"introduction\">Introduction</h2><p>Ce projet a été réalisé dans le cadre du confinement en 2020. En recherche de choses à faire, je me suis penché sur les bots Discord car à cause du confinement, j'étais assez souvent sur cette application. Malheureusement, ce projet n'est pas encore terminé pour le moment.</p><h2 id=\"instalation\">Installation</h2><p>Il vous suffit de cloner le répertoire</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/JALI-BOT.git</span></code></pre><p>Installer les dépendances</p><pre><code>npm <span class=\"hljs-built_in\">run</span> <span class=\"hljs-built_in\">setup</span></code></pre><p>Puis copiez le .env.example</p><pre><code><span class=\"hljs-selector-tag\">cp</span> <span class=\"hljs-selector-class\">.env</span><span class=\"hljs-selector-class\">.example</span> <span class=\"hljs-selector-class\">.env</span></code></pre><p>À l'intérieur, configurez-le selon vos préférences</p><p>Puis démarrez le projet</p><pre><code>npm <span class=\"hljs-keyword\">run</span><span class=\"bash\"> start</span></code></pre><p>Et enjoy ;)</p>"

                },
                {
                    "id": 2,
                    "title": "Jali Site",
                    "tech": ["VueJS", "Tailwind", "NodeJS"],
                    "category": 'personnel',
                    "github": "https://github.com/Fullann/JALI-SITE",
                    "demoLink": "",
                    "desc": "Site d'administration d'un bot discord avec api entre le site et le bot qui permet l'insertion de donnée dans un db.",
                    "imgname": "",
                    "text": "<h1 id=\"jali-site\">Jali Site</h1><h2 id=\"introduction\">Introduction</h2><p>Ce projet a été réalisé dans le cadre de la suite de mon premier gros projet en informatique. Jali, mon bot Discord de management de serveur. Malheureusement, ce projet n'est pas encore terminé pour le moment, ainsi que le bot Jali.</p><h2 id=\"instalation\">Installation</h2><p>Il vous suffit de cloner le répertoire</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/JALI-SITE.git</span></code></pre><p>Installer les dépendances</p><pre><code>npm <span class=\"hljs-keyword\">run</span><span class=\"bash\"> init</span></code></pre><p>Puis copiez le .env.example</p><pre><code><span class=\"hljs-selector-tag\">cp</span> <span class=\"hljs-selector-class\">.env</span><span class=\"hljs-selector-class\">.example</span> <span class=\"hljs-selector-class\">.env</span></code></pre><ul><li>Ensuite, à l'intérieur, mettez l'id de votre bot et le lien vers l'API</li></ul><p>Puis démarrez le projet</p><pre><code>npm <span class=\"hljs-keyword\">run</span><span class=\"bash\"> serve</span></code></pre><p>Et enjoy ;)</p>"
                },
                {
                    "id": 3,
                    "title": "PortfolioV1",
                    "category": 'personnel',
                    "tech": ["VueJS", "Tailwind", "NodeJS", "Fierbase"],
                    "github": "https://github.com/Fullann/PortfolioV1",
                    "demoLink": "",
                    "desc": "Site de présentation de moi-même",
                    "imgname": "portfoliov1.png",
                    "text": "<h1 id=\"portfoliov1\">PortfolioV1</h1><h2 id=\"introduction\">Introduction</h2><p>Ce projet a été réalisé dans le cadre de la fin de l'ETML et de la recherche d'emplois. Ce portfolio est complètement personnalisable. Tous les addons (i18n, blog, project, review, cv, connexion, etc.) peuvent être activés ou désactivés.</p><h2 id=\"instalation\">Installation</h2><h3 id=\"pour-le-developpement\">Pour le développement</h3><p>Il vous suffit de cloner le répertoire</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/Portfolio.git</span></code></pre><p>Installer les dépendances (Ce projet n'a pas été mis à jour récemment, donc il peut y avoir des problèmes avec les nouvelles versions de NodeJS. Le mien est 14.1.0)</p><pre><code>yarn <span class=\"hljs-keyword\">install</span></code></pre><p>Configurer votre base de données Firebase</p><pre><code><span class=\"hljs-comment\">// Copier le .env.example</span>cp <span class=\"hljs-selector-class\">.env</span><span class=\"hljs-selector-class\">.example</span> .env</code></pre><ul><li>Introduire les données de connexion mises sur <a href=\"https://firebase.google.com/\">Firebase</a> (N'oubliez pas d'activer l'authentification et les types de connexion que vous souhaitez. Sur le projet seulment en anonyme et Google sont mis) dans le .env.</li><li>Configurer comme vous le souhaitez le config.js</li></ul><p>Puis démarrez le projet</p><pre><code><span class=\"hljs-attribute\">yarn dev</span></code></pre><p>Et profitez ;)</p><h3 id=\"pour-la-production\">Pour la production</h3><p>Pour le mettre en production, commencez par cloner</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/Portfolio.git</span></code></pre><p>Installer les dépendances (Ce projet n'a pas été mis à jour récemment, donc il peut y avoir des problèmes avec les nouvelles versions de NodeJS. Le mien est 14.16.0)</p><pre><code>yarn <span class=\"hljs-keyword\">install</span></code></pre><p>Configurer votre base de données Firebase</p><pre><code><span class=\"hljs-comment\">// Copier le .env.example</span>cp <span class=\"hljs-selector-class\">.env</span><span class=\"hljs-selector-class\">.example</span> .env</code></pre><p>Ensuite, construisez l'application</p><pre><code><span class=\"hljs-attribute\">yarn build</span></code></pre><p>Ensuite, générez l'application</p><pre><code>yarn <span class=\"hljs-keyword\">generate</span></code></pre><p>Ensuite, utilisez le package serve qui permet de créer le serveur pour l'application</p><pre><code><span class=\"hljs-symbol\">yarn</span> <span class=\"hljs-meta\">global</span> <span class=\"hljs-keyword\">add </span>serve</code></pre><p>Enfin, pour lancer l'application</p><pre><code>serve <span class=\"hljs-_\">-s</span> dist</code></pre><h2 id=\"configuration\">Configuration</h2><h2 id=\"config-du-template\">Config du template</h2><p>Dans le fichier \"/config.js \" permet de modifier toutes les informations du site </p><h3 id=\"ajouter-une-langue\">Ajouter une langue</h3><p>Dans le fichier /nuxt.config.js sous la partie i18n, ajoutez ceci sous locales:</p><pre><code> { <span class=\"hljs-attribute\">code</span>: <span class=\"hljs-string\">'fr'</span>, name: <span class=\"hljs-string\">'Français'</span>, file: <span class=\"hljs-string\">'fr_Fr.js'</span> },</code></pre><p>Créez dans le dossier lang un fichier qui se nomme avec le nom de la langue.js et mettez ceci à l'intérieur:</p><pre><code><span class=\"hljs-comment\">// /lang/fr_FR.js</span><span class=\"hljs-keyword\">import</span> <span class=\"hljs-built_in\">config</span> from <span class=\"hljs-string\">'../config'</span><span class=\"hljs-keyword\">export</span> <span class=\"hljs-built_in\">default</span> <span class=\"hljs-built_in\">config</span>.strings.fr_FR</code></pre><p>Et dans le fichier /config.js, ajoutez la traduction pour chaque champ</p><pre><code> <span class=\"hljs-attribute\">fr_FR</span>: {<span class=\"hljs-attribute\">download</span>: <span class=\"hljs-string\">'Télécharger'</span>,<span class=\"hljs-attribute\">nav</span>: {<span class=\"hljs-attribute\">home</span>: <span class=\"hljs-string\">'Acceuil'</span>,<span class=\"hljs-attribute\">blog</span>: <span class=\"hljs-string\">'Blog'</span>,<span class=\"hljs-attribute\">projects</span>: <span class=\"hljs-string\">'Projets'</span>,<span class=\"hljs-attribute\">uses</span>: <span class=\"hljs-string\">'Setup'</span>,<span class=\"hljs-attribute\">resume</span>: <span class=\"hljs-string\">'CV'</span>,<span class=\"hljs-attribute\">buyMeACoffee</span>: <span class=\"hljs-string\">'Buy me a ☕'</span>,<span class=\"hljs-attribute\">signIn</span>: <span class=\"hljs-string\">'Connexion'</span>,<span class=\"hljs-attribute\">signOut</span>: <span class=\"hljs-string\">'Déconnexion'</span> },<span class=\"hljs-attribute\">hero</span>: {<span class=\"hljs-attribute\">iBlogTech</span>: <span class=\"hljs-string\">'je fais des expérience'</span>,<span class=\"hljs-attribute\">haveALook</span>: <span class=\"hljs-string\">'Jetez y un coup d'œil'</span>,<span class=\"hljs-attribute\">friendlyNeighborhood</span>: <span class=\"hljs-string\">'Je suis un'</span>,<span class=\"hljs-attribute\">description</span>: <span class=\"hljs-string\">'Je suis un jeune developper frontend. Je suis étudiant à l'ETML et dans mon temps libre, je code des projets personnels.'</span>,<span class=\"hljs-attribute\">words</span>: [<span class=\"hljs-string\">'développeur'</span>, <span class=\"hljs-string\">'designer'</span>, <span class=\"hljs-string\">'programmeur'</span>],<span class=\"hljs-attribute\">work</span>: <span class=\"hljs-string\">\"A travaillé chez\"</span> },<span class=\"hljs-attribute\">githubCalendar</span>: {<span class=\"hljs-attribute\">header</span>: <span class=\"hljs-string\">'Contributions'</span>,<span class=\"hljs-attribute\">subtext</span>: <span class=\"hljs-string\">'Calendrier Github'</span> },<span class=\"hljs-attribute\">blog</span>: {<span class=\"hljs-attribute\">header</span>: <span class=\"hljs-string\">'Blog'</span>,<span class=\"hljs-attribute\">subtext</span>: <span class=\"hljs-string\">'Je fais des essais en informatique et je vous les racontes.'</span> },<span class=\"hljs-attribute\">recentBlog</span>: {<span class=\"hljs-attribute\">header</span>: <span class=\"hljs-string\">'Dernières publications'</span>,<span class=\"hljs-attribute\">subtext</span>: <span class=\"hljs-string\">'Mes nouvelles expériences'</span> },<span class=\"hljs-attribute\">uses</span>: {<span class=\"hljs-attribute\">header</span>: <span class=\"hljs-string\">'Setup'</span>,<span class=\"hljs-attribute\">subtext</span>: <span class=\"hljs-string\">'un résumé rapide de ce que j'utilise quotidiennement pour coder'</span> },<span class=\"hljs-attribute\">projects</span>: {<span class=\"hljs-attribute\">header</span>: <span class=\"hljs-string\">'Projets'</span>,<span class=\"hljs-attribute\">subtext</span>: <span class=\"hljs-string\">'Cette page énumère certains de mes projets personnels et professionnels. chaque projet a une description, cliquez sur le titre pour le lire'</span> },<span class=\"hljs-attribute\">recommendations</span>: {<span class=\"hljs-attribute\">header</span>: <span class=\"hljs-string\">'Recommandations'</span>,<span class=\"hljs-attribute\">subtext</span>: <span class=\"hljs-string\">'Ce qu'on a dit de moi'</span> },<span class=\"hljs-attribute\">error</span>:{<span class=\"hljs-attribute\">text</span>:<span class=\"hljs-string\">'Oh oh ! On dirait que tu t'es perdu. Retournez à la page d'accueil si vous l'osez !'</span>,<span class=\"hljs-attribute\">button</span>:<span class=\"hljs-string\">'J'ose!'</span> } }"
                },
                {
                    "id": 4,
                    "title": "PortfolioV2",
                    "tech": ["React", "NodeJS"],
                    "category": 'personnel',
                    "github": "https://github.com/Fullann/PortfolioV2",
                    "demoLink": "https://me.fullann.ch",
                    "desc": "Site de présentation de moi-même",
                    "imgname": "portfoliov2.png",
                    "text": ""
                },
                {
                    "id": 5,
                    "title": "SerialPortFramesSender",
                    "tech": ["C#"],
                    "category": 'personnel',
                    "github": "https://github.com/Fullann/SerialPortFramesSender",
                    "demoLink": "",
                    "desc": "Logiciel d'envoie de trame en hexadécimal",
                    "imgname": "",
                    "text": "<h1 id=\"serialportframessender\">SerialPortFramesSender</h1><h2 id=\"introduction\">Introduction</h2><p>Ce projet a été réalisé dans le cadre de tests sur des signaux d'autoroute. Je devais en comprendre le fonctionnement et le système d'envoi et de réception de trame.</p><h2 id=\"instalation\">Installation</h2><p>Il vous suffit de cloner le répertoire</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/SerialPortFramesSender.git</span></code></pre><p>Puis de double cliquer sur le .sln en ayant fait attention au préalable d'avoir Visual Studio installé sur votre machine. Et le tour est joué ;)</p><h2 id=\"configuration\">Configuration</h2><p>Toute la configuration du port série est dans SerialPortFramesSender/TestSerialCom/SerialSender.cs.</p><pre><code><span class=\"hljs-attr\">PortName</span> = port,        // Port pour la communication\n<span class=\"hljs-attr\">BaudRate</span> = <span class=\"hljs-number\">9600</span>,        // Set Baud rate = <span class=\"hljs-number\">9600</span>\n<span class=\"hljs-attr\">DataBits</span> = <span class=\"hljs-number\">8</span>,           // Number of data bits = <span class=\"hljs-number\">8</span>\n<span class=\"hljs-attr\">Parity</span> = Parity.Even,   // No parity\n<span class=\"hljs-attr\">StopBits</span> = StopBits.One, // One stop bit\n<span class=\"hljs-attr\">ReadTimeout</span> = <span class=\"hljs-number\">500</span>,       // Time for read \n<span class=\"hljs-attr\">WriteTimeout</span> = <span class=\"hljs-number\">500</span>       // Time to write\n</code></pre><p>Ces constantes ont été utilisées car c'était les indications que le fournisseur nous avait communiquées.</p>"
                },
                {
                    "id": 6,
                    "title": "TodoList",
                    "tech": ["React", "NodeJS", "Fierbase"],
                    "category": 'personnel',
                    "github": "https://github.com/Fullann/TodoList",
                    "demoLink": "",
                    "desc": "Site web pour créer une application de todo list complétement customisable pour chaqu'un.",
                    "imgname": "",
                    "text": "<h1 id=\"todolist\">TodoList</h1><h2 id=\"introduction\">Introduction</h2><p>Ce projet a été réalisé dans le cadre de mon organisation personnelle 😅. Grâce à ce projet, je ne perds pas le fil des mes tâches et obligations dans ma vie personnelle. Grâce à cette todolist, on peut créer plusieurs tableaux, plusieurs tâches ainsi que la personnaliser complètement.</p><h2 id=\"instalation\">Installation</h2><p>Il vous suffit de cloner le répertoire</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/TodoList.git</span></code></pre><p>Installer les dépendances (Ce projet n'a pas été maintenu à jour donc possibilité de crash avec les nouvelles versions de NodeJS, la mienne 14.1.0)</p><pre><code>yarn <span class=\"hljs-keyword\">install</span></code></pre><p>Configurer votre base de données Firebase</p><pre><code><span class=\"hljs-comment\">// Copier le .env.example</span> cp <span class=\"hljs-selector-class\">.env</span><span class=\"hljs-selector-class\">.example</span> .env</code></pre><p>Introduire les données de connexion mises sur <a href=\"https://firebase.google.com/\">Firebase</a> (N'oubliez pas d'activer l'authentification et les types de connexion que vous souhaitez. Sur le projet, seulment l'anonyme et Google sont mis) dans le .env.<br> Puis démarrez le projet</p><pre><code>yarn <span class=\"hljs-literal\">start</span></code></pre><p>Et enjoy ;)</p><h3 id=\"ajouter-des-mode-de-connexion\">Ajouter des modes de connexion</h3><p>Dans le fichier /app/routes/signIn/Controller.js, ajoutez ceci pour chaque nouveau mode de connexion (ici Github)</p><pre><code> signInWithGitHub(e) { e.preventDefault(); <span class=\"hljs-keyword\">let</span> provider = <span class=\"hljs-function\"><span class=\"hljs-keyword\">new</span> <span class=\"hljs-title\">firebase</span>.<span class=\"hljs-title\">auth</span>.<span class=\"hljs-title\">GithubAuthProvider</span>(); <span class=\"hljs-title\">this</span>.<span class=\"hljs-title\">signInWithProvider</span>(provider); }</span> </code></pre><p>et dans le fichier /app/routes/signIn/index.js ajoutez le bouton comme ceci</p><pre><code> &lt;LinkButton <span class=\"hljs-keyword\">mod</span>=<span class=\"hljs-string\">\"login-primary\"</span> href=<span class=\"hljs-string\">\"#\"</span> onClick=<span class=\"hljs-string\">\"signInWithGitHub\"</span>&gt; SignIn <span class=\"hljs-keyword\">with</span> Github &lt;/LinkButton&gt; </code></pre><p>Avec le nom de la méthode mis ci-dessus</p>"
                },
                {
                    "id": 7,
                    "title": "Yahtzee",
                    "category": 'school',
                    "tech": ["C#", "Xamarin"],
                    "github": "https://github.com/Fullann/SerialPortFramesSender",
                    "demoLink": "",
                    "desc": "Jeux du Yahtzee fais en Xamrin/C# pour un projet d'application mobile à l'ETML",
                    "imgname": "",
                    "text": "<h1 id=\"yahtzee\">Yahtzee</h1><h2 id=\"introduction\">Introduction</h2><p>Ce projet a été réalisé dans le cadre d'un projet d'application mobile à l'ETML. Comme contrainte, nous étions obligés d'utiliser du Xamarin. Ce projet est le jeu du Yahtzee complètement créé par moi.</p><h2 id=\"instalation\">Installation</h2><p>Il vous suffit de cloner le répertoire</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/Yahtzee.git</span></code></pre><p>Puis de double-cliquer sur le .sln en ayant fait attention au préalable d'avoir Visual Studio installé sur votre machine avec l'extension pour Xamarin. Et le tour est joué, il ne vous reste plus qu'à build l'application sur votre téléphone Android et à vous les parties de Yahtzee ;)</p>"
                },
                {
                    "id": 8,
                    "title": "Yuki-Decrypt",
                    "tech": ["C#"],
                    "category": 'personnel',
                    "github": "https://github.com/Fullann/YUKI-Decrypt",
                    "demoLink": "",
                    "desc": "Logiciel de décryption de hash (MD5/SHA1/SHA256) avec brutforce et rainbow table",
                    "imgname": "",
                    "text": "<h1 id=\"yuki-decrypt\">YUKI-Decrypt</h1><h2 id=\"introduction\">Introduction</h2><p>Ce projet a été réalisé dans le cadre d'un projet de cybersécurité à l'ETML. Nous avions le choix entre une multitude de projets qui touchent de près ou de loin à la sécurité informatique. Pour ma part, le craquage de mot de passe m'a toujours plus, donc je me suis intéressé aux différents types de hachage (ici 3 : MD5/SHA1/SHA256) avec un système de brute force et en parallèle, sur un autre thread, un craquage avec plusieurs rainbow tables des mots de passe les plus utilisés en 2021.</p><h2 id=\"instalation\">Installation</h2><p>Il vous suffit de cloner le répertoire</p><pre><code>git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">https://github.com/Fullann/YUKI-Decrypt.git</span></code></pre><p>Puis de double-cliquer sur le .sln en ayant fait attention au préalable d'avoir Visual Studio installé sur votre machine. Et le tour est joué, à vous le craquage de mot de passe ;)</p>"
                },
                {
                    "id": 9,
                    "title": "Runéo",
                    "tech": ["PHP", "Laravel"],
                    "category": 'school',
                    "github": "",
                    "demoLink": "",
                    "desc": "Projet pour l'administration des runs d'un festival en locurance le Paléo et les Eurockennes de Belfort",
                    "imgname": "",
                    "text": ""
                },
                {
                    "id": 10,
                    "title": "Art-Bleu",
                    "tech": ["WordPress"],
                    "category": 'professionnel',
                    "github": "",
                    "demoLink": "https://art-bleu.ch",
                    "desc": "Site web pour la partie art-therapie de l'Espace Chamarel de Vufflens-la-Ville",
                    "imgname": "art-bleu.ch.png",
                    "text": ""
                },
                {
                    "id": 11,
                    "title": "Vufflens-la-Gym",
                    "tech": ["WordPress"],
                    "category": 'professionnel',
                    "github": "",
                    "demoLink": "https://vufflens-la-gym.ch",
                    "desc": "Site web de la société de gym de Vufflens-la-Ville",
                    "imgname": "vufflens-la-gym.ch.png",
                    "text": ""
                },
                {
                    "id": 12,
                    "title": "Youtube Downloader",
                    "tech": ["NodeJS", "React"],
                    "category": 'personnel',
                    "github": "https://github.com/Fullann/YoutubeDownloader",
                    "demoLink": "https://yt.fullann.ch/",
                    "desc": "Site web pour télécharger des vidéos de Youtube",
                    "imgname": "ytdowloader.png",
                    "text": ""
                },
                {
                    "id": 13,
                    "title": "MeloDroid",
                    "tech": ["NodeJS", "Discord.JS"],
                    "category": 'personnel',
                    "github": "https://github.com/Fullann/MeloDroid",
                    "demoLink": "",
                    "desc": "Bot discord de musique",
                    "imgname": "melodroid.jpg",
                    "text": "",
                    "lastupdate": "2023-10-10"
                }
            ]
        }
    }
}


export { en, fr };