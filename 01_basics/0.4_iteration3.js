// for of

//["","",""]
//[{},{},{},{}]

const arr = [1,2,3,4,5]
const char = ['a','d','w','p','b']

for (const num of arr) {
   // console.log(num);
    
}

const greeting = "hello world"
for (const greet of greeting) {
   // console.log(greet);
    if(greet == " "){
        continue
    }
    // console.log(greet);
  
    
}

//Maps

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set("FR",'France')

//console.log(map);

for (const [key,alue] of map) {
  //  console.log(key,':-',alue);//IN :- India
                               //USA :- United States of America
                                // FR :- France
    
}

const myObject = {
    game1: 'NFS',
    game2: 'GTA5'
}
for (const [key,value] of myObject) {
    console.log(key,':-',value); //myObject is not iterable (error)
    
}
