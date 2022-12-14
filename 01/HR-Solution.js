process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        ////// Our Code Starts here //////
        let N = BigInt(n) - BigInt(1)
        let i3 = BigInt(N) / BigInt(3)
        let i5 = BigInt(N) / BigInt(5)
        let i15 = BigInt(N) / BigInt(15)
        let m3 = BigInt(3) * BigInt(i3) * (BigInt(i3) + BigInt(1))
        let m5 = BigInt(5) * BigInt(i5) * (BigInt(i5) + BigInt(1))
        let m15 = BigInt(15) * BigInt(i15) * (BigInt(i15) + BigInt(1))
        let sum = (BigInt(m3) + BigInt(m5) - BigInt(m15)) / BigInt(2)
        console.log(sum.toString())
        ////// Our Code Ends here //////
    }
}

