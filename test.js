const assert = require('assert');
const scrabble = require('./auxilliary');


describe("Calculates the score of a word in scrabble", () => {
    describe("handles invalid input", () => {
        it("should check if the input string has only alphabets", () =>{
            assert.equal(scrabble.wordScore("123"), "Invalid word!");
        });
    })
    describe("Handles valid input", () => {
        it("returns the score of the word been checked", () => {
            assert.equal(scrabble.wordScore("Game"), 7);
        });
    })
})