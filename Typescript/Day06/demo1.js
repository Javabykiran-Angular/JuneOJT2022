//Anonymous Function
// function does not have any name
var temp1 = function () {
    console.log("Anonymous Function is called of first Type function");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// let res1=temp2(4,6);
// console.log("Result is "+res1);
//fat arrow function/Arrow function
var temp3 = function () {
    console.log("Fat Arrow Function is called ");
};
//  temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log("Result is "+temp4(7,3));
// Optional parameter Function
function add1(a, b) {
    console.log("value of a is " + a); // 5
    console.log("value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); // NAN => Not a number
}
// add1(5);
function add2(a, b) {
    console.log("value of a is " + a); // 5
    console.log("value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); // NAN => Not a number
}
// add2();
// add2(8,4)
// default parameter functions 
function add3(a, b) {
    if (b === void 0) { b = 8; }
    console.log("value of a is " + a); // 10
    console.log("value of b is " + b); // 9
    console.log("Addition of a+b is " + (a + b)); // 19
}
// add3(10);
// add3(10,9);
function add4(a, b) {
    if (a === void 0) { a = 5; }
    console.log("value of a is " + a); // 10
    console.log("value of b is " + b); // 9
    console.log("Addition of a+b is " + (a + b)); // 19
}
// add4(7,11)
function add5(a, b) {
    if (a === void 0) { a = 5; }
    console.log("value of a is " + a); // 10
    console.log("value of b is " + b); // 9
    console.log("Addition of a+b is " + (a + b)); // 19
}
// add5();
// add5(10);
add5(10, 45);
