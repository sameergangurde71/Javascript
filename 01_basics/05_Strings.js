const name = "Sameer"
const repoCount = 15

// console.log(name +" " + repoCount +" "  + "Value");//(not used mostly)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); /*is known as String interpolation {In modern age this
method is used}*/


const gamename = new String('Sameer-g')
console.log(gamename.length)
console.log(gamename[0])
console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase())
console.log(gamename.charAt(4));
console.log(gamename.indexOf('m'));

const newString = gamename.substring(0,4) //last elemnt is excluding
console.log(newString);

const anotherString = gamename.slice(-8,3)
console.log(anotherString)

const newStringOne = "    sAMEER  "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "sameergangurde%20dotcom"
console.log(url.replace('%20','-'));

console.log(url.includes('dot'));

const str = "ox is very hungry"
const words = str.split()
console.log(words);
