//Keyless Car

function checkDriverAge(){
    var age = prompt("Welcome! Please Enter Your Age");
    if (Number (age) < 18){
        return alert("Oops!, You are too young to drive this car..... Powering off");
    }
    else if (Number (age) === 18){
        return alert("Congratulations! on your first year of driving.... Enjoy your ride!");
    }
    else if (Number (age) > 18){
        return alert("Powering On.... Enjoy your ride!");
    }
}
checkDriverAge();