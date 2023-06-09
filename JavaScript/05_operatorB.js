
function greatestNumber(num1, num2){

    let result = num1 >= num2 ?  `${num1} is Greater` : `${num2} is Greater`;
    console.log(result);
} 
greatestNumber(10,-10);
greatestNumber(800,899);

function isEvenOrOddNum(num) {
    let result = num % 2 == 0 ? `True` : `False`;
    return result;
}
var result1 = isEvenOrOddNum(29);
console.log(result1);
var result2 = isEvenOrOddNum(44);
console.log(result2);
var result3 = isEvenOrOddNum(0);
console.log(result3);
var result4 = isEvenOrOddNum(101);
console.log(result4);

function wordLength(test) {
    let len = test.length;
    let checkNum = len % 2 == 0 ? `${test} Word has ${len} length hence its Even word` : `${test}Word has ${len} length hence its odd length`
    return checkNum;
}
let javascript = wordLength("JavaScript");
console.log(javascript);

let developer = wordLength("developer");
console.log(developer);

let Google =  wordLength("Google");
console.log(Google);