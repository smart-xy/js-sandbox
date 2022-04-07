//Arrays

var array = ["Banana", "Apples", "Oranges", "Blueberrie"];

//1..Remove the Banana from the array.
array.shift();

//2.. Sort the array in order.
array.sort();

//3.. Put "Kiwi" at the end of the array.
array.push("kiwi");

//4.. Remove "Apples" from the array.
array.shift();

//5.. Sort the array in reverse order.
array.reverse();

//Question 2.. Using the below array.
//access "Oranges"
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1]);