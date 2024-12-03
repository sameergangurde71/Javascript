// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number");
        
    }
    //console.log(element);   
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value : ${j} and Inner loop : ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
        
        
    }
    
}

const myarray = ["Shaktiman","Ironman","Batman","Superman"]
// console.log(myarray.length);

for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element);
    
    
}


//break and continue

// for (let i = 1; i <= 20; i++) {
   
//     if(i == 5){
//         console.log("5 is best number");
//         break
        
//     }
//     console.log(`Value of i is ${i}`);
    
    
for (let i = 1; i <= 20; i++) {
   
    if(i == 5){
        console.log("5 is best number");
        continue //ek galti maaf
        
    }
    console.log(`Value of i is ${i}`);
    
    
}
