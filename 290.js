var wordPattern = function(pattern, s) {
    let sArray = s.split(" ")
    let sMap = {}
    if(pattern.length === sArray.length){
        for(let i = 0; i<sArray.length; i++){
            // console.log(sMap.hasOwnProperty(pattern[i]))
            if(sMap.hasOwnProperty(pattern[i]) && sMap[pattern[i]]!== sArray[i]) {
                console.log("1")
                return false
            }
            else if(Object.values(sMap).includes(sArray[i]) && pattern[i] !== Object.keys(sMap)
            .filter(key => sMap[key] === sArray[i])[0]){
                return false
            }
            else if(!sMap.hasOwnProperty(pattern[i]) && !Object.values(sMap).includes(sArray[i])){
                sMap[pattern[i]] = sArray[i]
                console.log(sMap)
            } 
        }
    }else{
        return false
    }
    console.log(sMap)
    return true
};

console.log(wordPattern("abba", "dog cat cat dog"))