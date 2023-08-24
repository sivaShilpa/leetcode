var maxProfit = function(prices) {
    let profits = []

    while(prices.length > 0){
        let bought = Math.min(...prices)
        let dayOfBought = prices.indexOf(bought)
        let furtherPrices = prices.splice(dayOfBought, prices.length)
        if(furtherPrices.length === 1){
            let p = prices.slice(0, dayOfBought)
            bought = Math.min(...p)
            dayOfBought = p.indexOf(bought)
            furtherPrices = p.slice(dayOfBought, p.length)
        }
        let sold = Math.max(...furtherPrices)
        profits.push(sold-bought)
    }
    

    return Math.max(...profits)   
};

console.log(maxProfit([7,5,3,6,4,1,2]))