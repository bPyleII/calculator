//get and HTML collection of elements with the class name digit and then create an array from it
let numBtn = Array.from(document.getElementsByClassName('digit'));
let displayNum = document.getElementById('display');
displayNum.textContent = '0';
let userNum;


const clearBtn = document.getElementById('clear');

//iterate through each array item to add and click event listener
numBtn.forEach(item => {
  item.addEventListener('click', showDisplay);
});


function showDisplay(e){
     //change the text content of display to show the number of the button clicked
     if (displayNum.textContent == '0'){
        displayNum.textContent = e.target.textContent;
        
     }else {displayNum.textContent += e.target.textContent;}

     userNum = displayNum.textContent;
     console.log(userNum);
};

//clear the screen and reset to 0
clearBtn.addEventListener('click', () => {
    displayNum.textContent = '0';
    console.log(displayNum.textContent);
});



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
}
/**
 * This function can be used to solve basic arithmatic
 * by passing parameters into the operators object
 */
function operate(num1, operation, num2){
    if (operation in operators){
        Number(num1);
        Number(num2);
        return operators[operation](num1, num2);
    }
}


