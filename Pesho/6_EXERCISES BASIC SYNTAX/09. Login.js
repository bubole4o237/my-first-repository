function solve(input) {
    let userName = input.shift();
    let password = "";
    let isNotBlocked = true;
    for (let i = userName.length - 1; i >=0; i--) {
        password += userName[i];
    }
    let newPass = input.shift();
    let counter = 0;
    while (newPass != password) {
        counter++;
        if (counter >= 4) {
            console.log("User " + userName + " blocked!");
            isNotBlocked = false;
            break;
        }
        console.log("Incorrect password. Try again.");
    newPass = input.shift();
   }
   if (isNotBlocked) {
       console.log(`User ${userName} logged in.`);    
   }
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);