function countDownRecursive(n) {
    console.trace(n);
    if (n > 0) {
        countDownRecursive(n - 1);
    }
}

countDownRecursive(5);