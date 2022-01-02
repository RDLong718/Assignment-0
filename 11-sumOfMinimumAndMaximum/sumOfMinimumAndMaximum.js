/*Just learned what destructing is... Going to try and use this more often. Makes it possible to extract data from arrays or objects into distinct variables.*/
function sumOfMinimumAndMaximum(nums) {
    return Math.max(...nums) + Math.min(...nums);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;