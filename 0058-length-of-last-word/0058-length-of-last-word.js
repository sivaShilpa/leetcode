/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.split(" ")
    let cleanSArr = sArr.filter(el => el!=="")
    console.log(cleanSArr)
    return cleanSArr[cleanSArr.length-1].length
    
};