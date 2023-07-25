/**
 * @jest-environment jsdom
 */

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Check DOM contents", () => {
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