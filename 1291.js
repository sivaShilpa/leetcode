var sequentialDigits = function(low, high) {
    let lowFDigit = parseInt(low.toString().split("")[0])
    let lowLength = low.toString().length
    let highFDigit = parseInt(high.toString().split("")[0])
    let highLength = high.toString().length
    let retVal = []
    let num = lowFDigit
    let numStr = ""

    for(let i = 0; i<highLength; i++){
        num++
        if(num >= 1 && num <= 9){
            numStr += num.toString()
        }else{

        }                
    }
};