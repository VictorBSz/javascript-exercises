const add = function(n1, n2) {
  let sum
	sum = n1 + n2
  return sum
};

const subtract = function(n1, n2) {
  let sum
	sub = n1 - n2
  return sub
};

const sum = function(array) {
  let sum = 0
	for (i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
};

const multiply = function(array) {
let mult = array[0]
	for (i = 1; i <= array.length - 1; i++) {
    mult *= array[i]
  }
  console.log(mult)
  return mult
};

const power = function(base, expo) {
	let power = base
  for (i = 1; i <= expo - 1; i++) {
    power *= base
  }
  console.log(`Total = ${power}`)
  return power
};

const factorial = function(num) {
	fact = num
  if (num == 0) {
    fact = 1
  }
  
  for (i = num - 1; i > 0; i--) {
    console.log(`${fact} x ${i}`)
    fact *= i
    console.log(`${fact}`)
  }
  console.log(`total = ${fact}`)
  return fact
};

console.log(factorial(0))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
