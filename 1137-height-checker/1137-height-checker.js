/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // initialize expected as empty array
    const expected = []
    // initialize a retVal as zero
    let retVal = 0
    // sort heights and assign it to expected
    let k = 0
    while(k < heights.length){
        expected.push(heights[k])
        k++
    }
    expected.sort((a,b) => a-b)
    // loop through heights
    for(let i = 0; i < heights.length; i++){
        // check if heights[i] !== expected[i]
        console.log(heights[i], expected[i])
        if(heights[i] != expected[i]){
            // then add 1 to retVal
            retVal++
        }
    }
    // return retVal
    return retVal
    
};