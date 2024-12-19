function Sum(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new TypeError('Both arguments must be numbers');
    }
    else {
        return a + b;
    }
}


const result = Sum("3",44);
console.log(result);