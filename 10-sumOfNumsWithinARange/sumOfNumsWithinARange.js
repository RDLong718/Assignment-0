function sumOfNumsWithinARange(nums, start, end) {
    let count = 0;
    for (let element of nums)
        if (element >= start && element <= end) count++;
    return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;