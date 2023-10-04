/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let max = []
    for(let i=0; i<nums.length; i++){
        for(let j =i+1; j<nums.length; j++){
            for(let k = j+1; k<nums.length; k++){
                max.push((nums[i] - nums[j])* nums[k])

            }
        }
    }

    return Math.max(...max) < 0 ? 0 : Math.max(...max)
    
};