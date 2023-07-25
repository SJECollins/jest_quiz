/**
 * @jest-environment jsdom
 */

const { gameVars } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Check initial DOM contents", () => {
    test("Question number element exists and is '0' before game starts", () => {
        expect(document.getElementById("questionNum").innerHTML).toBe("0");
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