//Swapping variables without using 3rd variables (Js interview Question)
// 1 using Addition  & Substraction
// 2 using xoring
// 3 using multiplication & division
// 4 using dereferncing array
var _a;
var a = 10;
var b = 20;
console.log("\n    ---------Before swapping---------------\n      a :: ".concat(a, "\n      b :: ").concat(b, "\n"));
_a = [b, a], a = _a[0], b = _a[1];
console.log("\n    ---------After swapping---------------\n      a :: ".concat(a, "\n      b :: ").concat(b, "\n"));
