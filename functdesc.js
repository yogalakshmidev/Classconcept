//function
//if else 
//for loop
//  while do while

//Functions in javascript are blocks of code designed to perform a specific task

//function add(){

//}
//Function declaration: if function can be declared using the 'function' keyword
//followed by name, parameters in the parentheis() and a block of code within the curly brackets
//declaring the function name as welcome
function welcome(message){
    //we are return the welcome message
    return `hello, ${message}`
}

console.log(welcome("Welcome to function class"))//calling the function

//adding two values by passing the parameters a and b
function add(a,b){
    return a+b
}
//call the function
let sum= add(4,5);
console.log("the sum of the values is"+" "+sum);

//function declaration with default parameters
function multiply(a=1,b=5){
    return a*b
}
//we are calling the function without the arguments
let result=multiply();
console.log(result);

// call the function with two arguments

result = multiply(9,10);
console.log(result);

//function expressions: it defines a function and assign it to a variable

const welcome1=function(message){
    //we are return the welcome message
    return `hello, ${message}`
}

console.log(welcome1("Welcome to function class"))//calling the function

//Anonymous functions : A function without a function name

//setTimeout is the fn which will execute after certain time period
setTimeout(function(){
    console.log("This is anonymous fn")
},1000);//2 seconds

//declaring a variable, assigning to the anonymous fn
const greet = function(){
    console.log("hi hello")
}
greet();//anonymous function

// setInterval(function(){
//     console.log("This is anonymous fn")
// },1000);//2 seconds

// let numbers=[1,2,3,4,5]
// //multiply with 2 for each value in the array
// numbers.forEach(function(num){
//     console.log(num*2)
// })


//IIFE are the fns that are executed immediately after defied
//IIFE(Immediately invoked function Execution)
//defining the IIFE
(function(){
    console.log("This is the function runs immediately")
})();

(function(specialday){
    console.log(`hello today is ${specialday}`)
})(`Friday`);

//encapsulation the function
(function(){
    secret="jdkjfhkadhfiueihfieh";
    console.log(secret);
})();
console.log(secret)

//higher order functions HOF: are the function that accept other functions as argument
//defining the higher order function that takes function as argument

function someOperation(a,b,execute){
    console.log("something")
    return execute(a,b)//it will execute some fn and then return to the fn for further execution
}
function sub(x,y){
    return x-y;
}
function add2(x,y){
    return x+y;
}
console.log(someOperation(10,5,sub));
console.log(someOperation(8,6,add2));

//IN javascript conditions are used to execute different blocks of code based
// on the given condition is true or false


//IF STATEMENT
//'if' statement executes the block the code if the condition evaluates to true

//if(condition){ block of code}

let age=18;
if(age>=18){
    console.log("you are adult")
}

//IF ELSE STATEMENT: executes one block of code if the condition is true and another
//block of code if the condition is false

let age1= 16;
if(age1>=18){
    console.log("you are adult");
}else{
    console.log("You are not adult");
}

//if.... else if.... else in order to check multiple conditions
let grade=85;
if(grade>=90){
    console.log("Grade is A");
}else if(grade>=80){
    console.log("Grade is B");
} else if(grade>=70){
    console.log("Grade is C");
} else {
    console.log("Grade is D");
}

//WHILE LOOP executes a block of code as long it condition is true
let i=0;
while(i<5){
    console.log(i);
    i++;
}

//DO WHILE LOOP executes a block of code once before checking the condition 
// and then repeats the loop as long as the condition is true
let j=0;
do{
    console.log(j);
    j++
}while(j<5)

let valueforWhile=0;
let valueforDowhile=0;
//while loop
while(valueforWhile>0)
{
    console.log("while loop ")
    valueforWhile--

}
console.log("outside the  while loop")

//do while
do{
    console.log("i am inside the do whileloop")
    valueforDowhile--
}while(valueforDowhile>0)
    console.log("outside the dowhile loop")



// SWITCH STATEMENT
//executes one block of code among many options based on the value of the expression

// switch(expression){
//     case value1:
//         break
// }

let day=2;
switch(day){
    case 1:
        console.log("Monday");
        break
    case 2:
            console.log("Tuesday");
            break
    case 3:
            console.log("Wednessday");
            break
    default:
        console.log("Weekend")
    }

let username="admin";
let password = "password123";
if(username==="admin"&& password==="password123"){
    console.log("login successfuly");
}else{
    console.log("Please enter corrrect credential")
}

let income=60000;
if(income<=20000){
    console.log("You dont have to pay any tax")
} else if(income>=50000){
    console.log("You have to pay tax 10%")
}

//kprint even number from 0 to 10
let num =0;
while(num<=10){
    if(num%2 === 0){
        console.log(num);
    }
    num++;
}
//sum of the integers from 1 to 100
let sum1 =0;
let g=1;
while (g<=100){
    sum1 +=g;
    g++;

}
console.log(sum1);

//user input validation
// let isValid= false;
// let input= prompt("Enter the number greater than 10");
// while(!isValid){
// if(input > 10){
//     isValid=true;
//     alert("input which is entered is true");
// }else{
//     alert("please enter the valid input")
// }}


//FOR LOOP FOR IN FOR OF

