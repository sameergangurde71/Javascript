//singleton(literals ki tarh declare karte hai toh singleton nhi banta)
//Object.create


//Object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Sameer", 
    "full name": "Sameer Gangurde", //key character is work like a string ex :name,age,address etc
    age : 21,
    [mySym] : "mykey1", //syntax for symbol in objects for interview perspective
    address: "pune",
    email: "sameer.google@.com",
    isLogin: false,
    lastLoggin: ["Monday","Saturday"]
}

console.log(jsUser.name)
console.log(jsUser["email"]);
console.log( jsUser[mySym]);
console.log(jsUser["full name"]);
console.log(jsUser["age"]);

jsUser.email = "sameer.chatgpt@.com"  //change value 
Object.freeze(jsUser) // can not change value in jsuser object
jsUser.email = "sameer.microsoft@.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello my name is ${this.name}`); // this is used for references
    
}

console.log(jsUser.greeting); // it shows [Function (anonymous)]
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


