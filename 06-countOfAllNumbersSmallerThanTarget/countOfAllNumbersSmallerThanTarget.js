function countOfAllNumbersSmallerThanTarget(nums, target) {
    let count = 0;
    for (let element of nums)
        if (element < target) count++;
    return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;