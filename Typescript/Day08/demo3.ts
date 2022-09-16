//Swapping variables without using 3rd variables (Js interview Question)
// 1 using Addition  & Substraction
// 2 using xoring
// 3 using multiplication & division
// 4 using dereferncing array

let a=10;
let b=20;

console.log(`
    ---------Before swapping---------------
      a :: ${a}
      b :: ${b}
`);

[a,b]=[b,a];

console.log(`
    ---------After swapping---------------
      a :: ${a}
      b :: ${b}
`);