/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
    let carry = 0;
    let revDigits = digits.reverse()

    
    for(let i = 0; i<revDigits.length; i++){
        if(i===0){
            revDigits[i]++
            
            if(revDigits[i].toString().length > 1){
                let digArr = revDigits[i].toString().split("")
                revDigits[i] = parseInt(digArr[1])
                carry = parseInt(digArr[0])
            }else{
                return revDigits.reverse()
            }
        }
        
        if(carry > 0){
            if(i < revDigits.length-1){
                revDigits[i+1] += carry
                if(revDigits[i+1].toString().length > 1){
                    let digArr = revDigits[i+1].toString().split("")
                    revDigits[i+1] = parseInt(digArr[1])
                    carry = parseInt(digArr[0])
                }else{
                    return revDigits.reverse()
                }
            }else{
                revDigits.push(carry)
                return revDigits.reverse()
            } 
        }        
    }
    
};