function calculateSquareOfNumber(num) {
    //logic to calculate square a number
    let squareValue = num * num;
    console.log(squareValue) //instad if return we did log value

}
//in this way we can one time find the value of square but we cant store it anywhere 
//and the value in result1 will be undifined and if you dont store the value you'll loose it 
let result1 = calculateSquareOfNumber(9);
console.log(result1);
console.log(calculateSquareOfNumber(5))
console.log(5)
