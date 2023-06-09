function tcsInterviewEligibility(gradScore,hscScore, sscScore, candidateName ) {
    let result = gradScore >= 70  || hscScore >= 80 || sscScore > 90 ? `Congrates ${candidateName} you are eligible for TCS interview` :  
     `Unfortunately you are not eligible for interview`
     console.log(result);
}
tcsInterviewEligibility(80, 86, 90, "Ajay");
tcsInterviewEligibility(70, 65, 55, "Vishal");
tcsInterviewEligibility(60, 69, 88, "Amesha");
