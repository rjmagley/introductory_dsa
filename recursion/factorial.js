// iterative

function iterativeFactorial(n) {
    
    var result = n;

    while (n > 1) {
        n -= 1;
        result = result * n;
    }

    return result;
}


function recursiveFactorial(n) {
    if (!(Number.isInteger(n))) {
        return undefined;
    }
    if (n < 0) {
        return undefined;
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    var x = n * recursiveFactorial(n - 1)
    return x;
}

console.log(recursiveFactorial(4)); // prints 24
console.log(recursiveFactorial(7)); // prints 5040
console.log(recursiveFactorial(9)); // prints 362880
console.log(recursiveFactorial(1)); // prints 1
console.log(recursiveFactorial(0)); // prints 1
console.log(recursiveFactorial(-3)); // prints undefined
console.log(recursiveFactorial(1.2723)); // prints undefined
console.log(recursiveFactorial("hello")); // prints undefined