def furthestBuilding(heights, bricks, ladders):
    count = 0
    i = 0
    bc = bricks 
    lc = ladders
    while i < len(heights)-1:
        if heights[i] < heights[i+1]:
            diff = heights[i+1] - heights[i]
            print(f"diff - {diff}")
            if diff > bricks and ladders > 0:
                ladders -= 1
                count +=1
                print(f"ladders - {ladders}")  
                print(f"count - {count}")
                
            elif bricks >= diff: 
                
                bricks = bricks - diff
                count +=1
                print(f"bricks - {bricks}")
                print(f"count - {count}")
                
            else:
                break             
                
        else:
            count+=1
            print(f"count - {count}")
                
        i += 1
        print(f"i - {i}")
    i = 0
    count1 = 0
    bricks = bc
    ladders = lc
    while i < len(heights)-1:
        if heights[i] < heights[i+1]:
            diff = heights[i+1] - heights[i]
            print(f"diff - {diff}")
            if bricks > diff: 
                
                bricks = bricks - diff
                count1 +=1
                print(f"bricks - {bricks}")
                print(f"count1 - {count1}")

            elif diff >= bricks and ladders > 0:
                ladders -= 1
                count1 +=1
                print(f"ladders - {ladders}")  
                print(f"count1 - {count1}")
                
            else:
                break             
                
        else:
            count1+=1
            print(f"count1 - {count1}")
                
        i += 1
        print(f"i - {i}")

    if count > count1:
        return count
    else:
        return count1

print(furthestBuilding([1,5,1,2,3,4,10000], 4, 1))