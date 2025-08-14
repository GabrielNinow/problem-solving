const numbersList = [2,1,0,-2,-1];

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;

    arr.forEach(element => {
       switch(true){
        case element > 0:
            pos++;
            break;
        case element < 0:
            neg++;
            break;
        default:
            zero++;
            break;
       }  
    });

    console.log((pos / arr.length).toFixed(6));
    console.log((neg / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}


plusMinus(numbersList);