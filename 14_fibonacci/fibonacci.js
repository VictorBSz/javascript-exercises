const fibonacci = function(num) {
    n1 = 1
    n2 = 1
    n3 = 2
    num = parseInt(num)
    if (num < 0) {
        msg = "OOPS"
        return msg
    }
    if (num == 0) {
        return 0
    } else if (num == 1) {
        return 1
    } else if (num == 2) {
        return 1
    } else if (num == 3) {
        return 2
    } else
        for (i = 4; i <= num; i++) {
            n1 = n2
            n2 = n3
            n3 = n1 + n2
            console.log(`${n3}`)
        }
    return n3
};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
