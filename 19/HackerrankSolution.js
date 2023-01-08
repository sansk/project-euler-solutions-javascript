function processData(input) {
    const values = input.split('\n');
    const noOfInput = +(values.shift());

    for (let inp = 0; inp < values.length; inp += 2) {
        const firstYear = values[inp].split(' ').map(Number),
            lastYear = values[inp + 1].split(' ').map(Number);

        let startMonth = firstYear[1],
            startDay = firstYear[2],
            endMonth = 12;
        let count = 0;

        for (let year = firstYear[0]; year <= lastYear[0]; year++) {
            if (startDay > 1) startMonth++;
            if (year === lastYear[0]) endMonth = lastYear[1];

            for (let month = startMonth; month <= endMonth; month++) {
                if (new Date(year, month, 1).getDay() === 0) {
                    count += 1
                }
            }
        }
        console.log(count);
    }
} 