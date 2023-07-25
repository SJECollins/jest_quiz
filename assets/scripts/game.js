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
        correct: "answer 1",
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

// Export modules for testing
module.exports = { gameVars, };