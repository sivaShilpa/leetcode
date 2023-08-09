/**1) Code a function named charCount that
   accepts a string as its only argument and
   returns an object with the count of each
   character in the string.
2) The returned object should have properties
   where the keys are a character in the
   string and the value is how many times the
   character appears in the string argument.
3) Upper and lower case characters should be
   counted separately.
4) Space characters should be counted too.

   For example:

    charCount('Hello there')

    would return an object like this -->
      { H: 1, e: 3, l: 2, o: 1, ' ': 1, t: 1, h: 1, r: 1 } */

function charCount(s){
    let retVal = {}
    let sArr = s.split("")

    console.log(sArr)
    for(let character of sArr){
        if(character in retVal){
            let val = retVal[character]
            val += 1
            retVal[character] = val
            
        }else{
            retVal[character] = 1
        }
        
    }
    return retVal
}

console.log(charCount("Barbie Barbie"))