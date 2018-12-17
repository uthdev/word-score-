const wordScore = (word) => {
    
    const re = /^[A-Za-z]+$/;
    if(re.test(word)) {
      let score = 0;
      for(let i = 0; i < word.length; i++) {
        switch(true){

          case (/[AEIOULNRST]/i).test(word.charAt(i)):
          score += 1;
          break;

          case (/[DG]/i).test(word.charAt(i)):
          score += 2;
          break;

          case (/[BCMP]/i).test(word.charAt(i)):
          score += 3;
          break;

          case (/[FHVWY]/i).test(word.charAt(i)):
          score += 4;
          break;

          case (/[K]/i).test(word.charAt(i)):
          score += 5;
          break;

          case (/[JX]/i).test(word.charAt(i)):
          score += 8;
          break;

          case (/[QZ]/i).test(word.charAt(i)):
          score += 10;
          break;

        }
      }
      return score;
    }
    return "Invalid word!";

    
}

const displayScore = () => {
    const word = document.getElementById("inputText").value;

    document.getElementById("displayDiv").innerHTML = wordScore(word);
    
}

module.exports = {wordScore};