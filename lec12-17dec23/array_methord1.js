/** 
 * 1. slice --> given an array and you want a continuous segment of array then you can use slice
arr = [10,20,30,40,50,60,70,80];
index= 0  1  2   3  4  5  6  7
      -8 -7 -6  -5 -4 -3  -2 -1
*/                            -1
let arr = [10,20,30,40,50,60,70,80];

console.log(arr.slice(2,6));
console.log(arr.slice(2,6));
console.log(arr.slice(-5,-2));
console.log(arr.slice(-2,-4));
console.log(arr.slice(2));