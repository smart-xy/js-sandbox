var operator = prompt('Enter operator (either +,-,* or /)');
var number1 = prompt('Enter first number: ');
var number2 = prompt('Enter second number: ');

let result;

if(operator == '+'){
    alert('The Answer is: ' + (result = number1 + number2));
} 
else if(operator == '-'){
    alert('The Answer is: ' + (result = number1 - number2));
}
else if(operator == '*'){
    alert('The Answer is: ' + (result = number1 * number2));
}
else if(operator == '/'){
    alert('The Answer is: ' + (result = number1 / number2));
}
else{
    alert('Sorry, number invalid');
}
