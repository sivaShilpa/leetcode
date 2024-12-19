/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        // initialize a new ListNode called retVal
        ListNode retVal = new ListNode();
        // initialize an arrayList called container to contain all the values in head
        List<Integer> container = new ArrayList<>();

        // read given head until the last node and transfer all values into an array
        ListNode current = head;
        while(current != null){
            container.add(current.val);
            current = current.next;
        }


        // // iterate through the array backward and get all the values from the array to retVal
        if(container.size() > 0){
            ListNode tail = retVal;
            for(int i = container.size() - 1; i >= 0 ; i--){
                System.out.println(container.get(i));
                tail.val = container.get(i);
                if(i != 0){
                    tail.next = new ListNode();
                    tail = tail.next;
                }
            }
            return retVal;
        }

        return head;
        
    }
}