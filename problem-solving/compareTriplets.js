const a = [5,6,7];
const b = [3,6,10];

function compareTriplets(a, b) {
    let comp = [0,0];
    
    for(let i = 0; i <= a.length; i++){
        if(a[i] > b[i]){
            comp[0] += 1;
        }
        if(b[i] > a[i]){
            comp[1] += 1;
        }
    }
    
    return comp;
}

console.log(compareTriplets(a, b))