var missingNumber = function(nums) {
    let sorted = nums.sort((a,b)=>a-b)
    let missingNum = 0
    
    if(sorted[0] === 0){
        missingNum = sorted[sorted.length-1] + 1
    }else{
        missingNum = sorted[0] - 1
    }
     
    for(let i=0; i<nums.length; i++){
       if((sorted[i+1] - sorted[i])> 1){
        return sorted[i]+1
       }
    }
    return missingNum
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))