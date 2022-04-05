// var operator = prompt('Enter operator (either +,-,* or /)');
// var number1 = prompt('Enter first number: ');
// var number2 = prompt('Enter second number: ');

// let result;

// if(operator == '+'){
//     alert('The Answer is: ' + (result = number1 + number2));
// } 
// else if(operator == '-'){
//     alert('The Answer is: ' + (result = number1 - number2));
// }
// else if(operator == '*'){
//     alert('The Answer is: ' + (result = number1 * number2));
// }
// else if(operator == '/'){
//     alert('The Answer is: ' + (result = number1 / number2));
// }
// else{
//     alert('Sorry, number invalid');
// }


//Using Functions

function add(number1, number2){
    var sum = number1 + number2;
    return sum;
}
function subtract(number1, number2){
    var diff = number1 - number2;
    return diff;
}

function multiply(number1, number2){
    var product = number1 * number2;
    return product;
}

function divide(number1, number2){
    var quotient = number1 / number2;
    return quotient;
}