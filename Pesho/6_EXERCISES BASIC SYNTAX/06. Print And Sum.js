function print(start, end) {
    let numbers = "";
    let sum = 0;
    for (let i = start; i <= end; i++) {
        numbers += i + " ";
        sum += i;
    }
    console.log(numbers);
    console.log("Sum: " + sum); 
}

print(5, 10);
print(0, 26);
print(50, 60);