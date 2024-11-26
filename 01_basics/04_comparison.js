// console.log("2">1);
// console.log("02">1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// The reason is that the equality check == and comparison > <> >= <= work differently in JS.
//comparison convert null to a number and treatins as a 0
//that's why line 6 is console.log(null >= 0) is true and console.log(null > 0); is false


console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); // false

// ===(strictly check)

console.log("2" === 2); //false


