/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    const numerals = num.toString()
    const romanNumerals = []
    for(let i=0; i < numerals.length; i++){
        const curNum = numerals[i]
        const power = Math.pow(10,numerals.length - 1 - i)
        const val = map[power]
        const midVal = map[power*5]
        const highVal = map[power*10]
        const romanized = Array(Number(curNum)).fill(val)
        
        if(curNum < 4) {
            romanNumerals.push(...romanized)
        } else if (curNum === '4' ){
            romanNumerals.push(val, midVal)
        } else if (curNum === '5'){
            romanNumerals.push(midVal)
        } else if (curNum > 5 && curNum < 9) {
            const romanizedHigh = Array(Number(curNum - 5)).fill(val)
            romanNumerals.push(midVal, ...romanizedHigh)
        } else if (curNum === '9') {
            romanNumerals.push(val, highVal)
        }
    }
    return romanNumerals.join('')
};