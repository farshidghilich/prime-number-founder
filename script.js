var num1=document.querySelector("#number1")
var num2=document.querySelector("#number2")
var res=document.querySelectorAll(".result")
var result1=document.querySelector(".num")
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${num1.value} and ${num2.value} are:`);
function data(){
// looping from lowerNumber to higherNumber
for (let i = num1.value; i <= num2.value; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
       document.write(i," ,")
    
   
    }
}
}