const pythagoreanTriplet = n => {
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++ ) {
            const c = Math.sqrt(a*a + b*b);

            if ((a + b + c) === n) {
                return a * b * c;
            }
        }
    }
    return "Not Found!";
}

console.log(pythagoreanTriplet(1000));