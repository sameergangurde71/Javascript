//const coding = ["js","ruby","cpp","python","java"]

// coding.forEach( function (val){
//     console.log(val);
    
// })

// coding.forEach((val) => { //arrow function
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe) // we take reference

// coding.forEach((item,val,arr) => {
//     console.log(item,val,arr);
    
// })

const myCoding = [
    {
    Languagename : "Javascript",
    LanguageFileName: "Js"
},
{
    Languagename : "Java",
    LanguageFileName: "Java"
},
{
    Languagename : "Python",
    LanguageFileName: "py"
}]

myCoding.forEach((item) => {
    console.log(item.LanguageFileName);
    
})
