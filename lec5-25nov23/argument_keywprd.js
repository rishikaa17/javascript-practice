function addNumbers (){
    //no parameter passed in the funtion
    let result = 0;
    for (i=0;i<arguments.length;i++){
        //i denotes index of an arrey 0-based
        result += arguments[i];
    }
    return result; 
    //x += 1
    //x = x + 1;
}

//variable arguments
addNumbers(9,1,2);
addNumbers('rishika',0);
addNumbers(5);
addNumbers();