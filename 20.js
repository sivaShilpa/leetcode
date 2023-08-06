var isValid = function(s) {
    let open = ['(', '{', '[']
    let close = [')', '}', ']']
    let retVal = false
    let sArr = s.split("")
    let index = 0
    prev = ''
    curr = ''

    if(sArr.length % 2 != 0){
        return false
    }
    
    while(sArr.length > 2){
        curr = sArr[index]
        if(close.includes(curr)){
            if(prev === ''){
                return false
            }else if(open.includes(prev)){
                if(open.indexOf(prev) === close.indexOf(curr)){
                    retVal = true
                    sArr.splice(index-1, 2)
                    index = 0
                    curr = sArr[index]
                }else{
                    return false
                }
            }else if(close.includes(prev)){
                return false
            }
        }
        index++
        prev = curr
    }
    if(sArr.length === 2){
        prev = sArr[0]
        curr = sArr[1]
        
        if(open.includes(prev) && close.includes(curr)){
            if(open.indexOf(prev) === close.indexOf(curr)){

                return true
                
            }else{
                
                return false
            }
        }else{
            return false
        }
    }
    return retVal
};

console.log(isValid("()[]{}"))