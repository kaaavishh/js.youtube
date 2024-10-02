let score="33";
let valueInNumber=Number(score);
console.log(valueInNumber);
//if score would have bee "33abc" then also data type will be Number but value would be Nan
//null 0
//undefined Nan
//"kavish" Nan
//Boolean=> 1 is true 0,"" is false, "kavish" is true 
console.log("1"+2);//12
console.log(1+"2");//12
console.log(1+2+"3");//33//this is messy code
console.log(+true);//tricky conversion

let num1=num2=num3=2;
//or
let n1,n2,n3=2;

console.log({n1,n2,num3});
//comparison converts null to number where as equal to == doesnt
console.log(null==0);//false
console.log(null>=0);//true

// === strict check also checks datatype
console.log(2=="2");//true
console.log(2==="2");//false
//clean code
