const startBtn = document.getElementById("start");
const questionDisplay = document.getElementById("question");

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
    displayQuestion();
}

function displayQuestion() {
    gameVars.currentQuestion = questionArray[gameVars.questionNum]["question"];
    gameVars.answerArray = questionArray[gameVars.questionNum]["answers"];
    gameVars.correctAnswer = questionArray[gameVars.questionNum]["correct"];

    document.getElementById("question").innerHTML = gameVars.currentQuestion;
    for (let i = 0; i < gameVars.answerArray.length; i++) {
        if (i == gameVars.correctAnswer) {
            document.getElementById("answer" + [i]).classList.add("correct");
        }
        document.getElementById("answer" + [i]).innerHTML = gameVars.answerArray[i];
    }
}

window.onload = () => {
    startBtn.addEventListener("click", startGame);
};

// Export modules for testing
module.exports = { gameVars, startGame, displayQuestion };