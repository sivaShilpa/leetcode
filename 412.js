var fizzBuzz = function(n) {
    let start = 1
    let result = []
    while(start<=n){
        if(start%3 === 0 && start%5 !==0){
            result.push("Fizz")
        }else if(start%3 !== 0 && start%5 ===0){
            result.push("Buzz")
        }else if(start%3 === 0 && start%5 ===0){
            result.push("FizzBuzz")
        }else{
            result.push(start.toString())
        }
        start++
    }
    return result
}

console.log(fizzBuzz(8))