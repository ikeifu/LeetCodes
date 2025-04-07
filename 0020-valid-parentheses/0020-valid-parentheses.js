/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const queue = []
    for(let i=0; i < s.length; i++) {
        const curStr = s[i]
        const topOfQueue = queue[queue.length-1]
        if(curStr === '(' || curStr === '[' || curStr === '{') {
            queue.push(curStr)
        } else {
            if(isValidBracket(curStr, topOfQueue)) {
                queue.pop()
            } else {
                return false
            }
        }
    }
    if (queue.length !== 0) return false
    return true
};

const isValidBracket = (closing, open) => {
    if(closing === ')' && open !== '(') return false 
    if(closing === ']' && open !== '[') return false
    if(closing === '}' && open !== '{') return false
    return true
}