const wordScore = (word) => {
    const alphabet = {
        A: 1,
        B: 3,
        C: 3,
        D: 2,
        E: 1,
        F: 4,
        G: 2,
        H: 4,
        I: 1,
        J: 8,
        K: 5,
        L: 1,
        M: 3,
        N: 1,
        O: 1,
        P: 3,
        Q: 10,
        R: 1,
        S: 1,
        T: 1,
        U: 1,
        V: 4,
        W: 4,
        X: 8,
        Y: 4,
        Z: 10
    }
    const re = /^[A-Za-z]+$/;
    if(re.test(word)) {
        let score = 0;
        const wordCap = word.toUpperCase()
        for (let i = 0; i < wordCap.length; i++) {
            score += alphabet[wordCap.charAt(i)] || 0;
        }
        return score;

    }
    return "invalid word!";
}

const displayScore = () => {
    const word = document.getElementById('inputText').value;
    document.getElementById("displayDiv").innerHTML = wordScore(word);  
}

module.exports = {wordScore};