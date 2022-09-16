//Shallow Copy & deep Copy (JS interview Question)

let a=10;

let b=a;

// console.log(`
//       a ::${a}
//       b ::${b}
// `)

b=200;

// console.log(`
// --------------------------------------------
//       a ::${a}
//       b ::${b}
// `)


let arr:number[]=[2,5,6];
let arr1:number[]=arr;

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


  let c=[45,85,66,74];
  let [...d]=c;

  console.log(`
        c :: ${c}
        d :: ${d}
  `)

  d[0]=90;

  console.log(`
  ------------------------
        c :: ${c}
        d :: ${d}
  `)