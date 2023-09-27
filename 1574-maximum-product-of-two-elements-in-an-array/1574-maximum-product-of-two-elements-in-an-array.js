/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let first = Math.max(...nums)

    let index = nums.indexOf(first)
    nums.splice(index,1)
    let second = Math.max(...nums)

    return (first-1)*(second-1)
    
};