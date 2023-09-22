var reverseBits = function(n) {
    let retVal = 0
    let nStr = n.toString(2).padStart(32, "0")
    
    for(let i=0; i<32; i++){
        retVal += nStr[i] * (2 ** i)
    }
    return retVal
};
console.log(reverseBits(`00000010100101000001111010011100`))
