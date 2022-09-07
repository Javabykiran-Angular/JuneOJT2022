// variable

var a1;
var a2,a3,a4;
var a_1,a$4;

// Data types
// number (int,long,double,float,short)
//string (''/"")
//boolean (true/false)
//any (number,string,boolean)
//void => It is a netural data => It doesn't point any thing
//mise. null & undefine => it acts as value as well as data type
// int a=null; core java

var b:number=10; // forward decl. & defin.
// console.log("Value of b is "+b);
// console.log('Value of b is '+b);
// console.log(`Use back tick operator 
//             value of b is ${b}
// `);

/** */
var b1:string;
b1='Sumit Raokhande';
// console.log('b1 Value is '+b1);

var b2!:string;
// console.log("Value of b2 is "+b2); //default value is undefined

var b3=2.5;
// console.log("Value of b3 is "+b3);

var b4:any;
b4=3.14;
// console.log("Value of b4 is "+b4);
b4='Sumit Raokhande';
// console.log("Value of b4 is "+b4);
b4=true;
// console.log("Value of b4 is "+b4);

//Type Assertion
// data type => may be any,object,response
var c:any;
// It has 2 way 
//1 Using Angle bracket syntax
//2 Using as syntax

//1 Using Angle bracket syntax
  var temp=(<string> c);
  // temp.

  //2 Using as syntax

  var temp2=(c as string);
  // temp2.







