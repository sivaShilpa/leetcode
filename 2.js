/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
class ListNode{
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)       
    }
}

var addTwoNumbers = function(l1, l2) {
    let result = new ListNode()
    let walker3 = result
    let walker1 = l1
    let walker2 = l2
    let carry = 0
    let size1 = 0
    let size2 = 0
    
    while(walker1.next){
        size1++
        walker1 = walker1.next
    }

    while(walker2.next){
        size2++
        walker2 = walker2.next
    }
    
    if(size1>size2){
        let diff = size1 - size2
        let i = 0
        while(i<diff){
            walker2.next = new ListNode()
            walker2 = walker2.next
            i++
        }
    }else if(size1<size2){
        let diff = size2 - size1
        let i = 0
        while(i<diff){
            walker1.next = new ListNode()
            walker1 = walker1.next
            i++
        }

    }
    
    walker1 = l1
    walker2 = l2

    while(walker1 && walker2){
        walker3.val = walker1.val + walker2.val + carry
        carry = Math.floor(walker3.val/10)
        walker3.val = walker3.val%10
        walker1 = walker1.next
        walker2 = walker2.next
        if(walker1 || walker2 || carry!==0){
            walker3.next = new ListNode(carry)
            walker3 = walker3.next
        }
    }

    return result    
};

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(9)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)





console.log(addTwoNumbers(l1,l2))