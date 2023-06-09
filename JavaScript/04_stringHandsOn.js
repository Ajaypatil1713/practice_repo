
function stringHandsOn(){

    let str = "   Hey you are doing good, keep it up   ";
    console.log(`Given String : ${str}`);

    let len =str.length;
    console.log(`Length of given string : ${len}`);

    let trimEle = str.trimStart().trimEnd();
    console.log(`Original String : ${trimEle}`);
    
    let removeEle = trimEle.length;
    console.log(`Length of given string : ${removeEle}`);

    let countSpace = len - removeEle;
    console.log(`Count of remove extra spaces : ${countSpace}`);

    let firstChar = trimEle.charAt(0);
    let lastChar = trimEle.charAt(trimEle.length-1);
    console.log(`First character is : ${firstChar} and Last Character is :${lastChar} `);

    let splitEle = trimEle.split(" ");
    console.log(splitEle);
    let countWords = splitEle.length;
    console.log(`Available words in given string : ${countWords}`);

    let indexOfGood = trimEle.indexOf("good");
    console.log(`Index of word "good" is :${indexOfGood}`);

    let substringEle = trimEle.substring(22,trimEle.length);
    console.log(`Using substring method substring is : ${substringEle}`);

    let sliceEle = trimEle.slice(22,trimEle.length);
    console.log(`Using Slice method substring is : ${sliceEle}`);

    let endsWithEle  =trimEle.endsWith("up");
    console.log(`String is ends with "up" :${endsWithEle}`);

    let startWithEle = trimEle.startsWith("Hey");
    console.log(`String Starts with "Hey" :${startWithEle}`);

    let includesWord = trimEle.includes("Hey");
    console.log(`Check the "Hey" word is available in given string :  ${includesWord}`);
}
stringHandsOn();