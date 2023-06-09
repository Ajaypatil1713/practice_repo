function maleMarriageEligibility(gender, age, boyName) {
    let checkNum = gender == "Male" && age >= 21 ? `Hey ${boyName} you are eligible for Marriage` : `Not eligible for Marriage`
    console.log(checkNum);

}
maleMarriageEligibility("Male", 25, "Bill Gates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

function femaleMarriageEligibility(gender, age, girlName) {
    let test = gender =="Female" && age >= 18 ? `Hey ${girlName} You are eligible for Marriage.` : `Not You are not eligible.`
    console.log(test);
}
femaleMarriageEligibility("Female", 16, "Jennifer");
femaleMarriageEligibility("Female", 27,"Malinda Gates");