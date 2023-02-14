function convertCatToHuman() {
    catAge = parseInt(catYears) + parseFloat(catMonths);

    if (catAge <= 1) {
        humanAge = 15 * catAge;
    } else if (catAge > 1 && catAge <= 2) {
        humanAge = (10 * (catAge / 2) + 15);
    } else {
        humanAge = 25 + ((catAge - 2) * 4);
    }
}