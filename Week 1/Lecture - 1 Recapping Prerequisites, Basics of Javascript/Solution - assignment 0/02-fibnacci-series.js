
// Fibonacci Number
function fib(n){
    if(n <= 1){
        return n;
    }

    let first_sub_problem = fib(n-1);
    let second_sub_problem = fib(n-2);
    return first_sub_problem + second_sub_problem;
}

let numberInput = 7;
let fibnacciValue = fib(numberInput);
console.log(fibnacciValue);