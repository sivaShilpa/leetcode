var reverse = function(x) {
    let arr = x.toString().split("")
    arr.reverse()
    arr = arr.join("")
    arr = parseInt(arr)
    if(Math.pow(-2, 31) < arr && arr < Math.pow(2,31)-1)
    return arr
    else return 0
};

console.log(reverse(123))