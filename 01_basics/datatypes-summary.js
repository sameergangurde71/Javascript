// Primitive Datatypes (call by Value {Woh changes memory address mein nhi uske copy mein krte hai}) 

//7 types :- String , Number , Boolean , Null , Symbol, Bigint , Undefined

const id = 234;
const Rid =243.65;

const isLoggedin = false;
const outsideTemp = null;

let val;

const Roll = Symbol('123');
const anotherId = Symbol('123');
console.log(Roll == anotherId)

const bigIntnumber = 8955547445211n


//References (Non-Primitives)

//Arrays , Objects , Functions

const Heros = ["Shaktiman" , "Nagraj" , "Doga"];

let myObj =  {
    name : "Sameer",
    age : 21
}

let myFunc = function(){
    console.log("Hello World");
    
}