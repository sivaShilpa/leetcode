def threeSum(nums):
    length = len(nums)
    output = []
    i = 0
    j = 1
    k = 2
    isSame = False

    while i < length: 
        while j < length: 
            while k<length:
                if i!=j and j!=k and k!=i:
                    if nums[i]+nums[j]+nums[k] == 0:
                        element = []
                        element.append(nums[i])
                        element.append(nums[j])
                        element.append(nums[k])
                        for el in output:
                            if el[0] == element[1] and el[1] == element[2] and el[2]==element[0]:
                                isSame = True
                                break
                            elif el[0] == element[2] and el[1] == element[0] and el[2]==element[1]:
                                isSame = True
                                break
                            elif el[0] == element[0] and el[1] == element[1] and el[2]==element[2]:
                                isSame = True
                                break
                            elif el[0] == element[1] and el[1] == element[0] and el[2]==element[2]:
                                isSame = True
                                break
                            elif el[0] == element[2] and el[1] == element[1] and el[2]==element[0]:
                                isSame = True
                                break
                            elif el[0] == element[0] and el[1] == element[2] and el[2]==element[1]:
                                isSame = True
                                break
                           
                            else:
                                isSame = False
                                continue

                        if isSame == False:
                            output.append(element)
                k += 1   
            k = 2                    
            j += 1
        j=1
        k=2            
        i += 1
    return output
    
print(threeSum([-1,0,1,2,-1,-4]))