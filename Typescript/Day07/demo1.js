//Array
//array is growable & shrinkable dynamically
// array store homogenous as well as hetrogenous
var a = [2, 3, 5, 9];
var a1 = [];
var a2 = [4, 5, 6];
var a3 = [];
var a4 = [2.5, 'Sumit', 9];
// for(let i=0;i<a.length;i++){
//   console.log("Array is "+a[i]);
// }
// console.log("Dispaly the array using Join method "+a.join("#"));
// console.log("Dispaly the array using Join method "+a.join());
//Foreach => pending
// a.forEach((myvalue,i)=>{
//   console.log("Array value is "+myvalue+" Index is "+i)
// });
// rest parameter function
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(str);
    console.log("Item value is " + item);
}
// display('sumit',10,12,33,60,90,78,45);
//push & pop 
// if u want add a data dynmaically then u can use push & pop method
// It works on LIFO Principal 
// Last In first Out 
var b = [];
// b.push(10);
// console.log(b)
// b.push(20,52,63);
// console.log(b)
// let temp1=b.pop();
// console.log(b)
// console.log("Poped value is "+temp1);
// b.pop()
// console.log(b)
//splice  
// u can add/remove/replace from particular location of an array
var c = [15, 24, 63];
// console.log(c)
// c.splice(1,0,100);
// console.log(c);
// c.splice(2,0,45,77,90,83);
// console.log(c)
// c.splice(3,1);
// console.log(c)
// c.splice(3,2)
// console.log(c)
// c.splice(1,1,200);
// console.log(c);
// c.splice(1,2,201,500)
// console.log(c)
// c.splice(3,1,900,107)
// console.log(c)
//slice
// to copy a particular index data & it reurn a section of data
var d = ['Angular 12', 'React Js', 'Vue js', 'Emmber Js', 'JSP', 'Core Java', 'Spring Boot', 'Spring MVC'];
// let temp1=d.slice(1,6);
// console.log("Original Array "+d);
// console.log("Copied array "+temp1);
// let temp2=d.slice(1);
// console.log("Copied array "+temp2);
//map method
// it iterate element by element & perform there operation & u can return that value
var s = [2, 3, 4, 5, 6];
var res = s.map(function (value) {
    return (value * value);
});
console.log("Original Array " + s);
console.log("res array " + res);
