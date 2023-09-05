var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n)
    nums2.forEach(element => {
        nums1.push(element)
    });

    nums1.sort((a,b)=>a-b)
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))