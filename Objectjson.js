//JSON is the javascript object notation
// {
//     "name":"venkat",
//     "age": 20
// }

const orders=[
    {
        orderId:1,
        user:{
            name:"venkat",
            age:20
        },
        total:100
    },
    {
        orderId:2,
        user:{
            name:"bob",
            age:28
        },
        total:1000
    },
]

orders.forEach(order=>{
    console.log(order.orderId);
    Object.entries(order.user).forEach(([key,value])=>{
        console.log(`${key}:${value}`)
    });
    console.log(`total:${order.total}`)
})

const person={
    name :"venkat",
    city:"bangalore",
    country:"india"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}


const cart={
    item1: 10.96,
    item2: 10000.694,
    item3: 2000
};

const totalCartValue= Object.values(cart).reduce((sum,price)=>sum+price,0);
console.log(`total cart value is ${totalCartValue.toFixed(2)}`)


let numbers=[1,4,8,2,3,9,0];
console.log(numbers.sort())

let names=['ram','bala','venkat','hari']
console.log(names.sort())

//interview qns
let numbersss= [1,10,3,2,20,30,100,50,500]
console.log(numbersss.sort())//it not working properly

//SORTING FUNCTION OR COMPARE FUNCTION
//ASCENDING

// let numbersss1= [1,10,3,2,20,30,100,50,500]
// numbersss.sort((a,b=>a-b));
// console.log(numbersss)

//DESCENDING
let numbersss1= [1,10,3,2,20,30,100,50,500]
numbersss1.sort((a,b)=>b-a);
console.log(numbersss1)

//a=1, b=10
//if the value is -ve then a will  come before b
//if the value is +ve then a will come after b
// zero it will in the same place

//TO REMOVE DUPLICATES 
function findValues(arr){
    let values={};
    let duplicates=[];
    for(let i=0;i<arr.length;i++){
        if(values[arr[i]]){
            duplicates.push(arr[i])
        }else{
            values[arr[i]]=true
        }
    }
    return duplicates
}
let array=[1,2,3,4,5,3,6,,1,2,7,8,8,4]
console.log(findValues(array));

// use sorting to find the duplicates

function findValue1(arr){
    arr.sort();
    let dup=[];
    for (let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            dup.push(arr[i])
        }
    }
    return dup
}

let arraa= [1,5,78,9,3,4,7,5,12,0,1,0,1,0,0]
console.log(findValue1(arraa))

//set and map

// set is unqiue in javascript
//it will find all the unique items in javascript

const setName=new Set([1,2,3,4,5,6,1,2,3,4,5,6]);
console.log(setName)
const dupli=[1,5,78,9,3,4,7,5,12,0,1,0,1,0,0];
const removedup=[...new Set(dupli)];//here we are creating new array by mentioning ...
//it will remove all the duplicate values
console.log(removedup)