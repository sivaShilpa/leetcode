var equalPairs = function(grid) {
    let columns = []
    let temp = []
    let count = 0
    let match = false
    for(let col = 0; col < grid.length; col++){
        temp=[]
        for(let row = 0; row<grid.length; row++){
            temp.push(grid[row][col])
        }
        columns.push(temp)
    }
    for(g of grid){
        for(c of columns){
            for(let i = 0; i<grid.length; i++){
                if(g[i] === c[i]){
                    match = true
                }
                else{
                    match = false
                    break
                }
            }
            if(match === true){
                count++
            }
        }
    }
    return count
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))