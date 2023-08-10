var countPoints = function(rings) {
    let retVal = 0
    let dict = {}
    for(let i = 0; i<rings.length; i += 2){
        let color = rings[i]
        let rod = rings[i+1]
        if(rod in dict){
            dict[rod].push(color)
        }else{
            dict[rod] = [color]
        }
    }
    for(let r in dict){
        if(dict[r].includes('R') && dict[r].includes('G') && dict[r].includes('B')){
            retVal++
        }
    }
    return retVal    
};

console.log(countPoints("G4"))