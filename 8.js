var myAtoi = function(s) {
    let output 
    let accept = /[-0-9]/g
    output = s.match(accept)
    if(output.length === 0){
        output = 0
    }else {
        output = parseInt(output.join(""))
    }   
    
    if(output < ((-2)**31)){
        output = (-2)**31
    }else if( output > (2**31) - 1 ){
        output = (2**31) - 1
    }

    return output
};

console.log(myAtoi("0032"))