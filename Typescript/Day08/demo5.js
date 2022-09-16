//Simple Json Object
// json => java script object notation
// key & value
var obj = {
    fname: 'Sumit',
    lname: 'Raokhande',
    id: 9
};
//1 dot operator
//2 square operator
// console.log(`
//       -----------Using Dot Opeartor------------
//       First Name :: ${obj.fname}
//       Last Name  :: ${obj.lname}
//       Id         :: ${obj.id}
// `)
//2 square operator
console.log("\n      -----------Using Square Opeartor------------\n      First Name :: ".concat(obj["fname"], "\n      Last Name  :: ").concat(obj["lname"], "\n      Id         :: ").concat(obj["id"], "\n\n"));
