function ageCalc(catAge) {
if (catAge < 6) {
    humanAge = (catAge * 19 / 3) + 1
} else {
    humanAge = (catAge - 6) * 4 + 40
};
console.log(humanAge);
}