// var inputArray = [1, 2, 3];

// function multiplyArrays(arr) {
//     var output = [];
//     for (var i = 0; i < arr.length; i++) {
//         var newArray = [];
//         for (var j = 0; j < arr.length; j++) {
//             newArray.push(arr[i] * arr[j]);
//         }
//         output.push(newArray);
//     }
//     return output;
// }

// console.log(multiplyArrays(inputArray));

// var inputArray = [1, 2, 3];

// function multiplyArrays(arr) {
//     var output = [];
//     var i = 0;
//     var j = 0;
//     var newArray = [];
//     for (; i < arr.length; ) {
//         newArray.push(arr[i] * arr[j]);
//         j++;
//         if (j == arr.length) {
//             i++;
//             j = 0;
//             output.push(newArray);
//             var newArray = [];
//         }
//     }
//     return output;
// }

// console.log(multiplyArrays(inputArray));

for (var i = 0, j = 0; i + j < 100, i != 10; i++, j--) {
    if (i % 2 == 0) {
        j += 5;
    }
    console.log(i);
    console.log(j);
}