const sumAll = function(n1, n2) {
    total = 0
    if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 0) {
        return "ERROR"
    } else {  
        if (n1 < n2) {
            for (i = n1; i <= n2; i++) {
                total += i
            }
        } else if(n1 > n2) {
            for (i = n1; i >= n2; i--) {
                total += i
            }
        }
    }
    console.log(`Total: ${total}`)
    return total
};

sumAll(-2, 4)
// Do not edit below this line
module.exports = sumAll;
