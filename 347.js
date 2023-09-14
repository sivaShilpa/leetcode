var topKFrequent = function(nums, k) {
    let retVal = []
    let hMap = {}
    nums.forEach(element => {
        if(hMap[element]){
            let val = hMap[element]
            val++
            hMap[element] = val
        }else{
            hMap[element] = 1
        }
    });

    let sortedMap = Object.entries(hMap).sort((a,b) => b[1]-a[1])
    for(let j = 0; j<k; j++){
        retVal.push(parseInt(sortedMap[j][0]))
    }
    return retVal
};

console.log(topKFrequent([2,2,3,1,1,1], 2))