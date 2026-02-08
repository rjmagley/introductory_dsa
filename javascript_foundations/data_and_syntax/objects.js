function numberOfCharacters(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count += 1
        }
    }

    return count;
}

// console.log(numberOfCharacters("Hello world!", "l"));
numberOfCharacters["Hello world!"] = 3;
var x = 0;
console.log(numberOfCharacters[x++, "l"]);
console.log(Object.keys(numberOfCharacters))
console.log(x);