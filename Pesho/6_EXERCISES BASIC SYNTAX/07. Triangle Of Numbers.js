function solve(num) {
    for (let i = 1; i <= num; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += i + " ";   
        }
        console.log(result);
    }
}

solve(3);
solve(5);
solve(6);