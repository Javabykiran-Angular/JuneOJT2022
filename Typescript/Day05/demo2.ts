//functions


// 1 Function without paramter & without return type
// 2 Function with paramter & without return type
// 3 Function without paramter & with return type
// 4 Function with paramter & with return type

// 1 Function without paramter & without return type

function add1(){
  console.log("First type of function is called ")
}

// add1(); //calling function

// 2 Function with paramter & without return type

  function add2(a:number,b:number){
    console.log("Addition is "+(a+b));
  }

  // add2(3,4);


  // 3 Function without paramter & with return type

    function add3():number
    {
      return (4+4);
    }

    // let res=add3();
    // console.log(`Result is ${res}`);

    // 4 Function with paramter & with return type

    function add4(a:number,b:number):number{
      return (a+b);
    }

    // console.log(` Additio  is ${add4(10,8)} `);
    console.log(" Additio  is  "+add4(5,4));
    