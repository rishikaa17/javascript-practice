// for (let  = 0;  < array.length; ++) {
//     const element = array[];
    
// }
// for ([initial value /declaration]; [condition];[changer]){
//     //body
// }

//if score hits 5 don't print anything after that
//remove previous demand ,if score hits 5 skip  printing 5 but rest value
let userScore = 10;
for(minValue = 0; minValue <= userScore ; userScore-- ){
    let userName = "Rishika "
    // if (userScore == 5){
        //     break;
        // }
        if(userScore ==5 ){
            continue;
        }
        console.log(`userScore is ${userScore}`);
        console.log(userName);
    }