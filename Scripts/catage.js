function ageCalc(catage) {
if (catage < 6) {
    humanage = (catage * 19 / 3) + 1
} else {
    humanage = (catage - 6) * 4 + 40
};
console.log(humanage);
}