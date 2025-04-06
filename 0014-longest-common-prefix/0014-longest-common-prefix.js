/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs[0].length === 0) return ''
    const word = strs[0].split('')
    let common = word.length
    for(let i=1; i < strs.length; i++){
        let n = 0
        while(word[n] === strs[i][n] && word[n]){
            console.log(strs[i][n])
            n++
        }
        common = Math.min(common, n)
        n = 0
    }
    return word.slice(0, common).join('')
};