class MySolution {
    countDownSum(n) {
        if (n == 1) {
            return 1;
        } else {
            return (this.countDownSum(n - 1) + n);
        }
    }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;