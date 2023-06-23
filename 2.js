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
// class LinkedList {
//     constructor(node, next)
//     {
//         this.node = (node===undefined ? null : node)
//         this.next = (next===undefined ? null : next)
//         this.head = null
//         this.size = 0
//     }
 
//     // functions to be implemented
//     // add(element)
//     // insertAt(element, location)
//     // removeFrom(location)
//     // removeElement(element)
 
//     // Helper Methods
//     // isEmpty
//     // size_Of_List
//     // PrintList
// }
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode()
    let walker3
    let walker1 = l1
    let walker2 = l2
    let size = 0
    let temp = 0

    while(walker1 && walker2){
        temp += walker1.val + walker2.val
        if(temp.toString().length === 1){
            walker3 = new ListNode(temp)
            console.log(walker3)
            if(size === 0){
                result = walker3
            }
            size++

        }else{
            let tempArr = temp.toString().split("")
            walker3= new ListNode(Number(tempArr[1]))
            console.log(walker3)
            temp = Number(tempArr[0])
            if(size === 0){
                result = walker3
            }
            size++
        }
        walker1 = walker1.next
        walker2 = walker2.next
        walker3 = walker3.next
    }

    return result    
};

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)





console.log(addTwoNumbers(l1,l2))