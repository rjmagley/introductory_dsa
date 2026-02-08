function rotateArray(arr, n) {
    for (var j = 0; j < n; j++) {
        for (var i = arr.length - 1; i >= 0; i--) {
            arr[i+1] = arr[i];
        }
        arr[0] = arr[arr.length - 1];
        arr.pop();
    }
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

console.log(rotateArray([1, 2, 3, 4, 5], 0));
console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 3));
console.log(rotateArray([1, 2, 3, 4, 5], 4));
console.log(rotateArray([1], 6));
