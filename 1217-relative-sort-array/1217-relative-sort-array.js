/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    // initialize the retValLength as arr1.length
    const retValLength = arr1.length
    let retVal = []
    // loop until length of retVal is less than or equal to retValLength
    while(arr2.length){
        // loop until the arr1 has arr2[0]
        while(arr1.includes(arr2[0])){
            // intialize a variable called index and assign it the index of arr2[0] in arr1 using findIndex()
            const index = arr1.findIndex(x => x===arr2[0])
            // splice the element from arr1 
            arr1.splice(index, 1)
            // push the element into retVal
            retVal.push(arr2[0])
        }
        // slice the element off from arr2
        arr2.splice(0,1)
    }
    arr1.sort((a,b) => a-b)
    retVal = retVal.concat(arr1)
    // return retVal
    return retVal       
    
};