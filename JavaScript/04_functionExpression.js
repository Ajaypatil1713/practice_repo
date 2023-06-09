function addition(){
    let a = 10;
    let b = 20;
    let result = a + b;
    console.log(`Addition of a and b is :${result}`);
}
addition();

function multiplication(){
    let num1 = 10;
    let num2 = 30;
    let mult = num1 * num2;
    console.log(`Multiplication of num1 and num2 : ${mult}`);
}
multiplication();

function personalDetails(firstName, lastName, collegeName)
{
    console.log(`First Name: `,firstName,`Last Name :`, lastName,`College Name :`, collegeName);
}
personalDetails("Ajay", "Patil","D.N Clg");

function swapValuesDude(name1, name2){
    console.log(`Before swapping variables : ${name1}, ${name2}`);
    let demo  = name1;
    name1 = name2;
    name2 = demo;
    console.log(`After swapping variables : ${name1}, ${name2}`);

}
swapValuesDude("Virat","Anushka")
swapValuesDude(1000, 2000);

function addThreeValues(para1, para2, para3){
    let result = para1 + para2 +para3;
    console.log(`Addition of ${para1}, ${para2}, ${para3} : ${result}`);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
