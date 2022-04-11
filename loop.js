//1.. Create an Object that has properties "username" and "password" & "status". Fill those values in with strings
var liverpool = {
    username:"salah",
    password:"anfield123",
    status:"never walk alone"
}
console.log(liverpool);

//2.. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username:"salah",
        password:"egypt123",
        status:"never walk alone"
    },
    {
        username:"mane",
        password:"senegal123",
        status:"african best"
    },
    {
        username:"fabinho",
        password:"brazil123",
        status:"brazilian"
    },
    {
        username:"van-dijk",
        password:"netherland123",
        status:"netherland player"
    },
    {
        username:"allison",
        password:"brazil245",
        status:"brazillian keeper"
    },
    {
        username:"arnold",
        password:"england123",
        status:"right back king"
    }
];
console.log(database);
//3.. Accept username, password & status from the prompt and add it to the database array.
var userName = prompt("what is your username?");
var password = prompt("what is your username?");
var status = prompt("what is your status");

//4.. Create a function called signIn
function signIn(username, password){
    if(username === database[0].username &&
        password === database[0].password){
            console.log(liverpool);
        }
        else{
            alert("sorry, wrong username and password!");
        }
            
    }
    signIn(userName, password);

    //6.. update your signIn function to use loop; 
    var userName = prompt("what is your username?");
    var password = prompt("what is your username?");

    function signIn(username, password){
        for(var i=0; i < database.length; i++){
            if(database[i].username === username &&
                database[i].password === password){
                    return true;
                }
        }
        return false;
    }
signIn(userName, password);