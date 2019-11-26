function changeVal(element) {
    var matchResult = element.innerText.match(/(\d{1,2})x(\d{1,2})/);
    if (matchResult != null){
        element.innerHTML = Number(matchResult[1]) * Number(matchResult[2]);
        return;
    }
    var value = Number(element.innerText);
    var factors = factorials(value);
    if (factors.length === 1) {
        element.innerHTML = (value / factors[0]) + "x" + factors[0];
        return;
    }
    if (factors.length === 2) {
        element.innerHTML = (value / factors[0]) + "x" + factors[0] + "\n" +
            (value / factors[1]) + "x" + factors[1] ;
    }
}

function factorials(value){
    var sqrt = Math.sqrt(value);
    var factors = [];
    for (let i = 2; i <= sqrt; i++) {
        if (value % i === 0 && value / i <= 10) {
            factors.push(i);
        }
    }
    return factors;
}
