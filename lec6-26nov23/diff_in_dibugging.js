/*
function isEvenOrOdd(x){
    console.trace("Trace of the function");
    return x%2 == 0;
}
const namedFuncionExpresion = function exec() {
    const result = isEvenOrOdd(10);
}
const anonymousFuntionExpresion = function (){
    const result = isEvenOrOdd(11);
}
anonymousFuntionExpresion();
*/


function isEvenOrOdd(x, fn) {

    // call fn here
    fn();
    
    return x%2 == 0;
}

isEvenOrOdd(10, function () {
    console.log("Processing....");
    console.trace("Trace of the functions");
});