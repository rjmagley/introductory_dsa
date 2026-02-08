// function fibonacci(n) {
//     if (!(Number.isInteger(n))) {
//         return undefined;
//     }
//     if (n < 0) {
//         return undefined;
//     }
//     if (n == 0 || n == 1) {
//         return n;
//     }

//     return fibonacci(n-1) + fibonacci(n-2);
// }

// function fibonacci(n) {
//     if (Number.isInteger(n)) {
//         if (n < 0) {
//             return undefined;
//         }
//         if (n == 0 || n == 1) {
//             return n;
//         }
//     }
//     return undefined;
// }

function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (!(Number.isInteger(n))) {
        return undefined;
    }
    if (n < 0) {
        return undefined;
    }
    if (n == 0 || n == 1) {
        return n;
    }
    var result = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    memo[n] = result;
    return result;
}

console.log(fibonacci(0)); // prints 0
console.log(fibonacci(1)); // prints 1
console.log(fibonacci(2)); // prints 1
console.log(fibonacci(3)); // prints 2
console.log(fibonacci(4)); // prints 3
console.log(fibonacci(5)); // prints 5
console.log(fibonacci(10)); // prints 55
console.log(fibonacci(20)); // prints 6765
console.log(fibonacci(-1)); // prints undefined
console.log(fibonacci(9.18)); // prints undefined
console.log(fibonacci("7")); // prints undefined
console.log(fibonacci(50)); // prints 6765
console.log(fibonacci(60)); // prints 6765
console.log(fibonacci(79)); // prints 6765
console.log(fibonacci(100)); // prints 6765