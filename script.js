
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

console.log(operate(20,'+', 5));
console.log(operate(8,'*', 7));
