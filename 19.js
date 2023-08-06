var removeNthFromEnd = function(head, n) {
    let count = 1
    let output = head

    while(head.next){
        count++
        head = head.next
    }
       
    let index = count - n
    head = output
    count = 0
    if(index === 0){
        output = head.next        
    }else if(n === 1){
        while(head.next.next){
            head = head.next
        } 
        head.next = null       
    }else{
        while(head.next){
            if(index === count){
                head.val = head.next.val
                head.next = head.next.next
                count++
            }
            else{
                head = head.next
                count++
            }        
        }

    }
    
    return output    
};

console.log(removeNthFromEnd([1,2,3,4,5], 2))