function sumOfEvenNumbers(num){
    let sum = 0;
    for(i = 0; i<=num; i++){
        if(i % 2 === 0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumOfEvenNumbers(10));