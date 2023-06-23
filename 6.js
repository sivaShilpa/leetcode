/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // let strArr = s.split("")
    let output = ""
    let level = 0
    let up = true
    let arr = []
    for(let i=0; i<s.length; i++){
        if(!arr[level]) arr[level] = []
        arr[level].push(s[i])
        if(up === true) level++
        else level--
        if(level+1 === numRows) up = false
        else if(level === 0) up = true
    }

    for(let i of arr)
    output += i.join("")
    return output
};

let s = "PAYPALISHIRING"

let numRows = 3

console.log(convert(s, numRows))