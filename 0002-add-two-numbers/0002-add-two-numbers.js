/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    const dummyHead = new ListNode(null)
    let tail = dummyHead
    let cur1 = l1
    let cur2 = l2
    while(cur1 !== null || cur2 !== null || carry === 1){
        const val1 = cur1 === null ? 0 : cur1.val
        const val2 = cur2 === null ? 0 : cur2.val
        const sum = val1 + val2 + carry

        carry = sum > 9 ? 1 : 0

        const digit = sum % 10

        tail.next = new ListNode(digit)
        tail = tail.next

        if(cur1 !== null) cur1 = cur1.next
        if(cur2 !== null) cur2 = cur2.next
    }

    return dummyHead.next
};