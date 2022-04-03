// functions 
let inp ="hello"
function some(){
     var ="world"
     console.log(inp)
    if (true){
        let inp = "hi"
    }
    console.log(inp)
}

some();
console.log(inp)
//using switch statement
let operator=prompt('Enter operator between(+,-,*,/)');

let num1=parseInt(prompt('Enter first number'));
let num2=parseInt(prompt('Enter first number'));
let result;
switch(operator)
{
    case '+':
        result=num1+num2;
        alert(`${num1} + ${num2} = ${result}`);
        break;
    case '-':
        result=num1-num2;
        alert(`${num1} - ${num2} = ${result}`);
        break;
    case '*':
        result=num1*num2;
        alert(`${num1} * ${num2} = ${result}`);
        break;
    case '/':
            result = num1/num2;
            alert(`${num1} / ${num2} = ${result}`);
            break;
    default:
        alert("No operator")
}
//conversion from if to switch 
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

let b = +prompt('a?', '');
switch(b){
    case 'a==0':
        alert(0);
        break;
    case 'a==1':
        alert(1);
        break;
    case 'a==2 || a==3':
        alert('2,3')
        break;
}



