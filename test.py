def missingWords(s, t):
    sArr = s.split(" ")
    tArr = t.split(" ")
    
    for i, el in enumerate(tArr):
        if i == 0 and el in sArr:
            current = sArr.index(el)
            sArr.remove(el)          
            
        elif el in sArr:
            prev = current
            current = sArr.index(el)   
            
            if prev < current:
                sArr.remove(el)
            else:
                sliced = sArr[slice(prev, len(sArr)+1)]
                sArr = sArr[slice(prev)]              
                if el in sArr:
                    sliced.remove(el)
                    sArr.extend(sliced)
                    
    return sArr      


print(missingWords("Python is programming Python in many ways", "programming Python ways"))