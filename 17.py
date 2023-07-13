def letterCombinations(digits):
    lookUp = { "2": ["a", "b", "c"], 
              "3": ["d", "e", "f"], 
              "4": ["g", "h", "i"], 
              "5": ["j", "k", "l"], 
              "6": ["m", "n", "o"], 
              "7": ["p", "q", "r", "s"], 
              "8": ["t", "u", "v"], 
              "9": ["w", "x", "y", "z"]}
    letters = []
    result = []
    length = len(digits)
    if length == 0:
            return []
    temp = ""
    for d in digits:
        letters.append(lookUp[d])
     
    indices = [0 for i in range(length)]
    while (1):
        temp = ""
        
        for i in range(length):
            temp += letters[i][indices[i]]
        result.append(temp)
        
        next = length - 1
        while (next >= 0 and
              (indices[next] + 1 >= len(letters[next]))):
            next-=1
 
        if (next < 0):
            return result
 
        indices[next] += 1
         
        for i in range(next + 1, length):
            indices[i] = 0
            
    

print(letterCombinations("23"))