function sumOfAllOddNumbers(nums) {
    let count = 0;
    for (let element of nums)
        if (element % 2 == 1) count++;
    return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;