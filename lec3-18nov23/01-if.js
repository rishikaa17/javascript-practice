let tempreture = 28
if (tempreture < 20){
    
    console.log("its reallly cold here")
}
else{
    
    console.log("its reallly hot here")
}
let score = 110 
let life = 3
let bullets = 1000

console.log("welcome to the PW game ")

if (score>99){
    console.log("you get a life up ");
    score = score - 100
    life++
    bullets = 2000
}
else  {
    console.log("you dont get a life up");
}
console.log(`Your score is ${score} and your life is ${life} Bullets are now ${bullets}`)

let balance = 50
if (balance < 100) 
    console.log("leo kar lo bat itte kam paise !!!"),
    console.log("leo kar lo bat itte kam paise !!!"),
    console.log("leo kar lo bat itte kam paise !!!")
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

let pizzaRating = "9";
let pizzaRatingInNumbers = parseInt(pizzaRating)

if (pizzaRatingInNumbers == 1){
    console.log("Poor");
}
 else if (pizzaRatingInNumbers == 2){
    console.log("em, ok");
}else if (pizzaRatingInNumbers == 3 ){
    console.log("Average");
}else if (pizzaRatingInNumbers == 4){
    console.log("Cool");
}else if (pizzaRatingInNumbers ==5){
    console.log("Great")
}else if (pizzaRatingInNumbers == 6){
    console.log("Awesome")
}else if (pizzaRatingInNumbers == 7){
    console.log("Nailed it")
}
else {
    console.log("The Rating is not defined");
}

//short Hand Syntex
if (balance > 10 ) console.log("IF PART")
else console.log("Else part");