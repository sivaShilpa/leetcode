/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    // assign the first word to variable firstWord
    let firstWord = words[0];
    // initialize an array called retVal
    let retVal = [];
    // iterate through the firstWord
    for(let i = 0; i < firstWord.length; i++){
        // have a boolean variable called isLetterInWord initialized as false
        let isLetterInWord = false;
        // for each letter in the firstWord, iterate through each word in the words array and see if the letter is included in the word
        for(let j = 0; j < words.length; j++){
            // if yes then change isLetterInWord to true then splice the letter from the word in the word array
            if(words[j].includes(firstWord[i])){
                isLetterInWord = true;
                let wordArr = words[j].split("");
                let ind = wordArr.indexOf(firstWord[i]);
                words[j] = wordArr.join("").slice(0, ind) + wordArr.join("").slice(ind+1)
            }            
            // if no then change isLetterInWord to false and break from the loop
            else{
                isLetterInWord = false;
                break;
            }

        } 
        // if the isLetterInWord is true then push the letter to retVal else continue
        if(isLetterInWord){
            retVal.push(firstWord[i]);
        }

    }
        

    return retVal;    
};