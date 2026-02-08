// bad gcf example

function gcf(x, y) {
    if (x == y) {
        return x;
    }
    else if (x > y) {
        return gcf(x-y, y);
    }
    else {
        return gcf(x, y-x);
    }
}

// console.log(gcf(123456, 987654));

var count = 0;

function tak(x, y, z) {
    count += 1;
    console.log(`${count} - ${x} - ${y} - ${z}`);
    if (y < x) {
        return tak(
            tak(x-1, y, z),
            tak(y-1, z, x),
            tak(z-1, x, y)
        );
    }
    else {
        return z
    }
}

function tak_rewrite(x, y, z) {

    if (y < x) {
        a = tak_rewrite(x-1, y, z);
        b = tak_rewrite(y-1, z, x)
        c = tak_rewrite(z-1, x, y)
        return tak_rewrite(a, b, c);
    }
    else {
        return z
    }
}


console.log(tak(11, 1, 11));