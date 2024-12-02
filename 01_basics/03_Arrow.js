const user = {
    username: "hitesh",
    price: 999,

    Welcomemessage : function(){
        console.log(`${this.username} welcome to website`);
        console.log(this)
        
    }
}
// user.Welcomemessage()
// user.username = "sam"
// user.Welcomemessage()

// console.log(this);

// function chai(){
//     username : "Sameer"
//     console.log(this.username); //undefined (because its work only in objects)
    
// }
// chai()
// const chai = function (){
//     username : "Sameer"
//     console.log(this.username); //undefined (because its work only in objects)
    
// }
// chai()

//  const chai =  () => {   //Arrow function
//         username : "Sameer"
//         console.log(this); //undefined (because its work only in objects) 
//     }
//     chai()


//*************** Arrow Functions *******************

// const addTwo = (num1,num2) => {
//     return num1+num2   //explicit return
// }

//const addTwo = (num1,num2) =>   num1+num2 //implicit return
const addTwo = (num1,num2) =>  (num1+num2 )

console.log(addTwo(3,2));

const addParantesis = () => ({name:"hitesh"}) //add parenthesis for object declaration in arropw function
console.log(addParantesis());
