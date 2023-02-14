function displayResults() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(`Your cat is ${Math.round(humanAge)} in human years!`);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("calculate");
    document.body.insertBefore(newDiv, currentDiv.nextSibling);
}