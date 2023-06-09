var canConstruct = function(ransomNote, magazine) {
    let rNArr = ransomNote.split("")
    let mArr = magazine.split("")
    let canConstruct = false
    for(let i=0; i<rNArr.length; i++){
        let el = rNArr[i]        
        if(mArr.includes(el)){
            canConstruct = true
            let index = mArr.indexOf(el)
            mArr.splice(index, 1)
            
        }else{
           
            canConstruct = false
            break
        }
    }
    return canConstruct
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"))