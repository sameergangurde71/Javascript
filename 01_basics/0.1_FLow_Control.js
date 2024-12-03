
// const userisLoggedin = false
// const temp = 20
// if(temp < 50){
//     console.log("less than 50");    
// }else{
//     console.log("greater than 50");
// }

// const score = 200
// if(score > 100){
//     let power = "fly";
//     console.log(`Power ${power}`);
       
// }
// console.log(`Power ${power}`); // error out of scope

// const balance = 2000
// if(balance > 500)   console.log("test"); //inline scope
  

const isLoggedin = true
const debitcard = true
const isLoggedinfromGoogle = false
const isLoggedinFromEmail = true

if(isLoggedin && debitcard){
    console.log(`user is allowed to purchase course`);  
}
if(isLoggedinfromGoogle || isLoggedinFromEmail){
    console.log(`User logged in`);
    
}
