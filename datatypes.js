//Data types in Javascript
//Data types are classified into two types
//Primitives and not primitieves

//Primitive Data types
//1.Number
//Number represents both integer and floating
// let num=42;
// let pi=3.14;
// console.log(typeof num)//we are using typeof to know the data type of the variable
// console.log(typeof pi)

// //2. String 
// //String represents the sequence of character enclosed in the single quotes(" ")or ('') or ''
// let name="venkat";
// let name2='rohith';
// console.log(typeof name,typeof name2);


// //3.Boolean :represents the logical entity=== active or inactive can be true or false
// let isActive =true;
// let isInactive = false;
// console.log(typeof isActive, typeof isInactive)

// //4.Undefied : A variable that has been declared but has not yet assigned to any value
// let cricket;
// console.log(typeof cricket)

// //5.Symbol : it represents immutable data type or some special symbols
// let sy = Symbol("INR")
// console.log(typeof sy)


// //6.Null :Represent the absence of the value, data type of null is object in javascript
// let movie = null;
// console.log(movie);
// console.log(typeof movie)

// //7.bigint : used to represent the integer with aribtary precision
// let nub = BigInt(45343434546546461334);
// console.log(nub);
// console.log(typeof nub);

// let nub1 = 45343434546546461334;
// console.log(nub1);
// console.log(typeof nub1);

//Non Primitive data types
//Object Array Function Date Regexp

//Primitive data types
//stack
//immutable
//copy values
// number string boolean null defined


//non primitive data types
//HEAP(allocate dynamic value)
//mutable (changable)
//copy the reference
//Object array function

//Non Primitive data types
//1.Object: A collection of properties where each property is defined as the key value pair
let person={
    name:"venkat",
    city:"chennai",
    state:"TN",
    country:"INDIA"
}
console.log(typeof person)


//2. Array: list like objects used to store multiple values in the single variable
let numbers = [1,2,3,4,5,6];
//let numbers = [1,2,3,4,5,6];// not used like this it takes more memory
console.log(typeof numbers);


//3. Function: a block of code design to perform a particular task
function welcome(){
    console.log("HI");
    console.log("HELLO");
    console.log("welcome");
}
welcome()


//4. Date : is also javascript and it reference is data types used to handle date and time
let date = new Date();
console.log(date);
console.log(typeof date);
//5. Regexp : used to match the text with the pattern, venkat@gmail.com
let regre=/ab+c/;
console.log(regre);
console.log(typeof regre)


var a=10;
//let a=20;//re assigning not possible
//const a=30;
console.log(a);
{
    let b=30;
    //const b=40;//same re assigning is not possible
    //var b=40;
    console.log(b);
}
let db=30;
{
    const a=20;
    const b=30;
    const c = 40;
    console.log(a,b,c,db);
}