/*=============================================================================*/
/* Most Commonly used functions like finding divisors, prime numbers etc
/*=============================================================================*/
/*
    Proper Divisors of integer 'n'. It returns the sorted Array of divisors.
    More: https://theintrovertcoder.hashnode.dev/series/ds-problem-js
*/
export const properDivisors = n => {
    let divisorsArr = [1];

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            divisorsArr.push(i, n / i);
            if (i === Math.sqrt(n)) { 
                divisorsArr.pop();
            }
        }
    }
    return divisorsArr.sort(function (a, b) { return a - b; });
}

/*
    This function is used to find the nth triangular Number. It returns the integer.
    Eg: 7th Triangular Number = 28
*/
// 
export const findTriangularNum = n => (n * (n + 1)) / 2;
