var twoSum = function(nums, target) {
    let output = []
    for(let i=0; i<nums.length-1; i++){
        for(let j=1; j<nums.length; j++){
            if(i!==j && output.length === 0){
                if(nums[i]+nums[j]===target){
                    output.push(i)
                    output.push(j)
                    break
                }
            }
            
        }
    }
    return output
    
};