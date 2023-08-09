let mergeTwoLists = function(list1, list2) {
    let result = new ListNode()
    let walker1 = list1
    let walker2 = list2
    let walker3 = result
    if(!walker1 || !walker2){
        return walker1 || walker2
    }
    while(walker1 || walker2){
        if(walker1 && walker2){
            if(walker1.val === walker2.val){
                walker3.val = walker1.val
                walker3.next = new ListNode()
                walker3 = walker3.next    
                walker3.val = walker2.val
                walker1 = walker1.next
                walker2 = walker2.next
            }else if(walker1.val > walker2.val){
                walker3.val = walker2.val
                walker2 = walker2.next
            }else{
                walker3.val = walker1.val
                walker1 = walker1.next
            }                
        }else if(walker1){
            walker3.val = walker1.val
            walker1 = walker1.next
        }else{
            walker3.val = walker2.val
            walker2 = walker2.next
        }
        if(walker1 || walker2){
            walker3.next = new ListNode()
            walker3 = walker3.next
        }          
    }
    
    return result
};

class ListNode{
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)       
    }
}

