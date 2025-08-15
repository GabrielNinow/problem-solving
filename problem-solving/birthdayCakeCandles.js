const numbersList = [4,8,8,1];

function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    let counter = 0;

    candles.forEach(element => {
        if(element === max){
            counter++;
        }
    });

    return counter;
}

console.log(birthdayCakeCandles(numbersList));