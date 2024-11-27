//Arrays

const myArr = [0,1,2,3,4]
const myHeros = ["Shaktiman","Naagraj"]
const myArr2 = new Array("tghdh",23,false)

// console.log(myArr2[0]);


//Array Methods
// myArr.push(8)

// myArr.pop()
// console.log(myArr);

// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(12));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join() //join convet into string
// console.log(myArr);
// console.log( newArr);

//Slice(exclude last element) and Splice(include last element and make new array and delete that selected element)

const n1 = myArr.slice(1,3)
console.log(n1);

console.log(myArr);

const n2 = myArr.splice(1,3)
console.log(n2);
console.log(myArr);


