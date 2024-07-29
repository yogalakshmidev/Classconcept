//Scope in javascript
//it determines the accessibility(visibility ) of the variables , functions and objects

//types of scopes in javascript
//1) global scope 
//2)local /function scope 
// 3) block scope

//1)Global scope:
//Variables that are declared outside the function are in the global scope, they can be accessed from everywhere in the code.

var name1="venkat";//this is a global variable
function something(){
    console.log("inside",name1);//we are trying to access the global variable called name1 inside the fn
}
something();

//accessing the global variable outside the function
console.log("outside",name1);

//2)Local/function scope
//variables declared within the function are in the local or functional scope. They cannnot be accessed from the outside of the function

function message(){
    //local variable
    var localName ="venkat";
    console.log(localName);
}
message();
//trying to access the local variable
//console.log(localName);//it shows error


//3) Block scope: variables that are declared with 'let' or 'const" are considered as block scope.They cannot be accessed outside the block

{
    let name1="venkat";
    const name2="shiva";
    console.log(name1,name2);
}

//trying to access the block scope outside the block which is not possible 
//console.log(name1,name2)

function one(){
    var a=10;
    function two(){
        var b = 20;
        console.log(a,b);//10 20
    }
    two();//calling the two fn
    //i am tring to access the two function

    //console.log(b);//undefined
}
one();

var city="chennai";
//immediately invoked fn:   IIF
(function(){
    console.log(city);//chennai
})();
console.log(city);//chennai
//-------------------------------------------
var global1 = "Global 1";
function outerFunction(){
    var outerVar = "Outer 1";
    function innerFunction(){
        var innerVar= "Inner 1";
        console.log(global1,outerVar,innerVar);
    }
    innerFunction();
    //trying to access the inner fn
    //console.log(innerVar)//undefined
}

outerFunction();


///////////////////////////////////////////////////////////////////////////////

//hoistring in javascript is the behaviour where variables and function declatations are moved to the top of their 
//scope during the compilation phase before the core execution

var a;//declaration
console.log(a);//only with this it show reference error
a=2;//undefined//initialization

//javascript will host the declaration either variable and functions

function something1(){
    console.log(b);
    var b=10;
}

something1();

//using hositing allows function, variable to be used before they declared. This will 
//help to structure code properly.

//main logic:
console.log(displayname("venkat"));
console.log(calculateAge(2014));

//function login:
function displayname(name){
    const age= calculateAge(2024);
    return `user ${name}, Age: ${age}`
}

function calculateAge(birthyear){
    const currentYear = new Date().getFullYear();
    console.log(currentYear,birthyear);
    //calculate the age based  on the current year
    return currentYear-birthyear;

}


// console.log(displayname("venkat"));
// console.log(calculateAge(2014));
var a1;//behind the screen , it will move all the declaration  on the top of function so we get undefined
//without this you got reference error
console.log(a1);
a1=10;//var a1=10;
console.log(a1);


console.log(welcome());
function welcome()
{
    return"hellow hi how are you"
}

//we can call like this or move to the top at he declaration... code structure
// console.log(welcome());


var sum=function(x,y){
    return x+y;
}
// console.log(sum(1,5));

///CODING STANDARDS
// let a=10;
// let b=20;
// let c=30

//let a=10,b=20,c=30;
//let a=10,b=20, c=30;
    let name="venkat";
    //let 1name="venkat"(wrond we should not start with variable name with number)
    //let _name ="venkat"'
    //let $name="venkat"
//concatination is done for addition rest for all it works as mathematic operation
     //when we have the string after + sign 
     //that if we add the numbers it will treat all the other  string
    let value = 10+20+"100";
    console.log(value)

    let value2="200"+100+50;    
    console.log(value2)

    let value3="200"/100
    console.log(value3)

    let value4= "200"-100;
    console.log(value4);

    let value5=10+20+30+"50"+9+10+9000+2000;
    console.log(value5)

    //Interview question
    //What is hoisting in javascript
    //what are the different scope available in javascript
    //what is anonoymous function
    //what is different b/w function declaration and function expression
    //what is IIFE
    //difference b/w for in  and for of
    //what is different b/w switch, while and do while

    var a=10;
    var b="10";
    console.log(a==b)
    console.log(a===b)
    //difference b/w equal and equality operator
    //difference b/w var const and let
    //what are datatypes
    //List the primitive data types
    //do we have any other data types. yes we do have non-primitive datatypes
    //what is client and server communication
    //difference b/w browser js and node js

    //print the sum of the numbers
    //reverse the given number
    //find the duplicates in  the given array
    //remove the duplicates in the given array

    //how to debug javascript
    