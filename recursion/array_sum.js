function sumArrayValues(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            sum += arr[i];
        }
        else {
            sum += sumArrayValues(arr[i]);
        }
    }
    return sum;
}

console.log(sumArrayValues([[1, 2, 3], [2, 3, 4], [3, 4, 5]]));