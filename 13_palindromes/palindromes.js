const palindromes = function (input) {
    let gnirts = ""
    string = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(' ', '').toLowerCase();    
    for (i = string.length -1; i >= 0; i--) {
        gnirts += string[i]
    }
    console.log(`String = ${string}, inverted = ${gnirts}`)

    return gnirts == string
};

console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
