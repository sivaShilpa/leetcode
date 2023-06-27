var lengthOfLongestSubstring = function(s) {
       
    function nonRepeatingSubstringLength(str) {
        let i, j, max = 0;
      
        for (i = 0; i < str.length; i++) {
            for (j = i + 1; j < str.length + 1; j++) {
                let nonRepeat = str.slice(i, j);
                if(!isRepeatingLetters(nonRepeat)){
                    if(max < nonRepeat.length){
                        max=nonRepeat.length
                    }
                }
            }
        }
        return max
    }

    function isRepeatingLetters(str){
        let lettersOfString = []
        let isRepeating = false
        for(let i=0; i<str.length; i++){
            let letter = str.slice(i, i+1)
            lettersOfString.push(letter)
            if(lettersOfString.includes(letter)){
                isRepeating = true
                break
            }else{
                isRepeating = false
            }
        }        
        return isRepeating
    }

    if(s===""){
        return 0
    }else{   
    
    return nonRepeatingSubstringLength(s)

    }
};
s = "abcabcbb"

console.log(lengthOfLongestSubstring(s))