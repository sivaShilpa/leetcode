var moveZeroes = function(nums) {
    for(let i = nums.length-1; i>=0; i--){
        if(nums[i] === 0){
            nums.push(nums[i])
            console.log(nums)
            nums.splice(i,1)
            console.log(nums)          
        }
    }
    return nums
};

console.log(moveZeroes([0,0,1]))