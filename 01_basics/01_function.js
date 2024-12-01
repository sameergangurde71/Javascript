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
console.log("Result" ,result );//undefined

function addTwonumbers(number1 , number2){
    // let result = number1 + number2
    // return result;
    return number1+number2
}
console.log("Result" ,result ); //Result 8

function loginUsermessage(username){
    if(username === undefined){
        console.log("please enter user name");
        return //after this return statement we jump out of a code
        
    }
     return `${username} just logged in`
}

console.log(loginUsermessage()); //undefined just logged in
console.log(loginUsermessage("Sameer"));//Sameer just logged in
