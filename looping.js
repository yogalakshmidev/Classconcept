//lIn javascript we have to use different loops for, for ..in,
//for..of are differnt loops used to iterate over the data

//FOR LOOP:
//which will iterate over the block of code
//Syntax: for(initialization;condition;increment/decrement){code to be executed

let i=[1,2,3,4,5]
for(i=0;i<5;i++){
    console.log(i);
}


let mobiles=["LG","OPPO","VIVO","SAMSUNG","APPLE"];//5
console.log("Mobiles length ", mobiles.length);
console.log("extracting the value",mobiles[0]);
//loop through this mobile array by index
for(i=0;i<mobiles.length;i++){
    console.log(mobiles[i]);
}
//1) i=0;0<5; mobile[0];//output LG
//1) i=1;1<5; mobile[1];//output OPPO

let numbers = [];
for(i=1;i<=10;i++){
    numbers.push(i);
}
console.log(numbers);


//---------------------------------
//2) for ..in loop: iterates over the properties of an Object.It is used for iterating over the object MediaKeySession
//systax is : for(key in object)

// iterates over the properities of an object
let persons={
    name:"venkat",//key:value
    city:"bangalore",
    country:"INDIA"
}

for(let person in persons){
    console.log(person+"::::"+persons[person]);
}

let books ={
    title : "Good Luck",
    authour: "venkat", 
    publishedyear: "2024"
}
for (let sangeeth in books){
    console.log(books[sangeeth]);
    console.log(sangeeth + ":"+books[sangeeth])
}

//....................................
//for...................... of loop
//iterates over the object like arrays, string etc

let numbers1=[10,20,30,40,50];//wanted to iterate over this array of elements
for(let num of numbers1){
    console.log(num)
}

let str="venkat";
for(let singlechar of str)
{
    console.log(singlechar);
}

let student={
    name:"ram",
    age: 20,
    city:"chennai",
    subjects:{
        math:"A",
        science:"B",
        social:"c"
    }
}
for(let key in student){
    console.log(key+":"+student[key]);
}

for(let key in student.subjects){
    console.log(key+":"+student.subjects[key]);
}

//array of objects

let peoples=[
    {name:"ram",age:20},
    {name:"john",age:39},
    {name:"jack",age:25},
]
//iterate over the objects in the array
for(let people of peoples){
    console.log(people.name + " is " + people.age +'years old')
}