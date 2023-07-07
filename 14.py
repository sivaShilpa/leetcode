def longestCommonPrefix(strs):
    lengths = []
    common = ""
    temp = ""

    for strng in strs:
        lengths.append(len(strng))
    
    minlen = min(lengths)
    index = lengths.index(minlen)
    shortWord = strs[index]
    
    for i in range(minlen):
        for strng in strs:        
            if strng[i] == shortWord[i]:
                temp = shortWord[i]
            else:
                temp = ""
                break
                
        if temp == "":
            break
        else:
            common += temp
    
    return common

print(longestCommonPrefix(["cir","car"]))