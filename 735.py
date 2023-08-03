def asteroidCollision(asteroids):
    result = []
   

    while True:
        dir = []
        for asteroid in asteroids:
            if len(result) == 0:
                result.append(asteroid)
                if asteroid > 0:
                    dir.append("right")
                else:
                    dir.append("left")
            else: 
                if (asteroid > 0 and result[len(result)-1]<0) or (asteroid < 0 and result[len(result)-1]>0):
                    if abs(asteroid) > abs(result[len(result)-1]):
                        result.pop()
                        result.append(asteroid)
                        if asteroid > 0:
                            dir.append("right")
                        else:
                            dir.append("left")
                    elif abs(asteroid) == abs(result[len(result)-1]):
                        result.pop()

        if len(result) == 1:
            break
        else:
            if "left" in dir and "right" not in dir:
                break
            elif "right" in dir and "left" not in dir:
                break       

    return result

print(asteroidCollision([5,10,-5]))
        


