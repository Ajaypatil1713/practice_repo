let str = "How are you mate."
//Find character of having index2
let result = str.charAt(5);
console.log(`Character present on index 2 is : ${result}`);

//Convert string into uppercase
let upper = str.toUpperCase();
console.log(`Upper Case String : ${upper}`);

//convert string into lowercase
let lower = str.toLowerCase();
console.log(`Lower Case String : ${lower}`);

//trim string 
// let trimEle = str.trimEnd().trimStart();
// console.log(`Trim from index 2 : ${trimEle}`);

//replace mate with friends
let replaceWord = str.replace("mate","friends");
console.log(`Replace mate with friends : ${replaceWord}`);

//split the string 
let splitEle = str.split("");
console.log(`Split string into characters : ${splitEle}`);

//indexOf
let indexofYou = str.indexOf("you");
console.log(`index of "you" : ${indexofYou}`);

//last indexOf
let lastIndexOf = str.lastIndexOf("mate");
console.log(`Last index of string : ${lastIndexOf}`);

//starts with return true or false
let startWithEle = str.startsWith("How");
let endsWithEle = str.endsWith("mate.");
console.log(`Given string is start with How : ${startWithEle}`);
console.log(`Given string is end with mate : ${endsWithEle}`);

//slice return a section of string
let sliceEle = str.slice(4,15);
console.log(`Slice from index 4 to index 15 :  ${sliceEle}`)

//substring
let subEle =str.substring(4,15);
console.log(`Substring from index 4 to index 15 : ${subEle}`);

//toString
let toString = str.toString();
console.log(toString);


