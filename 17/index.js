let words = {
    'units': ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    'tenth': ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
}

let numToWordsCount = (limit) => {

    let sum = 0;

    for (let i = 1; i <= limit; i++) {

        let num = i
        let numStr = ''

        let thousands = Math.floor(num / 1000)
        if (thousands > 0) {
            numStr = numStr + words['units'][thousands] + 'thousand'
            num = num - (thousands * 1000)
        }

        let hundreds = Math.floor(num / 100)
        if (hundreds > 0) {
            numStr = numStr + words['units'][hundreds] + 'hundred'
            num = num - (hundreds * 100)
            if (num > 0) {
                numStr = numStr + 'and'
            }
        }

        if (num < 20) {
            numStr = numStr + words['units'][num]
        } else {
           let tens = Math.floor(num / 10)
            numStr = numStr + words['tenth'][tens]
            num = num - (tens * 10)
            numStr = numStr + words['units'][num]
        }

        sum = sum + numStr.length
    }

    return sum
}

console.log(numToWordsCount(1000))