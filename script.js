//get and HTML collection of elements with the class name digit and then create an array from it
let numBtn = Array.from(document.getElementsByClassName('digit'));
let opsBtn = Array.from(document.getElementsByClassName('opsBtn'));
let displayNum = document.getElementById('display');
displayNum.textContent = '0';
let userNum;
let firstUserInput;
let operation;
let answer;
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equals');

/**
 * The operators object can be used to complete an arithmeic operation
 * when the operator is given as a string. A function can pass two numbers
 * and an operator with the type of a string. If the operator matches a key,
 * then an arrow function will be run with the two numbers and be evaluated
 * with said operator.
 */
let operators = {
    '+' : (a,b) => a+b,
    '-' : (a,b) => a-b,
    '*' : (a,b) => a*b,
    '/' : (a,b) => a/b,
};
/**
 * This function can be used to solve basic arithmatic
 * by passing parameters into the operators object
 */
function operate(num1, operation, num2){
    
    if (operation in operators){
        Number(num1);
        Number(num2);
        answer = operators[operation](num1, num2)};
        displayNum.textContent = answer;
        console.log(answer);
        return answer;
   
};


equalBtn.addEventListener('click', () => operate(firstUserInput, operation, userNum));

//operate(firstUserInput, operation, userNum)

//iterate through each operation button array item to add a click event listener
opsBtn.forEach(item =>{
    item.addEventListener('click', ops);
});

//save the value of the display number and the operation when an operation button is clicked
function ops(e){
    operation = e.target.textContent;
    firstUserInput = userNum;
    userNum = null;
    displayNum.textContent = '';
    
    console.log('operation ' + operation);
    console.log('firstUserInput ' + firstUserInput);
    console.log('userNum ' + userNum);
    
};

//iterate through each number button array item to add a click event listener
numBtn.forEach(item => {
  item.addEventListener('click', showDisplay);
});

//change the text content of display to show the number of the button clicked
function showDisplay(e){
     if (displayNum.textContent == '0'){
        displayNum.textContent = e.target.textContent;
        
     }else {displayNum.textContent += e.target.textContent;}

     userNum = Number(displayNum.textContent);
     console.log(userNum);
};

//clear the screen and reset to 0
clearBtn.addEventListener('click', () => {
    displayNum.textContent = '0';
    answer = null;
    //console.log(displayNum.textContent);
});




/*
function solve(operand, operation, userNum){
   // console.log(operate(operand, operation, userNum));
    displayNum.textContent = operate(operand, operation, userNum);
    return operate(operand, operation, userNum);
}
*/


//console.log(operate('2', '*' , '4' ));
//console.log(solve('5', '*', '4'));
//console.log(operate('5', '-', '4'));
//console.log(operate('6', '/', '2'));
//console.log(operate(5, '+', 4));
//console.log(operate(2, '*', 3));
console.log(typeof answer);