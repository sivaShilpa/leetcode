def removeStars(s):
    i = 0
    result = ""
    while i < len(s):
        if s[i] != "*":
            result += s[i]
            i+=1
        else:
            countOfStars = 0
            while i < len(s) and s[i] == "*":
                countOfStars +=1
                i+=1
            l = len(result)
            result = result[0:l-countOfStars]
            
    return result

print(removeStars("erase*****"))
            
