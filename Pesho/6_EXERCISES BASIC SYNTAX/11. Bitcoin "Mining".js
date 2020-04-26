function goldMiner(input) {
    let gold = input.shift();
    let day = 0;
    let money = 0;
    let bitcoins = 0;
    let isOk = false;
    let firstPurchase = 0;
    while (gold != undefined) {
        day++;
        if (day % 3 == 0) {
            gold *= 0.70;
        }
        money += (gold * 67.51);
        if (money / 11949.16 >= 1) {
            bitcoins += Math.floor(money / 11949.16);
            money = money % 11949.16;
        }
        if (!isOk) {
            if (bitcoins > 0) {
                firstPurchase = day;
                isOk = true;
            }
        }

        gold = input.shift();
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

goldMiner([100, 200, 300]);
goldMiner([50, 100]);
goldMiner([3124.15, 504.212, 2511.124]);