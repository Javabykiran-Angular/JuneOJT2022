//Shallow Copy & deep Copy (JS interview Question)
var a = 10;
var b = a;
// console.log(`
//       a ::${a}
//       b ::${b}
// `)
b = 200;
// console.log(`
// --------------------------------------------
//       a ::${a}
//       b ::${b}
// `)
var arr = [2, 5, 6];
var arr1 = arr;
// console.log(`
//   Arr is  :: ${arr}
//   Arr1 is :: ${arr1}
// `)
//   arr1[0]=500;
//   console.log(`
//   -----------------------
//   Arr is  :: ${arr}
//   Arr1 is :: ${arr1}
// `)
var c = [45, 85, 66, 74];
var d = c.slice(0);
console.log("\n        c :: ".concat(c, "\n        d :: ").concat(d, "\n  "));
d[0] = 90;
console.log("\n  ------------------------\n        c :: ".concat(c, "\n        d :: ").concat(d, "\n  "));
