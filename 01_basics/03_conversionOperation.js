let score  = "null"

console.log(typeof (score));
let valueInint = Number(score)
console.log([typeof  valueInint,valueInint]);

//After conversion in numbers then their values
// "33" => 33
// "33abs" => NaN
// true/false => 1/0
// null => 0
// undefined => NaN
// "sameer" => NaN

let isLoggedin = "sameer"

let booleanInisLoggedin = Boolean(isLoggedin)
console.log(isLoggedin);
console.log(typeof isLoggedin);
console.log(typeof booleanInisLoggedin);

console.log(booleanInisLoggedin)

//1=> true ; 0 => false
// "" => false ; "sameer" => true


let someNumber = 65
let intoString = String(someNumber)
console.log(intoString);
console.log(typeof intoString);
