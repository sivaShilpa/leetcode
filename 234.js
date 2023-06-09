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
var isPalindrome = function(head) {
    let llArr = []
    let walker = head
    let isPalindrome = false
    while(walker){
        llArr.push(walker.val)
        walker = walker.next
    }
    for(let i=0; i<=llArr.length/2; i++){
        if(llArr[i] === llArr[llArr.length-1-i]){
            isPalindrome = true
        }
        else return false
    }
    return isPalindrome
};

const head = new ListNode(5)
head.next = new ListNode(1)
head.next.next = new ListNode(5)

console.log(head)

console.log(isPalindrome(head))