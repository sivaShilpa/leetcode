/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let noSec = 0
    let sorted = amount.sort((a,b)=>b-a)

    while(amount[0] > 0){
        if(amount[1]>0) {
            amount[0]--
            amount[1]--
        }else{
            amount[0]--
        }
        sorted = amount.sort((a,b)=>b-a)
        noSec++        
    }
    return noSec
};