/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let reg = /[^a-zA-Z]/
    let sArr = s.split(reg).join("").split("")
    let retVal = ""
    console.log(sArr)
    if(sArr.length>0)
    for(let i = 0; i<s.length; i++){
        if(reg.test(s[i])){
            retVal += s[i]            
        }else if((/[a-zA-Z]/).test(s[i])){
            let char = sArr.pop()
            retVal += char
        }
    }
    else retVal = s

    return retVal
};