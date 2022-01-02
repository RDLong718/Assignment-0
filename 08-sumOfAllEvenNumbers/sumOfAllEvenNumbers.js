function sumOfAllEvenNumbers(nums) {
    let count = 0;
    for (let element of nums)
        if (element % 2 == 0) count++;
    return count;

}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;