// How to create an array in js 

let x = [];//pair of square brackets
// this above code intialize an empty array 

console.log(x);

let arr = ["RRM",null,10,undefined,false,33.33];
//this initialise a array with default value already
console.log(arr);
let array = Array(15);//This array methord is pre build, that is why you have to write Capital A and Array and pass the parameter as 15.
console.log(array);

// length of an array??
console.log(array.length);
console.log(arr.length);
console.log(x.length);

let arraywithall0 = Array(20).fill(0);
console.log(arraywithall0);
let arraywithindex0 = Array(20).fill(-1,5,8);
console.log(arraywithindex0);