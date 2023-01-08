const countingSundays = (firstYear, lastYear) => {
    let count = 0;

    for (let year = firstYear; year <= lastYear; year++) {
        for (let month = 0; month < 12; month++) {
            if (new Date(year, month, 1).getDay() === 0) {
                count += 1
            }
        }
    }

    return count;
}

console.log('Result from countingSundays: ' + countingSundays(1901, 2000));

const anotherWayOfCountingSundays = (firstYear, lastYear) => {
    let count = 0,
        startingDay = new Date(firstYear, 0, 1).getDay();
    const noOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (let year = firstYear; year <= lastYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            noOfDaysInMonth[1] = 29;
        } else {
            noOfDaysInMonth[1] = 28;
        }

        for (let month = 0; month < 12; month++) {
            if (startingDay === 0) {
                count = count + 1;
            }
            startingDay = (startingDay + noOfDaysInMonth[month] % 7) % 7;
        }
    }

    return count;
}

console.log('Result from anotherWayOfCountingSundays: ' + anotherWayOfCountingSundays(1901, 2000));