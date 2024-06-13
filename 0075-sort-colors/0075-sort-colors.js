/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let temp = 0
    let limit = 0
    let countOfZero = nums.filter(x => x === 0).length
    let countOfOne = nums.filter(x => x === 1).length
    let countOfTwo = nums.filter(x => x === 2).length
    
    if (countOfZero)
        for (let i = 0; i < countOfZero; i++) {
            nums[i] = 0
            temp = i
        }
    if (countOfZero && countOfOne) {
        limit = temp + countOfOne + 1
        for (let j = temp + 1; j < limit; j++) {
            nums[j] = 1
            temp = j
        }
    } else if (countOfOne) {
        for (let i = 0; i < countOfOne; i++) {
            nums[i] = 1
            temp = i
        }
    }
    if (countOfTwo)
        for (let k = temp + 1; k < nums.length; k++) {
            nums[k] = 2
            temp = k
        }

};