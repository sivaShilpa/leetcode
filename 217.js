var containsDuplicate = function(nums) {
    const numbers = new Set(nums);
    
    if(numbers.size === nums.length){
        return false
    }else{
        return true
    }
};
console.log(containsDuplicate([1,2,3,1]))