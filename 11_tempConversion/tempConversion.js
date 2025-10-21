const convertToCelsius = function(temp) {
  converted = (temp - 32) * 5 / 9
  rounded = Math.round(converted * 10) / 10
  return rounded
};

const convertToFahrenheit = function(temp) {
  converted = temp * 9 / 5 + 32
  rounded = Math.round(converted * 10) / 10
  return rounded
};

console.log(convertToCelsius(100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
