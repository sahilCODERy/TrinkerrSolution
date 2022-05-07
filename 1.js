


function newBie(ar){
    let res=[];
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length;j++){
            let x=ar[i]+''+ar[j]
            res.push(parseInt(x))
        }
    }

    let sum=0;
    res.forEach(element => {
        sum+=element
    });
    return sum;
}

console.log(newBie([10, 11]))
console.log(newBie([8, 10, 12]))