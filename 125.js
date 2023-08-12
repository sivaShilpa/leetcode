var isPalindrome = function(s) {
    let newStr = s.replace(/[^a-z0-9]/gi, '')
    let retVal = false

    if(newStr === "" || newStr.length === 1) return true
    
    for(let i = 0; i <= (newStr.length/2)-1; i++){
        if(newStr[i].toLowerCase() === newStr[newStr.length - 1 - i].toLowerCase()){  
            retVal = true
        }else{
            retVal = false 
            break
        }
    }
    return retVal
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))