var middleNode = function(head) {
    let walker = head
    let arr = []
    while(walker){
        arr.push(walker.val)
        walker=walker.next
    }
    if(arr.length%2===0){
        return arr[arr.length/2]
    }else{
        return arr[Math.round((arr.length/2)-1)]
    }
    
};


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
var middleNode = function(head) {
    let walker = head
    let count = 0
    while(walker){
        count ++
        walker=walker.next
    }
    let walker1 = head
    if(count%2===0){
        let i = 0
        while(i<(count/2)){
            walker1=walker1.next            
            i++
        }
        return walker1
    }else{
        let i = 0
        while(i<=(count/2)-1){
            walker1=walker1.next            
            i++
        }
        
        return walker1
    }
    
};

const head = new ListNode(5)
head.next = new ListNode(1)
head.next.next = new ListNode(5)

console.log(head)

console.log(middleNode(head))