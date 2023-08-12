var generate = function(numRows) {
    let retVal = []
    const end = 1
    for(let row = 0; row < numRows; row++){
        let eachElem = []
        for(let i =0; i<= row; i++){
            if(i === 0 || i===row){
                eachElem.push(end)
            }else{
                let prevRow = retVal[row-1]
                eachElem.push(prevRow[i-1]+prevRow[i])
            }
        }
        retVal.push(eachElem)
    }    
    return retVal
};

console.log(generate(1))