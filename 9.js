var isPalindrome = function(x) {
    let xStr = x.toString()
    let xArr = xStr.split("")
    let isPalindrome = false
    if(xArr.length === 1) return true
    if(xArr.length === 2) return (xArr[0]===xArr[1])
    for(let i=0; i<(xArr.length/2); i++){
        xArr[i] === xArr[xArr.length-1-i]? isPalindrome = true : isPalindrome = false
        if(isPalindrome === false) break
    }

    return isPalindrome

};

console.log(isPalindrome(1000030001))