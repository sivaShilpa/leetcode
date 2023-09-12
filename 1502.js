var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => (a - b))
    let prog = arr[1] - arr[0]
    for(let i = 1; i<arr.length; i++){
        if(Math.abs(arr[i] - arr[i+1]) !== prog){
            return false
        }
    }
   return true
      
};

canMakeArithmeticProgression([3,5,1])