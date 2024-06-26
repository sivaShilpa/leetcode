/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    let tProfit = 0
    let current = 0
    let wPointer = 0
    let dPointer = 0

    while(wPointer < worker.length){// 2 < 3
        if(difficulty[dPointer] <= worker[wPointer]){ // 13 <= 45
            if(current < profit[dPointer]){// 96 < 96
                current = profit[dPointer] // current = 96
            }            
        }
        dPointer++ // dPointer = 3
        if(dPointer === difficulty.length){ // 3 = 3
            dPointer = 0
            tProfit += current // tProfit = 4 + 96
            wPointer++ // 2
            current = 0
        }
    }
    return tProfit
};