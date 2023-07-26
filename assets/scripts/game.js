const startBtn = document.getElementById("start");

// Question array
let questionArray = [
    {
        question: "This is the question",
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4",
        ],
        correct: 3,
    },
];

// Object containing game variables
let gameVars = {
    score: 0,
    time: 0,
    questionNum: 0,
    currentQuestion: "",
    correctAnswer: "",
    answerArray: [],
};

function startGame() {
    console.log("Game starting");
    displayQuestion();
}

function displayQuestion() {
    gameVars.currentQuestion = questionArray[gameVars.questionNum]["question"];
    gameVars.answerArray = questionArray[gameVars.questionNum]["answers"];
    gameVars.correctAnswer = questionArray[gameVars.questionNum]["correct"];
}

window.onload = () => {
    startBtn.addEventListener("click", startGame);
};

// Export modules for testing
module.exports = { gameVars, startGame, displayQuestion };