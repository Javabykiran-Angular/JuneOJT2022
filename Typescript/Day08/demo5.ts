//Simple Json Object
// json => java script object notation
// key & value

let obj={
  fname:'Sumit',
  lname:'Raokhande',
  id:9
}

//1 dot operator
//2 square operator

// console.log(`
//       -----------Using Dot Opeartor------------
//       First Name :: ${obj.fname}
//       Last Name  :: ${obj.lname}
//       Id         :: ${obj.id}

// `)

//2 square operator

console.log(`
      -----------Using Square Opeartor------------
      First Name :: ${obj["fname"]}
      Last Name  :: ${obj["lname"]}
      Id         :: ${obj["id"]}

`)