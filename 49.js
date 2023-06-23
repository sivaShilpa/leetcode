/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let outputArr = []
    let map = {}
    for(let i=0; i<strs.length; i++){
        let sorted = strs[i].split("").sort().join("")
        if(map[sorted]){
            map[sorted].push(strs[i])
        }
        else{
            map[sorted] = [strs[i]]
        }
    }
    for (let key in map) {
        outputArr.push(map[key])
    }
    return outputArr
    
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))