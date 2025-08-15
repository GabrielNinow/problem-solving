const numbersList = [4,7,8,1,3];

function miniMaxSum(arr) {
    let sortedArray = arr.toSorted((a, b) => a - b);

    console.log(`${getMin(sortedArray)} ${getMax(sortedArray)}`);
    
}

function getMin(arr){
    let min = 0;

    for(let i = 0; i <= arr.length-2; i++){
        min += arr[i];
    }

    return min;
}

function getMax(arr){
    let max = 0;

    for(let i = arr.length-1; i > 0; i--){
        max += arr[i];
    }

    return max;
}

miniMaxSum(numbersList);