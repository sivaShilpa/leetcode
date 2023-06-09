var romanToInt = function(s) {
    let values = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    let arr = s.split("")
    let numArr = []
    let sum = 0
    arr.forEach(el => {
        numArr.push(values[el])        
    });
    for(let i = 0; i<numArr.length; i++){
        if(i<numArr.length-1){
            if(numArr[i]<numArr[i+1]){
                numArr[i] = -numArr[i]
            }
        }          
    }
    sum = numArr.reduce(function (x, y) {
        return x + y;
    }, 0)
    console.log(sum)
};

romanToInt('IV')