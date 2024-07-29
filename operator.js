//Arithmetic and logical Operators
//addition
//subtraction
//multiplication
//division
//exponential




//addition
let aa=10;
let bb=20;
console.log(aa+bb)
//subtraction
let cc= 30;
let dd=6;
console.log(cc-dd)
//multiplication
let a=10;
let b=20;
console.log(a*b)

//division
let c= 30;
let d=6;
console.log(c/d)

//modulus
let x=29;
let y= 4;
console.log(x%y)
//exponentiation
let z=2;
let v= 2;
console.log(z**v);

//compound assignment operators
let p=100;
p+=200;
console.log(p);

// let p=100;
// p-=200;
// console.log(p);

// let p=100;
// p/=200;
// console.log(p);

// let p=100;
// p%=200;
// console.log(p);


//assignment Operators
let x1=5;//= is nothing but assignment

// addition assignment
    let x2=5;
    x2 +=3;//x2=x2+3
/////////////////////////////////////////////////////
//Comparision Operators

    //==(equal to Operator)
    let a1 = 100;//number
    let a2= "100";//string
    console.log(a1==a2)//true because it checks only value

    //'===' (strictly equal or equality operator)
    let a3 = 100;//number
    let a4= "100";//string
    console.log(a3===a4)//false


    //"!="" (not equal to)

    let a5 = 10;
    let a6= 5
    console.log(a5!=a6)//true
    
    //"!==" (Strictly not equal) //it will check a7 and a8 are not equal or not the same type

        let a7=10;
        let a8="10";
        console.log(a7 !== a8) //true

    //">" (greater than) and "<" (less than) ,>= and <=

            // let q=10;
            // let r=20; 
            // console.log(q>r);//false

            
        let q=10;
        let r=20; 
        console.log(q<r);//true
///////////////////////////////////////////////////
//logical Operators
    //&& : Logical AND// if both are true then only it will be true
        let k1=true;
        let k2= false;
        console.log(k1 && k2);//false
    //|| : Logical OR //returns true if atleast one of the value is true
        let k3=true;
        let k4= false;
        console.log(k3 ||k4);//false

    //! : Logical NOT //it will negates the value

      let k5= false;
      console.log(!k5);//true

///////////////////////////////////////////
//bitwise Operators  //convert the number into binary
    //&: bitwise AND
    //|: bitwise OR

    let i=5;//0101
    let h= 3;//0011
    console.log(i&h);//0001
////////////////////////////////////
//unary operators//it converts the string into number
    //+ : unary plus
    let g= "5";
    console.log(typeof g);
    console.log(+g);
    console.log(typeof g);
    
    //-: unary minus

    let g1=5;
    console.log(g1);
    console.log(-g1);
    console.log(typeof g1);
    //++: increment(pre incrememt ++f amd post increment f++)
    let f=6;
    console.log(++f);//7
    console.log(f++);//7
    console.log(f++);//8
    //-- : decrement
        let s=5;
        console.log(s--);//5
        console.log(s--);//4
        console.log(--s);//2
        console.log(--s);//1
    
////////////////////////////////////

//ternary operators
    //condition ? true: false
    //ternary: it will evaluates the condition and it will returns the first expression if it is true otherwise return second one

    let age=30;
    let result =(age>=18)?"Adult" : "Minor";
    console.log(result);

/////////////////////////////////

//type operators
    //typeof
    let name="venkat";
    let value =10;
    console.log(typeof name ,typeof value);//string number

    //instanceof
    //used for object and array 

    let a10=[1,2,3,4];
    console.log(a10 instanceof Array);//true

    let a11={};
    console.log(a11 instanceof Object);//true
    let a12=Date();
    console.log(a12);
    console.log(a12 instanceof Array);//false

