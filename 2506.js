var similarPairs = function(words) {
    let retVal = 0
    let lettersInFirst = []
    let lettersInSecond = []

    for(let i = 0; i<words.length-1; i++){
        lettersInFirst = []
        for(let k = 0 ; k<words[i].length; k++){
            if(!lettersInFirst.includes(words[i][k])){
                lettersInFirst.push(words[i][k])
            }
        }
        lettersInFirst.sort()
        for(let j = i+1; j<words.length; j++){
            if(i !== j){
                lettersInSecond = []
                for(let l = 0 ; l<words[j].length; l++){
                    if(!lettersInSecond.includes(words[j][l])){
                        lettersInSecond.push(words[j][l])
                    }
                }
                lettersInSecond.sort()
                
                if(lettersInFirst.join("") === lettersInSecond.join("")){
                    retVal++
                }

            }            
        }
    }
    return retVal
};

console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))