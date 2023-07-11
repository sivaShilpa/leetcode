def threeSumClosest(nums, target):
    length = len(nums)
    i = 0
    j = 1
    k = 2
    targets = []
    indexCombs = []
    diff = []
    while i < length:
        while j < length:
            while k < length:
                if i != j and i != k and j!=k:
                    if [i, j, k] not in indexCombs:
                        sumUp = nums[i]+nums[j]+nums[k]
                        targets.append(sumUp)
                        indexCombs.append([i, j, k])
                        indexCombs.append([j, k, i])
                        indexCombs.append([i, k, j])
                        indexCombs.append([j, i, k])
                        indexCombs.append([k, i, j])
                        indexCombs.append([k, j, i])
                k+=1     
            k=2
            j+=1
        j=1
        k=2
        i+=1
            
    print(targets)
    
    for t in targets:
        x = abs(t-target)
        diff.append(x)

    index = diff.index(min(diff))
    return targets[index]
print(threeSumClosest([0,1,2], 0))