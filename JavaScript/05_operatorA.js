function squareOfWordLength(test){
    
    let square = test.length * test.length;
    console.log(`Square of ${test.length} is ${square}`);
    
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


function dev() {
    let str = "I Am Angular Developer";
    let len = str.length;
    console.log(`Length of given string : ${len}`);
    let totalWords = str.split(" ").length;
    console.log(`Total Numbers available in the String : ${totalWords}`);
    let result = len/totalWords;
    console.log(`Division of given strings : ${result}`);

    let mult = len*totalWords;
    console.log(`Multiplication of given strings : ${mult}`);
}
dev();