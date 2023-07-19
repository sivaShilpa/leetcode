let rotateTheBox = function(box) {
    let rotatedBox = []
    let tempRow = []
    let reversedTempRow = []

    for(let row = 0; row < box.length; row++){
        for(let col = box[row].length-1; col > 0; col--){
            if(box[row][col] === '.' && box[row][col-1] === '#'){
                box[row][col] = '#'
                box[row][col-1] = '.'
                col = box[row].length-1
            }
        }
        tempRow.push(box[row])           
    }
    for(let row = tempRow.length-1; row >= 0; row --){
        reversedTempRow.push(tempRow[row])
    }

    for(let col = 0; col < reversedTempRow.length; col++){
        for(let row = 0; row < reversedTempRow[0].length; row++){
            if(col == 0){
                rotatedBox.push([reversedTempRow[col][row]])
            }
            else{
                rotatedBox[row].push(reversedTempRow[col][row])
            }
        }
    }
    
    return rotatedBox

};

console.log(rotateTheBox([["#","#","*",".","*","."],
["#","#","#","*",".","."],
["#","#","#",".","#","."]]))