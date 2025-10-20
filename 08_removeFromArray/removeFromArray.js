const removeFromArray = function(array, ...remove) {
    newArray = []
    array.forEach((element) => {
        if (!remove.includes(element)) {
            newArray.push(element)
        }
        console.log(`Old array: ${array} \n New array: ${newArray}`)
    });
    return newArray
};

removeFromArray([1, 2, 3, 4], 2, 3)



// Do not edit below this line
module.exports = removeFromArray;
