//task
function camalize(str){
    let array = str.split("-")
    let empty_array=""
    array.forEach((m,n)=>{
        if (n!=0){
            m = m.charAt(0).toUpperCase() + m.slice(1)
            empty_array +=m
        }else{
            empty_array += m
        }
    })
    return empty_array
}
console.log(camalize("background-color"))

//task 
let arrObj = [
    { name: "Shantanu", age: 27 },
    { name: "Vignesh", age: 24 },
    { name: "Priya", age: 24 },
    { name: "Goutham", age: 26 },
  ]; // ['Shantanu','Vignesh','Priya', 'Goutham']

let propertyNames = arrObj.map((m,n)=>{
    return m.name
})
console.log(propertyNames)

//calculator constructor with methods
function calculator(str){
    this.adn =function(){
        let m = str.split("")//['5', ' ', '+', ' ', '5']
        
        let add = 0;
        if(m.includes("+")){// includes returns true or flase
            m.filter((n) => n!= "+" && n!=" ").forEach((n) => add += parseInt(n))
        }
        console.log(add)
    }
    
}
let calculate = new calculator("5 + 5")
calculate.adn()

//set interval
let counter = 0
setInterval(function(){
    console.log(counter)
    counter += 1
},1000)

//clear interval
let uniqueId = setInterval(function() {
  console.log(counter);
  counter = counter+1;
}, 1000);

clearInterval(uniqueId);
/*/ 
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
printNumbers(5, 10)
/*/
//
function printNumbers(from, to) {
    setTimeout(function int() {
    console.log(from++);
    if (from <= to) setTimeout(int, 1000);
    }, 1000);
    }
printNumbers(1,5)
/*/
function printNumber(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  for (var i = 1; i <= 5; i++) 
  printNumber(i);
/*/
let i = 0
setTimeout(() => {
    alert(i)
}, 1000);
for (let j = 0; j<1000; j++){
    i++
}