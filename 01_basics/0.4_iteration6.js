const myNumber = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumber.map( (nums) => nums = nums + 10)


//Chaining
const newNums = myNumber
                        .map( (num) => num = num * 10)
                        .map( (num) => num = num + 1)
                        .filter((num) => num =  num >= 40) //it writes only true values
console.log(newNums);
