var addBinary = function(a, b) {
    let lenOfa = a.length
    let lenOfb = b.length
    let diff = Math.abs(lenOfa - lenOfb)
    let c = ""
    for(let j = 0; j<diff; j++){
        c+="0"
    }
    if(lenOfa > lenOfb){        
        b = c+b
    }else{
        a= c+a
    }
    console.log(`a = ${a} & b = ${b}`)
    let retVal = ""
    a = a.split('').reverse().join('')
    b = b.split('').reverse().join('')
    console.log(`a = ${a} & b = ${b}`)
    for(let i = 0; i < a.length; i++){
        if((a[i] === '0' && b[i] === '1') ||(a[i] === '1' && b[i] === '0')){
            if(retVal.length-1 < i)retVal += '1'
            else{
                if(retVal[retVal.length-1] === '1') {
                    retVal = retVal.substring(0,retVal.length-1)
                    retVal += '01'
                }
            }
            console.log(`a[i] = ${a[i]} +  b[i] = ${b[i]} = ${retVal} first if i = ${i}`)
        }
        else if(a[i]=== '0' && b[i] === '0'){
            if(retVal.length-1 < i)retVal += '0'
            else{
                if(retVal[retVal.length-1] === '1') {
                    retVal = retVal.substring(0,retVal.length-1)
                    console.log(retVal)
                    retVal += '1'                    
                }
            }
            console.log(`a[i] = ${a[i]} +  b[i] = ${b[i]} = ${retVal} second if i = ${i}`)
        }
        else if(a[i] === '1' && b[i] === '1'){
            
            if(retVal.length-1 < i)retVal += '01'

            else{
                if(retVal[retVal.length-1] === '1') {
                    retVal = retVal.substring(0,retVal.length-1)
                    console.log(retVal)
                    retVal += '11'         
                }
            }
            console.log(`a[i] = ${a[i]} +  b[i] = ${b[i]} = ${retVal} third if i = ${i}`)
        }
        
    }    
    return retVal.split('').reverse().join('')
};

console.log(addBinary("1010", "1011"))
