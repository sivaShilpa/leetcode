def canPlaceFlowers(flowerbed, n):
    if len(flowerbed) == 1 and flowerbed[0] == 0:
        return True
    for idx, f in enumerate(flowerbed):
        if n == 0: 
            break
        else: 
            if idx == 0 and f == 0:
                if idx+1 < len(flowerbed):
                    if flowerbed[idx+1] == 0:
                        flowerbed[idx] = 1
                        n -= 1
            elif idx == len(flowerbed)-1 and f==0:
                if idx-1 >=0 :
                    if flowerbed[idx-1] == 0:
                        flowerbed[idx] = 1
                        n -= 1
            elif f == 0 and n>0:
                if idx+1 < len(flowerbed) and idx > 0:
                    if flowerbed[idx+1] == 0 and flowerbed[idx-1] == 0:
                        flowerbed[idx] = 1
                        n -= 1
           
    if n == 0:
        return True
    else: 
        return False  
    

print(canPlaceFlowers([0,0,1,0,0], 1))