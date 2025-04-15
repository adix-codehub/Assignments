//Question 3

const prompt = require('prompt-sync')();
let n = prompt("Enter the number : ");

if(n % 2 == 0){
    console.log("It is even");
}
else{
    console.log("It is odd");
}