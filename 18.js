var fourSum = function(nums, target) {
    let numsLength = nums.length;
    let result = [];
    let fours = []
    let currentIndex = 0;
    while (currentIndex < numsLength) {
        let num = nums[currentIndex];
        let arrTemp = [num];
        
        for(let x in result) {
            let temp = [...result[x]]
            temp.push(num)
            result.push(temp);
        }
        result.push(arrTemp)
        currentIndex++;
    }
    for(let r of result){
        if(r.length === 4){
            fours.push(r)
        }
    }
    
    let result1 = []
    for(let f of fours){
        let sum = f.reduce(function(a,b){
            return a+b;
        }, 0);
        // console.log(sum)
        let isthere = false
        if(result1.length >= 1){
            for(r of result1){
                if(f.every(item =>r.includes(item) && r.every(item =>f.includes(item)))){
                    isthere = true
                    break
                }
                else{
                    isthere = false
                }                
            } 
        }
        if(isthere == false && sum == target){
            result1.push(f)
        }               
    }
    return result1;
};

console.log(fourSum([-2,-1,-1,1,1,2,2], 0))