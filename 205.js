var isIsomorphic = function(s, t) {
    let obj = {}
    let retVal = false
    if(s.length !== t.length) return false

    for(let i = 0; i<s.length; i++){
        if(!obj[s[i]] && Object.values(obj).includes(t[i])){
            console.log(s[i], t[i])
            obj[s[i]] = t[i]
            retVal = true
        }else{
            let val = obj[s[i]]
            console.log(s[i], t[i], val)
            if(val == t[i]){
                retVal = true
            }else{
                return false
            }
        }        
    }
    return retVal
};

console.log(isIsomorphic("badc", "baba"))