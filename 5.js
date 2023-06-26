var longestPalindrome = function(s) {
    function getAllSubstrings(str) {
        let i, j, result = [];
      
        for (i = 0; i < str.length; i++) {
            for (j = i + 1; j < str.length + 1; j++) {
                result.push(str.slice(i, j));
            }
        }
        return result;
      }

      let subStrings = getAllSubstrings(s)

      function isPalindrome(str){
        let isPalindrome = false
        for(let i = 0; i<str.length/2; i++){
            if(str[i] == str[str.length-1-i]){
                isPalindrome = true
            }else{
                isPalindrome = false 
                break
            }
        }
        return isPalindrome
      }

      let palindromeSubstrings = []
      let palindromeLengths = []

      subStrings.forEach(str => {
        if(isPalindrome(str)){
            palindromeSubstrings.push(str)
            palindromeLengths.push(str.length)
        }
      })

      let index = palindromeLengths.indexOf(Math.max(...palindromeLengths))
      
      return palindromeSubstrings[index]
};

console.log(longestPalindrome("babad"))