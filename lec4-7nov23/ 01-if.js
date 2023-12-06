//login system
const email = "" //= "rishikamishra581@gmail.com"
//if email is present ask for password. Otherwise ask for email

if (email){
    console.log("what is your password");
} else{
    console.log("What is your email");
}
//or we can simpley say that the that the email if string is not empty there is a email

// if (email != ""){
//     console.log("please enter a password");
// }else{
//     console.log("Please enter a email");
// }

console.log(Boolean(email))

//if user provide email,password ,then allow login,else ask for it 

if (email){
    if (password){
        console.log("Welcome to the game ");
    }else{
        console.log("Please enter your password");
    }
}else {
    console.log("Please provide password");
}

// Logical Operation 
// 1. && -> and
// 2. || -> or

//Above question other aproch 
 
if (email && password){
    console.log("Welcome to the game ");
}else {
    console.log("please enter email and password");
}

//allow user to signin with google or github
const googleLoginToken = ""
const githubLoginToken = ""
if (googleLoginToken || githubLoginToken ){
    console.log("Welcome to the game ");
} else {
    console.log("Plese login to view your account ");
}
let age = 19
let willYougetDrivinglicense = false

(age >= 18) ? willYougetDrivinglicense = true : willYougetDrivinglicense = false

const getDrivingLicense = age >= 18 ? "true part" : "false"


let loading = false

if (loading) {
     "loading ...."
}

console.log("Show the cards to user");

loading ? "show loading spinner" : "show card to user"