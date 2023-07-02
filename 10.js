var isMatch = function(s, p) {
    let pArr = p.split("")
    if(s.length>p.length) return false
    else{
        for(let i=0; i<pArr.length; i++){
            if(pArr[i]=='*' && i>0){
                if(p[i-1]=='.'){
                    pArr[i] = s[i]
                }else {
                    pArr[i]=pArr[i-1]
                }                
            }else if(pArr[i]=='.'){
                pArr[i] = s[i]
            }
        }
        if(pArr.join("").includes(s)) return true
        else return false
    }
    
};

console.log(isMatch("aa", ".*"))