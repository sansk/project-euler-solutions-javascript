let strings = {
    'units': ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    'tens': ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
}

let numToWordsCount = (limit) => {

    let sum = 0
    let i

    /* Go through every number from 1 to limit */
    for (i = 1; i <= limit; i++) {

        let currentNumber = i
        let numberString = ''

        /* Calculate how many thousands current number contains, add to number string, and
            then subtract to have hundreds only */
        let thousands = Math.floor(currentNumber / 1000)
        if (thousands > 0) {
            numberString = numberString + strings['units'][thousands] + 'thousand'
            currentNumber = currentNumber - (thousands * 1000)
        }

        /* Calculate how many hundreds current number contains, add to number string, and
            then subtract to have tens only */
        let hundreds = Math.floor(currentNumber / 100)
        if (hundreds > 0) {
            numberString = numberString + strings['units'][hundreds] + 'hundred'
            currentNumber = currentNumber - (hundreds * 100)
            if (currentNumber > 0) {
                // We don't need the 'and' if there's nothing left
                numberString = numberString + 'and'
            }
        }

        /* If remaining is less than twenty, add the appropriate string */
        if (currentNumber < 20) {
            numberString = numberString + strings['units'][currentNumber]
        } else {
            /* If remaining is more than twenty, split into tens and units and add strings */
            let tens = Math.floor(currentNumber / 10)
            numberString = numberString + strings['tens'][tens]
            currentNumber = currentNumber - (tens * 10)
            numberString = numberString + strings['units'][currentNumber]
        }

        /* Calculate length of current number's string representation and add to sum */
        sum = sum + numberString.length
    }

    return sum
}

/* Check Solution */
console.log(numToWordsCount(1000))