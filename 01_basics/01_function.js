const saymyname = function(){
    console.log("S");
    console.log("A");
    console.log("M");
}

//saymyname();

function addTwonumbers(number1 , number2){
    console.log(number1+number2);
}

const result = addTwonumbers(1,7)
// console.log("Result" ,result );//undefined

function addTwonumbers(number1 , number2){
    // let result = number1 + number2
    // return result;
    return number1+number2
}
// console.log("Result" ,result ); //Result 8

function loginUsermessage(username){
    if(username === undefined){
        console.log("please enter user name");
        return //after this return statement we jump out of a code
        
    }
     return `${username} just logged in`
}

// console.log(loginUsermessage()); //undefined just logged in
// console.log(loginUsermessage("Sameer"));//Sameer just logged in


function calculateCartPrice(...num1){
    return num1;
}

//console.log(calculateCartPrice(500,400,8,900,700));//[ 500, 400, 8, 900, 700 ]

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(500,400,8,900,700));//[ 8, 900, 700 ] first two value are stored in val1 and val2
const Iuser = {
    name: "ameer",
    age: 20
}
const user = {
    name: "Sameer",
    age: 21
}



function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
    
}
handleObject(user)

handleObject({
    name: "tejas",
    age: 22
})

const myNewArray = [200,100,800,760]

function findSecondArray(getArray){
    return getArray[1];
}
console.log(findSecondArray(myNewArray));
console.log(findSecondArray([800,900,654,781]));
