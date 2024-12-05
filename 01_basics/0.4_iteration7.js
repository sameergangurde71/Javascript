const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval //answer is stored in acc
    
// }, 3 ) // 3 is initialvalue 

const myTotal =myNums.reduce((acc,currval) => acc + currval,3)

console.log(myTotal);

const shoppingCart = [
    {
        course : "Javascript course",
        price : 2999
    },
    {
        course : "python course",
        price : 999
    },
    {
        course : "Android Development course ",
        price : 4999
    },
    {
        course : "Data science course",
        price : 12999
    },

]

const totalPrice = shoppingCart.reduce((acc ,item) =>acc + item.price,0 )
console.log(totalPrice);
