//functions are blocks od code tht are designed to perform 
//  specific tasks

//function are invoked when something calls it

/*
   function nameoffunction(optional params)
   {
      statement(s)
   }
*/

//simple output function 
function printHello()
{
    //display a msg in the id named "printHello"
    document.getElementById("printHello").innerHTML = "Hello There!";
}

//call the printHello function 
printHello();

//this function accepts two values as parameters
function addition(a,b)
{
    //a and b are parameters that can be used in the function statements
    //local variable that holds the sum of the values
    var s = a + b;

    // return the calculated value of the sum (local variable)
    return s;
}

// call on the function and store the result in a variable
var sum = addition(3,5);

//place the sum into the output in named 'addition' in our HTML

document.getElementById("addition").innerHTML = "3 + 5= <b>" +sum + "</b>";

//JS Built in fucntions
let longDecimalValue = 2313.32423;
//use Math.floor() to round a value down
let roundedDown = Math.floor(longDecimalValue);
//use Math.ceil() to round a value up
let roundedUp = Math.ceil(longDecimalValue);

//display the rounded values in the id named "rounded"
document.getElementById("rounded").innerHTML = longDecimalValue + "rounded up using .ceil(): <b>" + roundedUp + "</b> <br> " + longDecimalValue + " rounded down using .floor(): <b>" + roundedDown + "</b>"; 


//document.getElementById("rounded").innerHTML = long_decimal + " rounded up using .ceil(): <b>" + rounded_up + "</b> <br>" + long_decimal + " rounded down using .floor(): <b>"+ rounded_down +"</b>";
// array of strings
var fruits = ['apple', 'orange', 'banana', 'cherry', 'strawberry', 'mango'];

//variable that will hold the string version of the array
var output ="[";

// loop through the items in the array and add the output string
for (var i = 0; i < fruits.length-1; i++)
{
    // add the text to the output
    //if (i != fruits.length -1)
        output += fruits[i] +", "; // if not the last index in the array
   // else
        // if we do get to the end of the array
       
}
output += fruits[i] + "]";

document.getElementById("fruit").innerHTML = output;
/*
//function  that mulpiplies a values times 3
function timesThree(value)
{
    return value * 3
}
*/
// create a random array
var numbers=[];
//generate a random (any number)int
var count = Math.floor(Math.random() * 11); // multiplying by 11 produces a value between 0-10
// uuse a for loop to add to array using .push()
for (var i = 0; i <= count;  i++)
{
    numbers.push(Math.floor(Math.random() * 100));
}
// display array
var output1 = "[";

numbers.forEach((number, index) => {
    if (index != numbers.length - 1)
        output1 += numbers[index] + ",";
    else
        output1 += numbers[index] + "]";
});
document.getElementById("number1").innerHTML = output1;



/*
// use map() to apply an inline function to an array and make a copy of the array with modified contents
var times_three = numbers.map(number => {return number * 3});
​
var output = "[";
​​
// populate with a forEach()
times_three.forEach((number, index) => {
    if (index != times_three.length - 1)
    output += times_three[index] + ", ";
else
    output += times_three[index] + "]";
})
​
document.getElementById("numbers2").innerHTML = output;
*/
