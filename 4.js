var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2)
    let sortedArr = arr.sort((a,b)=>{return a-b})
    let len = sortedArr.length
    let median = 0
    if(len%2 === 0){
        median = (sortedArr[(len/2)-1] + sortedArr[len/2])/2
    }else{
        median = sortedArr[Math.floor(len/2)]
    }
    return median
};

console.log(findMedianSortedArrays([1,3], [2,4])) 