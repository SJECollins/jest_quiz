/**
 * @jest-environment jsdom
 */

const { gameVars, startGame, displayQuestion } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Check initial DOM contents", () => {
    test("Question number element exists and is '0' before game starts", () => {
        expect(document.getElementById("question-num").innerHTML).toBe("0");
    });
    test("Score element exists and is '0' before game starts", () => {
        expect(document.getElementById("score").innerHTML).toBe("0");
    });
    test("Time element exists and is '0' before game starts", () => {
        expect(document.getElementById("score").innerHTML).toBe("0");
    });
    test("Question element exists and is empty before game starts", () => {
        expect(document.getElementById("question").innerHTML).toBe("");
    });
    test("Answer elements exist and are empty before game starts", () => {
        let answerArray = document.getElementsByClassName("answer");
        for (let answer of answerArray) {
            expect(answer.innerHTML).toBe("");
        }
    });
});

describe("Check gameVars object", () => {
    test("Score exists in gameVars", () => {
        expect("score" in gameVars).toBe(true);
    });
    test("Score in gameVars equals 0", () => {
        expect(gameVars.score).toEqual(0);
    });
    test("Time exists in gameVars", () => {
        expect("time" in gameVars).toBe(true);
    });
    test("Time in gameVars equals 0", () => {
        expect(gameVars.time).toEqual(0);
    });
    test("Question number exists in gameVars", () => {
        expect("questionNum" in gameVars).toBe(true);
    });
    test("Question number in gameVars equals 0", () => {
        expect(gameVars.questionNum).toEqual(0);
    });
    test("Current question exists in gameVars", () => {
        expect("currentQuestion" in gameVars).toBe(true);
    });
    test("Current question in gameVars equals an empty string", () => {
        expect(gameVars.currentQuestion).toEqual("");
    });
    test("Correct answer exists in gameVars", () => {
        expect("currentQuestion" in gameVars).toBe(true);
    });
    test("Correct answer in gameVars equals an empty string", () => {
        expect(gameVars.correctAnswer).toEqual("");
    });
    test("Answer array exists in gameVars", () => {
        expect("currentQuestion" in gameVars).toBe(true);
    });
    test("Answer array in gameVars equals an empty array", () => {
        expect(gameVars.answerArray).toEqual([]);
    });
});

describe("Test startGame calls displayQuestion", () => {
    beforeEach(() => {
        gameVars.currentQuestion = "";
        gameVars.correctAnswer = "";
        gameVars.answerArray = [];
        startGame();
    });
    test("Current question is updated", () => {
        expect(gameVars.currentQuestion).toEqual("This is the question");
    });
    test("Correct answer is updated", () => {
        expect(gameVars.correctAnswer).toEqual(3);
    });
    test("Answer array is updated", () => {
        expect(gameVars.answerArray).toEqual(["answer 1", "answer 2", "answer 3", "answer 4"]);
    });
    test("Question in DOM is updated", () => {
        expect(document.getElementById("question").innerHTML).toEqual(gameVars.currentQuestion);
    });
    test("Answers in DOM are updated", () => {
        for (let i = 0; i < 4; i++) {
            expect(document.getElementById("answer" + [i]).innerHTML).toEqual(gameVars.answerArray[i]);
        }
    });
    test("Correct answer to have 'correct' class in DOM", () => {
        expect(document.getElementById("answer" + [gameVars.correctAnswer]).classList).toContain("correct");
    });
});
