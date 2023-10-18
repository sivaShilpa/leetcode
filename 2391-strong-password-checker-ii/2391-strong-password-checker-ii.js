/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    
    //check if length >= 8
    if(password.length<8){
        console.log("case1")
        return false
    }
    // check if there is at least 1 lowercase letter
    if(!/[a-z]/.test(password)){
        console.log("case2")
        return false
    }
    //check if there is at least 1 uppercase letter
    if(!/[A-Z]/.test(password)){
        console.log("case3")
        return false
    }
    //check if there is at least one digit
    if(!/[0-9]/.test(password)){
        console.log("case4")
        return false
    }
    //check if there is any special character from "!@#$%^&*()-+"
    if(!/[!@#$%^&*()--+]/.test(password)){
        console.log("case5")
        return false
    }
    //it shouldn't contains same character in adjacent position
    for(let i = 0; i<password.length-1; i++){
        if(password[i]===password[i+1]){
            console.log("case6")
            return false
        }
    }

    return true
};