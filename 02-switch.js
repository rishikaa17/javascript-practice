//WAP for pizza hurt rating system
/*
for 1 star give =  poor 
for 2 star give =  em ok 
for 3 star give =  average 
for 4 star give =  cool
for 5 star give =  great  
for 6 star give =  Awesome
for 7 star give =  Nailed it
*/

let pizzaRating = "2";
let pizzaRatingInNumbers = parseInt(pizzaRating)
/*
swith (expretion) {
    case value 1:
    statement 1;
    statement 2;
    break;
    case value 2:
    statement3;
    statement4;
    break;
}
*/
switch (pizzaRatingInNumbers){
    case 1:
        console.log("poor");
        break;
    case 2:
        console.log("em, ok");
        break;
    case 4:
        console.log("Average");
        break;
    case 5:
        console.log("Cool");
        break;
    case 6:
        console.log("Great");
        break;
    case 7:
        console.log("Nailed it");
        break;
    default :
    console.log("Not a valid Rating");
}