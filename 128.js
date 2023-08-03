var longestConsecutive = function(nums) {
    let posCounts = []
    let negCounts = []
    let count = 0
    let maxCount = 0
    let posAndNegCons = 0
    let posMap = {}
    let negMap = {}
    if (nums.length === 0) {return 0}
    else{
        for(let num of nums){
            if(num >= 0){
                posMap[num] = true
            }else{
                negMap[Math.abs(num)] = true
            }
        }

        let posKeys = Object.keys(posMap)
        let negKeys = Object.keys(negMap)

        for(let i = 0; i<posKeys.length; i++){
            if(i === 0){
                count = 1
                posCounts.push(count)
            }else if(i <= posKeys.length-1){
                if(parseInt(posKeys[i]) === parseInt(posKeys[i-1])+1){
                    count++
                    posCounts.pop()
                    posCounts.push(count)
                }else{
                    posCounts.pop()
                    posCounts.push(count)
                    count = 1
                    posCounts.push(count)
                }
            }
        }
        for(let i = 0; i<negKeys.length; i++){
            if(i === 0){
                count = 1
                negCounts.push(count)
            }else if(i <= negKeys.length-1){
                if(parseInt(negKeys[i]) === parseInt(negKeys[i-1])+1){
                    count++
                    negCounts.pop()
                    negCounts.push(count)
                }else{
                    negCounts.pop()
                    negCounts.push(count)
                    count = 1
                    negCounts.push(count)
                }
            }
        }

        console.log(posKeys, negKeys)
        if(posKeys.includes('0')){
            if(negKeys.includes('1')){
                posAndNegCons = posCounts[0] + negCounts[0]
                posCounts.push(posAndNegCons)
            }
        }
        if(posCounts.length && negCounts.length){
            if(Math.max(...posCounts) > Math.max(...negCounts)){
                maxCount = Math.max(...posCounts)
            }else{                
                maxCount = Math.max(...negCounts)
            }
        }else if(posCounts.length){
            maxCount = Math.max(...posCounts)
        }else{
            maxCount = Math.max(...negCounts)
        }
        

        console.log(maxCount)

    }
    // console.log(nums)
};


longestConsecutive([0,-1])