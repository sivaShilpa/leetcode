var isAnagram = function(s, t) {
    let retVal = false
    if(s.length === t.length){
        for(let i = 0; i<s.length; i++){
            if(t.includes(s[i])){
                retVal = true
            }
            else{
                retVal = false
                break
            }
        }
    }else{
        retVal = false
    }
    return retVal    
};

console.log(isAnagram("palindrome", "medlpawnor"))