function averageOfNonNegatives(arr) {
    let positiveCount = 0;
    let positiveSum = 0;

    if (arr.length <= 0) {
        return undefined;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
            positiveSum += arr[i];
        }
    }

    if (positiveCount < 1) {
        return undefined;
    }

    return positiveSum / arr.length;
}

console.log(averageOfNonNegatives([0, 1, 2, 3, 4, -5]));
console.log(averageOfNonNegatives([4, -12, -2, 2, -6, -8, 10, -14]));
console.log(averageOfNonNegatives([-1, -2, -3]));
console.log(averageOfNonNegatives([]));