function evenOdd(num) 
{
    if(num%2==0)
    {
        console.log(`${num} is Even Number`);
    }
    else
    {
        console.log(`${num} is Odd Number`);
    }
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

function voteEligibility(person) 
{
    if(person >= 18 )
    {
        console.log(`Person is eligible for Vote`);
    }
    else
    {
        console.log(`Person is not eligible for voting.`);
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

function containCharacter(params) 
{
    let len = params.length;
    if(len > 10)
    {
        console.log(`String have more than 10 characters`);
    }
    else
    {
        console.log(`String have less characters than 10`);
    }
}
containCharacter("JavaScript-ES6");
containCharacter("Angular");