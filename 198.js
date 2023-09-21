var rob = function(nums) {
    let prev = 0
    let curr = 0
    let next = 0
    let robbed = nums[0]

    for(let i = 3; i<nums.length;){
        prev = nums[i-1]
        curr = nums[i]
        if(i<nums.length-1)next = nums[i+1]
        else next = 0
        console.log(prev, curr, next)
        if((prev + next) > curr){
            robbed += (prev + next)
            i+=2 
        }else{
            robbed += curr
            i+=3
        }
        console.log(robbed)
    }
    return robbed
}

console.log(rob([1,1,1]))