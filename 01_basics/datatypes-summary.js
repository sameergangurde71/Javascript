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


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) Heap (Non-primitive)

let myYoutubename = "Sameergangurde"
let myanotherytname = myYoutubename;

myanotherytname = "HustlewithSameer"

console.log(myYoutubename);
console.log(myanotherytname);

let userOne = {
    email : "sameer.@google.com",
    upiid : "samerr@ybl"
}
let userTwo = userOne
console.log(userTwo);

userTwo.email = "Sam@gooogle.com"
console.log(userTwo);

{"type":"excalidraw/clipboard","elements":[{"id":"awrmeUiFzn4OqSASSQSdJ","type":"rectangle","x":360,"y":146.60000610351562,"width":291.20001220703125,"height":52.00001525878906,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a0","roundness":{"type":3},"seed":416708185,"version":77,"versionNonce":1950030137,"isDeleted":false,"boundElements":[{"id":"UNEdGELG6j7PTa4GXRDTs","type":"arrow"}],"updated":1732616907110,"link":null,"locked":false},{"id":"DpEUSoUcjpq80iprCObuz","type":"rectangle","x":364,"y":198.6000213623047,"width":279.20001220703125,"height":50.40000915527344,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a1","roundness":{"type":3},"seed":1534197273,"version":220,"versionNonce":1018287417,"isDeleted":false,"boundElements":[{"id":"XrL5d3gaJj7dI6oaShIB7","type":"arrow"}],"updated":1732616952599,"link":null,"locked":false},{"id":"ZK6AC69JOAPAxsDU6BjxV","type":"rectangle","x":370.4000549316406,"y":255.40005493164062,"width":268,"height":48,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":{"type":3},"seed":189100505,"version":174,"versionNonce":1440742457,"isDeleted":false,"boundElements":null,"updated":1732616824057,"link":null,"locked":false},{"id":"zNx4bLs42D7TAks59FgVF","type":"rectangle","x":372.0000305175781,"y":306.6000061035156,"width":263.9999694824219,"height":43.999999999999986,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":{"type":3},"seed":2041780791,"version":155,"versionNonce":184869529,"isDeleted":false,"boundElements":null,"updated":1732616498398,"link":null,"locked":false},{"id":"ydGWm6N_Eff2iFMXwGuKn","type":"rectangle","x":979.2000122070312,"y":174.60000610351562,"width":487.20001220703125,"height":276.00006103515625,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":{"type":3},"seed":2011741623,"version":36,"versionNonce":1724755447,"isDeleted":false,"boundElements":null,"updated":1732616504215,"link":null,"locked":false},{"id":"v78O7RdKB8H8Ml6Pnk7HJ","type":"text","x":1123.2000732421875,"y":508.20001220703125,"width":44.5999755859375,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"a9","roundness":null,"seed":953191481,"version":11,"versionNonce":268812761,"isDeleted":false,"boundElements":null,"updated":1732616534509,"link":null,"locked":false,"text":"heap","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"heap","autoResize":true,"lineHeight":1.25},{"id":"DD2NPhhbkWQBE6w5rZQdI","type":"text","x":398.3999938964844,"y":397.8000183105469,"width":54.51995849609375,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"aB","roundness":null,"seed":1608371959,"version":7,"versionNonce":373027129,"isDeleted":false,"boundElements":null,"updated":1732616552349,"link":null,"locked":false,"text":"stack","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"stack","autoResize":true,"lineHeight":1.25},{"id":"OCdgTgc8TPzMR8KJyhfnB","type":"text","x":443.20001220703125,"y":325.8000183105469,"width":147.5799102783203,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"aC","roundness":null,"seed":1585189143,"version":17,"versionNonce":455836439,"isDeleted":false,"boundElements":null,"updated":1732616573166,"link":null,"locked":false,"text":"myyoutubename","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"myyoutubename","autoResize":true,"lineHeight":1.25},{"id":"ZDRg0yOaI6yMnh-3ZqjLZ","type":"text","x":433.6000061035156,"y":258.60003662109375,"width":145.5799102783203,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"aD","roundness":null,"seed":679837399,"version":39,"versionNonce":157831033,"isDeleted":false,"boundElements":null,"updated":1732616820972,"link":null,"locked":false,"text":"myanothername","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"myanothername","autoResize":true,"lineHeight":1.25},{"id":"UoWIOfxxH7E2DqeSVTEJa","type":"text","x":1073,"y":261,"width":335.49981689453125,"height":100,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"aE","roundness":null,"seed":1086581305,"version":5,"versionNonce":2074516217,"isDeleted":false,"boundElements":[{"id":"UNEdGELG6j7PTa4GXRDTs","type":"arrow"},{"id":"XrL5d3gaJj7dI6oaShIB7","type":"arrow"}],"updated":1732616952599,"link":null,"locked":false,"text":"let userOne = {\n    email : \"sameer.@google.com\",\n    upiid : \"samerr@ybl\"\n}","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"let userOne = {\n    email : \"sameer.@google.com\",\n    upiid : \"samerr@ybl\"\n}","autoResize":true,"lineHeight":1.25},{"id":"5YP0MOKGP2XZFBBsh_b9e","type":"text","x":416,"y":217,"width":93.65994262695312,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"aH","roundness":null,"seed":1010198809,"version":3,"versionNonce":2084550361,"isDeleted":false,"boundElements":null,"updated":1732616881943,"link":null,"locked":false,"text":" userOne","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":" userOne","autoResize":true,"lineHeight":1.25},{"id":"gNQmILxdir7SConAEmEpw","type":"text","x":452,"y":173,"width":98.39994812011719,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"aI","roundness":null,"seed":624204153,"version":9,"versionNonce":1700319353,"isDeleted":false,"boundElements":null,"updated":1732616890926,"link":null,"locked":false,"text":" userTwo","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":" userTwo","autoResize":true,"lineHeight":1.25},{"id":"UNEdGELG6j7PTa4GXRDTs","type":"arrow","x":637.6000366210938,"y":164.1999969482422,"width":435.99993896484375,"height":113.60002136230469,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"aJ","roundness":{"type":2},"seed":1714722585,"version":77,"versionNonce":1003850265,"isDeleted":false,"boundElements":null,"updated":1732616907110,"link":null,"locked":false,"points":[[0,0],[435.99993896484375,113.60002136230469]],"lastCommittedPoint":null,"startBinding":{"elementId":"awrmeUiFzn4OqSASSQSdJ","focus":-0.6693034256493537,"gap":1,"fixedPoint":null},"endBinding":{"elementId":"UoWIOfxxH7E2DqeSVTEJa","focus":-0.11046120176078214,"gap":1,"fixedPoint":null},"startArrowhead":null,"endArrowhead":"arrow","elbowed":false},{"id":"XrL5d3gaJj7dI6oaShIB7","type":"arrow","x":621.6000366210938,"y":237,"width":434.39996337890625,"height":45.600006103515625,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":70,"groupIds":[],"frameId":null,"index":"aL","roundness":{"type":2},"seed":1520377273,"version":71,"versionNonce":1041548825,"isDeleted":false,"boundElements":null,"updated":1732616952599,"link":null,"locked":false,"points":[[0,0],[434.39996337890625,45.600006103515625]],"lastCommittedPoint":null,"startBinding":{"elementId":"DpEUSoUcjpq80iprCObuz","focus":0.02040509660368765,"gap":1,"fixedPoint":null},"endBinding":{"elementId":"UoWIOfxxH7E2DqeSVTEJa","focus":0.13321211939763308,"gap":17,"fixedPoint":null},"startArrowhead":null,"endArrowhead":"arrow","elbowed":false}],"files":{}}