var isAnagram = function(s, t) {
    let retVal = false
    let tArr = t.split("")
    if(s.length === t.length){
        for(let i = 0; i<s.length; i++){
            if(tArr.includes(s[i])){
                retVal = true
                let index = tArr.indexOf(s[i])
                tArr.splice(index,1)
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

console.log(isAnagram("aacc", "ccac"))