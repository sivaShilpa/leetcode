/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // initialize expected 
    const expected = [...heights]
    // initialize a retVal as zero
    let retVal = 0
    // sort heights and assign it to expected    
    expected.sort((a,b) => a-b)
    // loop through heights
    for(let i = 0; i < heights.length; i++){
        // check if heights[i] !== expected[i]
        if(heights[i] != expected[i]){
            // then add 1 to retVal
            retVal++
        }
    }
    // return retVal
    return retVal
    
};