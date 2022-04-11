
//task 1 show person name with titles 
function showName(firstName, lastName, ...titles) {
    console.log(titles +' '+ firstName + ' ' + lastName );
  }
showName("Jagadeesh", "G", "Mr.");
//task 2
let array = [1,2,3,4]
let array1 = [4,5,6]
let output =[...array, ...array1]
console.log([...new Set(output)])
//

//
 