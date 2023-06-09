function voteEligibility(age) 
{
    if (age <= 0 || age > 120 || age == undefined && age == null )
    {
        console.log(`${age} Invalid Data`);
    }
    else if (age <=18 )
    {
        console.log(`${age} Not eligible for vote`);
    }
    else
    {
        console.log(`${age} You are eligible for voting `);
    }
}
voteEligibility(17);
voteEligibility(45);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);