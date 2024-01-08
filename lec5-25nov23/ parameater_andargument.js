function calculateSquareOfNumber(num) {
    //logic to calculate square a number
    let squareValue = num * num;
    //return the output of the square value
    return squareValue;
}

let result1 = calculateSquareOfNumber(9); //here argument is 9
console.log(result1);
console.log(calculateSquareOfNumber(5)) //here argument is 5
console.log(calculateSquareOfNumber(8)) //here argument is 8

//write a funtion to calculaate the sum of 3 numbers passed as an argument return the sum as an output

function calculateSum (a,b,c){
    let sum = a + b + c;
    return sum;
}
let result2 = calculateSum(2,3,4);
console.log(result2);
console.log(calculateSum(10,20,30))

//alterantive

function calculateSum1 (a,b,c){
   return  a + b + c;
}
console.log(calculateSum1 (10,20,30))

//write a funtion to calculate the sum of some number passed as an argument return the sum as an output
