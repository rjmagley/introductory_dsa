// var loopArray = [7, 14, 5, 8, 21, 3];
// for (var i = 0; i < loopArray.length; i++) {
//     console.log(loopArray[i]);
// }

// var loopArray = [7, 14, 5, 8, 21, 3];
// var i = 0;

// while (i < loopArray.length) {
//     console.log(loopArray[i]);
//     i++;
// }

// for (var i = 0; i < 10; i++) {
//     if (i == 6) {
//         break;
//     }
//     console.log(i);
// }
//var sampleArray = [2, 7, 11, 9, 21, 5, 4];

// for (var i = 0; i < sampleArray.length; i++) {
//     if (sampleArray[i] == 9) {
//         break;
//     }
//     console.log(sampleArray[i]);
// }

// var sampleArray = [2, 7, 11, 9, 21, 5, 4];

// for (var i = 0; i < sampleArray.length; i++) {
//     if (sampleArray[i] != 9) {
//         console.log(sampleArray[i]);
//     }
//     else {
//         i = sampleArray.length;
//     }
// }

// console.log(i + " elements printed")

// function multiplyUnlessNextIsDivisibleBy3(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i + 1] % 3 == 0 || arr[i + 1] == undefined) {
//             continue;
//         }
//         else {
//             arr[i] = arr[i] * arr[i + 1];
//         }
//     }
// }

// function multiplyUnlessNextIsDivisibleBy3(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i + 1] != undefined) {
//             if (arr[i + 1] % 3 != 0) {
//                 arr[i] = arr[i] * arr[i + 1];
//             }
//         }
//     }
// }

// function multiplyUnlessNextIsDivisibleBy3(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] % 3 != 0) {
//             arr[i] = arr[i] * arr[i + 1];
//         }
//     }
// }

// function multiplyUnlessNextIsDivisibleBy3(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if ((arr[i + 1] % 3 != 0) != (arr[i + 1] == undefined)) {
//             arr[i] = arr[i] * arr[i + 1];
//         }
//     }
// }

function multiplyUnlessNextIsDivisibleBy3(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i + 1] % 3 == 0 || arr[i + 1] == undefined)) {
            arr[i] = arr[i] * arr[i + 1];
        }
    }
}

var sampleArray = [2, 3, 7, 4, 24, 9, 14, 22,3 ];
multiplyUnlessNextIsDivisibleBy3(sampleArray);
console.log(sampleArray);