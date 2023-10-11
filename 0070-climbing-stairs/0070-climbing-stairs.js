/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let count = 1
    let fib = []
    for(let i = count; i <= n; i++ ){
        if(i<=2){
            fib.push(i)
        }else{
            let temp = fib[fib.length-1] + fib[fib.length-2]
            fib.push(temp)
        }
        console.log(fib)
    }
    return fib[n-1]
};