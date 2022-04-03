//task 1
let person = {
    firstName: "Jagadeesh",
    lastName: "G"
  };
  person.firstName = "Abhi"
  delete person.lastName;

  for (let val in person){
      
    console.log(person[val]);
  }
  
  
//task 2
let tot = 0
let salary={
    a:1500,
    b:2000,
    c:4500,
    d:5000
}
for (let i in salary){
    tot += salary[i]
}
console.log(tot)

//task 3

let pageInfo = {
    width: 500,
    height: 800,
    title: 'My page'
}
let multi = 0
for (let i in pageInfo){
    if(typeof pageInfo[i] == 'number'){
        multi += pageInfo[i]*2
    }
}
console.log(multi)


 /*/ calculator

let cal = {
    m:0,
    n:0,
    read: function() {
        m=parseInt(prompt())
        n=parseInt(prompt()
        
    },
    add: function() {
        let addn=this.num1+this.num2
        console.log(addn)
    },
    multiply: function() {
        let addn=this.num1+this.num2
        console.log(addn)
}
cal.read()
cal.add()
cal.multiply()*/
//constructor fun
function Calculate() {
    num1 = 0;
    num2= 0;
    this.read_ = function() {
        this.num1 = Number(prompt())
        this.num2 = Number(prompt())
    }
    this.add_=function(){
        let addn=this.num1+this.num2
        console.log("sum:",addn)
    },
    this.multiply_ = function(){
        let muln=this.num1*this.num2
        console.log("mul:",muln)
    }

    };
  
  let calculator = new Calculate();
  calculator.read_();
  calculator.add_()
  calculator.multiply_()
/*/laddder
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this
    }
  };
  
  ladder.up()
  ladder.up()
  ladder.down()
  ladder.showStep()
  ladder.up()
  ladder.showStep()*/
  