var countBalls = function(lowLimit, highLimit) {
    numOfBalls = highLimit - lowLimit + 1
    balls = []
    boxNumAndBallCounts = new Map()
    

    for(let i = lowLimit; i <= highLimit; i++){
        balls.push(i)
    }

    for(let b of balls){
        let digits = b.toString().split("")
        let sumOfDigits = 0
        for(d of digits){
            sumOfDigits += parseInt(d)
        }
        if(boxNumAndBallCounts.has(sumOfDigits)){
            boxNumAndBallCounts.set(sumOfDigits, boxNumAndBallCounts.get(sumOfDigits) + 1)
        }else{
            boxNumAndBallCounts.set(sumOfDigits, 1)
        }
        
    }

    let maxVal = Math.max(...boxNumAndBallCounts.values())

    return maxVal
}

console.log(countBalls(1, 10))
