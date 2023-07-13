def blindMice(str):
    count = 0
    strArr = str.split("C")
    leftArr = [*strArr[0]]
    rightArr = [*strArr[1]]
    print(leftArr)
    idx = 0
    while idx < len(leftArr):
        if idx+1 < len(leftArr):
            if leftArr[idx] == "M" and leftArr[idx+1] == "~":
                leftArr = leftArr[idx+2:]
                print(leftArr)
                count+=1
                idx-=1
            elif leftArr[idx] == "~" and leftArr[idx+1] =="M":
                leftArr = leftArr[idx+2:]
                print(leftArr)
                idx-=1
        idx+=1
    rightArrRev = rightArr[::-1]
    print(rightArrRev)
    idx = 0
    while idx < len(rightArrRev):
        if idx+1 < len(rightArrRev):
            if rightArrRev[idx] == "M" and rightArrRev[idx+1] == "~":
                rightArrRev = rightArrRev[idx+2:]
                print(rightArrRev)
                count+=1
                idx -= 1
            elif rightArrRev[idx] == "~" and rightArrRev[idx+1] =="M":
                rightArrRev = rightArrRev[idx+2:]
                print(rightArrRev)
                idx-=1
        idx+=1
              
    return count

print(blindMice('CM~~M~M'))