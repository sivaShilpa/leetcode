/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    // intialize a variable sentArr and assign the split sentence at every space. 
    let sentArr = sentence.split(" ")

    // iterate through dictionary
    for(let i = 0; i < dictionary.length; i++){
        // iterate through each value in sentArr
        for(let j = 0; j < sentArr.length; j++){
            // if dictionary[i] is equal to sentArr[j].slice(0, dictionary[i].length)
            if(dictionary[i] === sentArr[j].slice(0, dictionary[i].length)){
                // assign dictionary[i] to sentArr[j]
                sentArr[j] = dictionary[i] 
            }               
        }
    }      
    
    return sentArr.join(" ")    
};