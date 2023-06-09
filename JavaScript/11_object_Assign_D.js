let professor = {
  name: "Vivek Patil",
  age: 45,
  subject: "Java",
  id_no: 0226,
  isMarried: true,
  degrees: 
  {
    engineering: "CSC",
    phd: "Adv Computing",
  },
  certificates: [`Hacker Rank Participation`,`Certificate in IFE cource`,`Certificate in Adv Programming`],
  allDegrees: function(){
    let details1 = `${professor.degrees.engineering}, ${professor.degrees.phd}`;
    console.log(`Teachers Degrees are : ${details1}`);
    console.log(`Total Degrees are:`, Object.keys(professor.degrees).length);
  }
};
professor.allDegrees();

let var1 = professor.totalExpereience = "14 years"
console.log(`added one new property : ${var1}`);

let var2 = professor.degrees.phd = "Networking";
console.log(`Update phd degree as ${var2}`);

let var3 = professor.certificates.push("Oracle Certified");
console.log(`Add new certificate in array : ${professor.certificates}`);

let var4 = professor.certificates[professor.certificates.length-1];
console.log(var4);

