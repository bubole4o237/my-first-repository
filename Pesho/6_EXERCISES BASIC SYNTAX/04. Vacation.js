function calculatePrice(number, typeGroup, day) {
    let price = 0;
    let totalPrice = 0;

    switch (typeGroup) {
        case "Students":
            if (day == "Friday") {
                price = 8.45;
            } else if (day == "Saturday") {
                price = 9.80;
            } else if (day == "Sunday") {
                price = 10.46;
            }
            if (number >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
                if (day == "Friday") {
                    price = 10.90;
                } else if (day == "Saturday") {
                    price = 15.60;
                } else if (day == "Sunday") {
                    price = 16;
                }
                if (number >= 100) {
                    number -= 10;
                };
            break;
        case "Regular":
                if (day == "Friday") {
                    price = 15;
                } else if (day == "Saturday") {
                    price = 20;
                } else if (day == "Sunday") {
                    price = 22.50;
                }
                if (number >= 10 && number <= 20) {
                    price *= 0.95;
                }
            break;
    }
    totalPrice = number * price;
    console.log("Total price: " + totalPrice.toFixed(2));
}

calculatePrice(30, "Students", "Sunday");
calculatePrice(40, "Regular", "Saturday");