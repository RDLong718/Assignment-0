function countOfAllBooleans(arr) {
    let count = 0;
    for (let element of arr)
        if (element === true || element === false) count++;

    return count;

}

// Do not edit this line;
module.exports = countOfAllBooleans;