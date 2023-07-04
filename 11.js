var maxArea = function(height) {
    let area = []
    let l=0
    let r=height.length-1
    let leftPointer = height[l]
    let rightPointer = height[r]
    let lengthBetweenLeftAndRight = 0
    while(l!== r){
        if(leftPointer<rightPointer){
            lengthBetweenLeftAndRight = r-l
            area.push(leftPointer*lengthBetweenLeftAndRight)
            l++
            leftPointer = height[l]
        }else{
            lengthBetweenLeftAndRight = r-l
            area.push(rightPointer*lengthBetweenLeftAndRight)
            r--
            rightPointer = height[r]
        }
    }

    return Math.max(...area)
};

console.log(maxArea([2,3,4,5,18,17,6]))