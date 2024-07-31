// //Arrays
// //In javascript, arrays are used to multiple values in a single variable
// //Arrays can be declared using the square brackets[] or "Array" constructor


// let mobiles=["LG","SAMSUNG","OPPO"]//declaration and initialization
// console.log(mobiles)
// console.log(typeof mobiles)

// //another method for declaring the array
// let mobiles1= new Array("LG","SAMSUNG","OPPO")
// console.log(mobiles1)
// console.log(mobiles1[1])
// console.log(typeof mobiles1)


// //If we want to access the elements in the array, we have to use the index(starting index will be 0)

// let names =["venkat","james","preethi","hari","mahendera"]
// console.log(names.length)//5
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

// //modifying the array elements: We can change the vealue of the array elements by accessing the index.

// let players=["dravid","sachin","laxman","virat"];
// console.log("before modifying",players[0])
// players[0] = "Gambhir"
// console.log(players)
// console.log("After modifying",players[0])

// let names1=[1,,,3,4,5,,,6]
// console.log(names1.length)


// // ARRAY METHODS: PUSH, POP,SHIFT,UNSHIFT
// //PUSH
// //the push method add one or more elements to the end of the array and returns the new length of the array
// //Syntax is : array.push(ele1,ele2,.....)

// //examples
// // initialize an array
// let mobile2=["LG","SAMSUNG","OPPO"]//declaration and initialization
// console.log(mobile2)//3
// mobile2.push("Iphone")//We are pushing
// console.log(mobile2)// ["LG","SAMSUNG","OPPO","IPHONE"]
// console.log(mobile2.length)//new length :4
// mobiles.push("samsung","one plus")
// console.log(mobile2)


// //POP METHOD: removes the last element from an array and returns the removed element. This will change the length of the array
// //array.pop()
// console.log(mobiles1)
// mobiles1.pop();
// mobiles.pop();
// console.log(mobiles1)

// //UNSHIFT METHOD: adds one or more elements to the begining of an array and returns the new length of the array

// let mobile3=["LG","SAMSUNG","OPPO"]
// console.log("unshift before",mobile3)
// mobile3.unshift("samsung","one plus")
// console.log("unshift after",mobile3)

// //SHIFT METHOD: removes the first element from an array and returns that element
// let mobile4=["LG","SAMSUNG","OPPO"]
// console.log("shift before",mobile4)
// mobile4.shift()
// console.log("shift after",mobile4)

// let mobiles5=["lg","oppa","samsung"]
// let removeoppo="oppa";

// let removingoppa= mobiles5.filter(yoga => yoga !== removeoppo)
// console.log(removingoppa)


// ///FIND FINDINDEX FINDLASTINDEX METHODS IN JAVASCRIPT

// //Find method: returns the first element in the array that satisfies the provided function
//                   //example 1
// let numbers1= [1,3,5,2,7,8,10]
// //i wanted to find the first even no
// let findFirstEven=numbers1.find(num=>num %2===0);
// console.log(findFirstEven)

//                 //example 2

// let mobile=["samsung","lg","oppo","vivo","iphone","lg phone1"];
// //i wanted to find the mobile which the length is >4

// let findMobile=mobile.find(mob =>mob.length == 4)//here mob is the local variable
// console.log(findMobile)

// let findMobile1=mobile.find(mob =>mob.length == 2)//here mob is the local variable
// console.log(findMobile1)

//                 //example 3
// let users=[
//     {name:"ram",age:25},
//     {name: "shyam", age:18},
//     {name:"venkat",age: 30},
//     {name:"sanjeev",age : 40}
// ]

// //i wanted to find the user older than 26
// let adult= users.find(user=>user.age>26)
// console.log(adult)


// //findindex method returns the index of the first element in the array that satisfies the provided function
// //it will show us -1 as output
//             //Example 1
// let numbers2= [1,3,5,13,17,21]
// //i wanted to find the first even no
// let findFirstEven1=numbers2.findIndex(num=>num %2===0);
// console.log(findFirstEven1)//-1


// //findLast method: returns the last element in the array that satisfies the given condition,
// //if no element satisfying the condition it will return "undefined"

//                 //Example 1
// let numbers3= [1,2,5,12,7,17,21]
// //i wanted to find the first even no
// let findFirstEven2=numbers3.findLast(num=>num %2===0);
// console.log(findFirstEven2)//12


// //FindLastIndex: method returns the index of the last element in the array that satisfies the given condition,
// //otherwise it will return -1

//                 //Example 1
// let numbers4= [1,5,7,2,8,10,20]
// //i wanted to find the first even no
// let findFirstEven3=numbers4.findLastIndex(num=>num %2===0);
// console.log(findFirstEven3)//6


//LENGTH, JOIN, INCLUDES,REVERSE,KEYS AND FILL METHODS IN JAVASCRIPT
//length is the property which returns the no of elements in the array

// let number=[1,2,3,4,5];
// console.log(number.length)

// //interview qn
// let arr=[]
// console.log(arr.length);//0

// let arr1=[1,"two",{key:"value"},[3,5],true,null,undefined];
// console.log(arr1.length)//7

//join method: joins all the elements of an array into a string and returns that string

// let mobiles=["lg","oppo","iphone","vivo"];
// let joining=mobiles.join("----------------");
// console.log(joining);
// let joining1=mobiles.join("********           *************")
// console.log(joining1)

//includes method
// it will determines whether an array includes the value or not.
// if the value is present it will return as true otherwise false

// let numbets=[1,2,3,4,5];
// let includesCheck= numbets.includes(4);
// console.log(includesCheck)//true

// let mobiles1=["lg","oppo","iphone13","vivo"];
// let includesCheck1= mobiles1.includes("iphone");
// let includesCheck2= mobiles1.includes("oppo",1);//it will start checking from the given index
// console.log(includesCheck1)//false
// console.log(includesCheck2)//true



//REVERSE METHODS: it reverse the array. The first will become the last element


// let mobiles1=["lg","oppo","iphone13","vivo"];
// mobiles1.reverse()
// console.log(mobiles1)

// let numbets=[1,2,3,4,5];
// numbets.reverse()
// console.log(numbets)

//keys METHOD: This method returns the new array that contains the key of each index in the array


// let numbets1=[1,2,3,4,5];
// let getKeys=numbets1.keys();
// for(let key of getKeys){
//     console.log(key)
// }

// let numbesr=[1,2,3,4,,,,,,,,,,,,,,,10,11,,,,,,,,,,5]
// let getKeys1=numbesr.keys();
// for(let key1 of getKeys1){
//     console.log(key1)
// }


//Fill Method: Change all the elements in the array with the given value


// let  numbers=[1,2,3,4,5,6];
// numbers.fill("venkat");
// console.log(numbers)

// let numbers=[1,2,3,4,5,6];
// numbers.fill(0,2);//we are going to fill 0 with starting as 2
// console.log(numbers)

// let numbers=[1,2,3,4,5,6];
// numbers.fill(0,2,4);//we are going to fill 0 with starting  index as 2 and ending index as 4
// console.log(numbers)//[1,2,0,0,6]

//starting index will be inclusive
//ending index will be excluded

// we are going to fill with 0
//starting index will be 2(included)
//ending index will be 4(excluded)



////////////////////////////////////////////////////////////////////////////
/////MAP METHOD
// it creates a new array by calling the function on every element in the array
let numbers=[1,2,3,4,5];
let doubled= numbers.map(num=>num*2)
console.log(doubled)

let mobiles=["lg","iphone"]
let uppercase= mobiles.map(mobile=>mobile.toUpperCase());
console.log(uppercase)


//foreach method executes the provide function once for each array element

let numbes=[1,2,3,4,5];
numbes.forEach(num=>console.log(num));

let sum=0;
numbes.forEach(num=>sum+=num)
console.log(sum)


//EVERY METHOD: It test whether all the elements in the array that pass the given condition
//if it passes, then it will return the boolean value either true or false

let numberr=[1,2,3,4,5];
let value=numberr.every(num=>num>0)
console.log(value)//true

// let numberr1=[1,2,3,4,-5];
// let value1=numberr1.every(num=>num>0)
// console.log(value1)//false

//SOME METHOD: it test atleast one element in the array passes the given condition
//it returns boolean value


let numberr1=[1,2,3,-4,-5];
let value1=numberr1.some(num=>num>0)
console.log(value1)//false

//  FILTER METHOD: it will creates the new array with all the elements that passes the given condition
let number2=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=number2.filter(num=>num%2===0)
console.log(number2)
console.log(evenNumbers)

let mobile=['lg','iphone',"oppo","samsung","vivo"];
let filterMobiles=mobile.filter(mob=>mob.length>4)
console.log(mobile);
console.log(filterMobiles)
//interview question
//REDUCE METHOD: It is used to execute the reducer function on each element of the array 
//and resulting the single output

//array.reduce(callback(accumulator, currentvalue),initialvalue)
//accumulator is the result of the previous value
//current value: current element being processed in the array
//initial value: a value to use as the first argument to the first call of the callback
//if there is no initial value, then the first element of the array is used



let sales=[100,200,300,400,500]//some of the value
let totalsales=sales.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)
console.log(totalsales)

//first time accumulator =0,current value=100, 0+100=100
//second time accumulator =100,current value=200, 100+200=300


//CONCAT IN JAVASCRIPT
let str1="hello"
let str2="world"
console.log(str1+"   "+str2)
console.log(str1.concat(" "+str2))

//toString METHOD: converts a value into the string
let num=123;
console.log(typeof num);
let str=num.toString();
console.log(typeof str)

let a= true;
let b= a.toString();
console.log(typeof b)