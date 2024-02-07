let x = 2345;
let sum = 0;
while(x>0){
    let lastdigit = x%10;
    sum = sum + lastdigit;
    x = Math.floor(x/10);
}
console.log(sum);
