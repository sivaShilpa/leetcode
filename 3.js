var lengthOfLongestSubstring = function(s) {
    let subStr = ""
    let subStrArr = []
    let pos = 0
    if(s===""){
        return 0
    }else{
    
    for(let i=0; i<s.length; i++){
        pos=i
        while(pos <= s.length){
            let letter = s.slice(pos,pos+1)
            if(!subStr.includes(letter)){
                subStr += letter
            }
            else{
                subStrArr.push(subStr)
                subStr = letter
            }
            pos++
        }
        while(pos >=0){
            let letter = s.slice(pos-1,pos)
            if(!subStr.includes(letter)){
                subStr += letter
            }
            else{
                subStrArr.push(subStr)
                subStr = letter
            }
            pos--
        }
    }
    let longest = subStrArr.sort(
        function (a, b) {
            return b.length - a.length;
        }
    )[0]
    
    return longest.length

    }
};

console.log(lengthOfLongestSubstring(""))