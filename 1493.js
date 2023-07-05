var longestSubarray = function(nums) {
    if(nums.includes(0)){
        nums = nums.map(el=>el.toString())
        nums = nums.join("")
        let ones = nums.split("0")
        onesLengths = ones.map(el=> el.length)
        let lengths = []
        for(let i=0; i< onesLengths.length-1; i++){
            lengths.push(onesLengths[i] + onesLengths[i+1])
        }
        let index = lengths.indexOf(Math.max(...lengths))

        let subArray = []
        subArray.push(ones[index])
        subArray.push(ones[index+1])

        let subArrayLength = subArray[0].length + subArray[1].length

        return subArrayLength
    }else{
        return nums.length-1
    }   
};

console.log(longestSubarray([1,1,1]))