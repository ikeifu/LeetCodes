/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let accumulator = 0
    const romanNum = s.split('').reverse()

    for(let i = 0; i < romanNum.length; i++){
        const curLet = romanNum[i]
        const lastLet = romanNum[i-1]
        if (curLet !== 'I' && curLet !== 'X' && curLet !== 'C'){
            accumulator += dict[curLet]
        } else if(lastLet){
           dict[curLet] < dict[lastLet] ? accumulator -= dict[curLet] : accumulator += dict[curLet]
        } else {
            accumulator += dict[curLet]
        }
    }
    // console.log(accumulator)
    return accumulator
};