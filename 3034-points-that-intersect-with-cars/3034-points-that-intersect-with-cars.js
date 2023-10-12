/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let obj = {}

    for(let i = 0; i<nums.length; i++){
        if(!obj[nums[i][0]]){
            obj[nums[i][0]] = "car"
        }        
        while(nums[i][0] <= nums[i][1]){
             if(!obj[nums[i][0]]){
                obj[nums[i][0]] = "car"
            } 
            nums[i][0]++
        }
    }
    return Object.keys(obj).length    
};