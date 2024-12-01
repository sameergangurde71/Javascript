//var c = 300 
let a = 54
if(true){
    let a = 10
    const b = 20
    //var c = 50    
    //console.log("Inner : ",a);
    

}
//console.log(a); 
//console.log(b); 
//console.log(c); //50 it is wrong because it can not access out of the scope value so we can't use var


function one(){  //jab chote bache badho se icecream lete toh thik hai pr agar viceversa thik nhi he
    const username = "Sameer"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
    
}
//one()



//********************************intresting concept********************* */

//case 1 declaration phele use kar skte he
console.log(addOne(5));
function addOne(num1){
    return num1 + 1
}

//declaration pehle use nhi kar sakte
addTwo(5) // this show error because of imp concept of hoisting
const addTwo = function(num){
    return num + 1
} 
