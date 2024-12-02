//Immediately Invoked Function Expressions (IIFE)

//Syntax ()();

// (function chai(){ //named iife

//     console.log(`DB connected`);
    
// })();

((name) => { //simple iife
    console.log(`DB not connected ${name}`);
    
}) (`Sameer`)
