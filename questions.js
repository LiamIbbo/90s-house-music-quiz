/* ========================================
   90'S HOUSE MUSIC QUIZ QUESTIONS
   15 questions - 10 will be randomly selected each quiz
   ======================================== */

const musicQuestions = [
    {
        question: "Which French duo released the iconic house track 'Around the World' in 1997?",
        answers: [
            "Air",
            "Daft Punk",
            "Justice",
            "Cassius"
        ],
        correctAnswer: 1,
        explanation: "Daft Punk released 'Around the World' from their groundbreaking debut album 'Homework' in 1997, featuring the repetitive vocal hook that became instantly recognizable."
    },
    {
        question: "What was the name of the legendary Chicago house music club that became synonymous with the genre in the late 80s and early 90s?",
        answers: [
            "The Warehouse",
            "Paradise Garage",
            "Ministry of Sound",
            "Hacienda"
        ],
        correctAnswer: 0,
        explanation: "The Warehouse in Chicago, where DJ Frankie Knuckles played, is literally where 'house music' got its name. The club was fundamental to the birth of the genre."
    },
    {
        question: "Which 1990 track by Nomad sampled the vocals 'I wanna give you devotion' and became a massive club hit?",
        answers: [
            "(I Wanna Give You) Devotion",
            "Ride on Time",
            "Show Me Love",
            "Finally"
        ],
        correctAnswer: 0,
        explanation: "'(I Wanna Give You) Devotion' by Nomad was a huge crossover hit in 1990, combining house beats with catchy pop sensibilities and memorable piano riffs."
    },
    {
        question: "Robin S had a massive house anthem in 1993. What was it called?",
        answers: [
            "Finally",
            "Show Me Love",
            "Missing",
            "Gypsy Woman"
        ],
        correctAnswer: 0,
        explanation: "'Finally' by Robin S became one of the biggest house anthems of the 90s, with its powerful vocals and infectious piano house production."
    },
    {
        question: "Which Manchester club became the epicenter of UK acid house and rave culture in the late 80s and early 90s?",
        answers: [
            "Cream",
            "The Hacienda",
            "Fabric",
            "Renaissance"
        ],
        correctAnswer: 1,
        explanation: "The Hacienda, owned by Factory Records and New Order, was THE club for acid house in the UK, defining the Madchester scene and rave culture."
    },
    {
        question: "Masters At Work was a production duo that defined 90s house. Who were they?",
        answers: [
            "Armand Van Helden & Roger Sanchez",
            "Kenny Dope & Louie Vega",
            "David Morales & Frankie Knuckles",
            "Todd Terry & Tony Humphries"
        ],
        correctAnswer: 1,
        explanation: "Masters At Work (MAW) was the legendary production team of 'Little' Louie Vega and Kenny 'Dope' Gonzalez, who shaped the sound of New York house music throughout the 90s."
    },
    {
        question: "What year did Daft Punk release their debut album 'Homework'?",
        answers: [
            "1995",
            "1996",
            "1997",
            "1998"
        ],
        correctAnswer: 2,
        explanation: "'Homework' was released in 1997 and included instant classics like 'Around the World', 'Da Funk', and 'Burnin', helping to define French house music."
    },
    {
        question: "Which Orbital track from 1991 became an anthem of the early 90s rave scene?",
        answers: [
            "Belfast",
            "Chime",
            "Halcyon",
            "Satan"
        ],
        correctAnswer: 1,
        explanation: "'Chime' was Orbital's breakthrough single in 1990, becoming a massive hit and one of the defining tracks of early 90s British rave culture."
    },
    {
        question: "Crystal Waters had a huge house hit in 1991. What was it called?",
        answers: [
            "Gypsy Woman (She's Homeless)",
            "100% Pure Love",
            "Finally",
            "Show Me Love"
        ],
        correctAnswer: 0,
        explanation: "'Gypsy Woman (She's Homeless)' became a worldwide hit with its iconic 'la da dee la da da' vocal hook and deep house groove."
    },
    {
        question: "Which record label, founded in 1985, became synonymous with Detroit techno and influenced house music globally?",
        answers: [
            "Strictly Rhythm",
            "Nervous Records",
            "Transmat",
            "Defected"
        ],
        correctAnswer: 2,
        explanation: "Transmat, founded by Derrick May, was instrumental in defining the Detroit techno sound that heavily influenced house music throughout the 90s."
    },
    {
        question: "What was the name of the iconic house music track by Lil Louis that featured a famous 'orgasmic' vocal breakdown?",
        answers: [
            "French Kiss",
            "Love Can't Turn Around",
            "Your Love",
            "Baby Wants to Ride"
        ],
        correctAnswer: 0,
        explanation: "'French Kiss' by Lil Louis (1989) became legendary for its extended breakdown featuring breathy, sensual vocals that pushed boundaries in club music."
    },
    {
        question: "Which DJ and producer is known as the 'Godfather of House Music'?",
        answers: [
            "Larry Levan",
            "Frankie Knuckles",
            "David Morales",
            "Tony Humphries"
        ],
        correctAnswer: 1,
        explanation: "Frankie Knuckles earned the title 'Godfather of House Music' for his pioneering work at The Warehouse in Chicago, literally creating the genre."
    },
    {
        question: "What was the name of the 1995 hit by Moloko that became a house music staple?",
        answers: [
            "Sing It Back",
            "Fun for Me",
            "The Time Is Now",
            "Forever More"
        ],
        correctAnswer: 1,
        explanation: "'Fun for Me' was Moloko's debut single in 1995, featuring Róisín Murphy's distinctive vocals over a funky house beat, though 'Sing It Back' (1998) became their biggest hit."
    },
    {
        question: "Which New York club, run by Larry Levan, was hugely influential on house music despite closing in 1987?",
        answers: [
            "Studio 54",
            "Paradise Garage",
            "The Loft",
            "Shelter"
        ],
        correctAnswer: 1,
        explanation: "Paradise Garage (1977-1987) and DJ Larry Levan's revolutionary mixing style had a massive influence on house music's development, inspiring the 'garage house' subgenre."
    },
    {
        question: "MK (Marc Kinchen) was famous for his remixing style in the 90s. What was his signature production technique called?",
        answers: [
            "The MK Dub",
            "Chopped & Screwed",
            "The Chop",
            "Filter House"
        ],
        correctAnswer: 0,
        explanation: "The 'MK Dub' became Marc Kinchen's signature style, featuring chopped-up vocals, heavy bass lines, and funky percussion that defined 90s US house music."
    }
];

// Shuffle function to randomize questions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Function to get 10 random questions
function getRandomQuestions(count = 10) {
    const shuffled = shuffleArray(musicQuestions);
    return shuffled.slice(0, count);
}