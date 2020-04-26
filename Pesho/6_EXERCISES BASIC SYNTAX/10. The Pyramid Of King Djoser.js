function resourcesPyramid(base, increment) {
    let steps = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let heigth = 0;
    for (let i = base; i >= 1; i -= 2) {
        steps++;
        if (steps % 5 == 0) {
            if (i > 2) {
            stone += ((i - 2) * (i - 2));
            // console.log(stone);
            lapis += (i * 4) - 4;
            
            // console.log("OK");   
            } else {
                gold = i * i;
                // console.log("This is the TOP!");
                
            }
        } else {
            if (i > 2) {
                stone += ((i - 2) * (i - 2));
                // console.log(stone);
                marble += (i * 4) - 4; 
            } else {
                gold = i * i;
            }
        }
    }
    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapis = Math.ceil(lapis * increment);
    gold = Math.ceil(gold * increment);
    heigth = Math.floor(steps * increment);

    console.log("Stone required: " + stone);
    console.log("Marble required: " + marble);
    console.log("Lapis Lazuli required: " + lapis);
    console.log("Gold required: " + gold);
    console.log("Final pyramid height: " + heigth);
}

resourcesPyramid(23, 0.5);