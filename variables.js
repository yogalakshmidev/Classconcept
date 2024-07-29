// var a = 5;
// console.log(a);

// var b= 20;
// var c = 50;
// var d = b+c;
// console.log(d);

// r = 1000;//we can also declare like that but it is not advisible because some browser shows error
// console.log(r);

// var x=20;
// console.log(x);

// var x=30;
// console.log(x);

//When we use the variables, redeclaration is possible
//When we add the values , existing values will be overridden
// variables
//     In javascript variables are used to store the data that can be referenced and manupulated with in the program
//     A variables act as container for the value

//     In javascript there are three ways to declare the variables

//     var
//     let
//     const      .
    
// var a=10;
// var b=20;
// var c=30;

// {
//     var a=100;
//     var b=200;
//     var c=300;

// }
// {
//     var a=1000;
//     var b=2000;
//     var c=3000;

// }

// console.log(a,b,c)//global scope

// //variables can be redeclared and it is the global function scope
// console.log(name1);//when we try to access the name before it declaration it is undefined
// var name = "venkat";//We are declaring and assigning values
// console.log(name1);//venkat
// var name1 = "james";
// var name1 = "rohinth";
// console.log(name1);

//let the variables which are declared with let are block scoped
//means they will be accessible within the block and variables declared with let cannot be re assigned

// let a=10;
// console.log(a);
// let a=20;
// console.log(a);

let b =20;
let c =30;
let d =40;
console.log(b,c,d)

{
    
    let b=1;
    let c=2;
    let d=3;
    console.log(b,c,d)
}
{
    let b=11;
    let c=22;
    let d=33;
    console.log(b,c,d)
}

let name1="venkat";
console.log(name1);
name1="james";
console.log(name1);

let name3;
name3= "venkat"
console.log(name3)
//const
// const name2="preethi"
// const name2="venkat"
// const name4;
// name4= "venkat"

const z=10;
//z=16;
console.log(z)

const mobiles =["lg","samsung",'idea']
//mobiles =["lg","samsung"]
mobiles.push("apple","bpl");//we are modifying here but not changing or declaring
console.log(mobiles)

var a=10;
a=20;
console.log(a);

let bc=20;
//let bc=30;//not possible redeclaration
bc=30;
console.log(bc);

const bd=30;
//let bc=30;//not possible redeclaration
//bd=30;//assignment to const is not possible
console.log(bd);

