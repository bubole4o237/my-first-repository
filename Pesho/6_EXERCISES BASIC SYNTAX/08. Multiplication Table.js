function solve(num) {
    let result = 0;
    let outPut = "";
    for (let i = 1; i <= 10; i++) {
        result = num * i;
        outPut = num + " X " + i + " = " + result;
        console.log(outPut);
    }
}

solve(2);