function displayResults() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id','answer');
    const newContent = document.createTextNode(`Your cat is ${Math.round(humanAge)} in human years.`);
    newDiv.appendChild(newContent);
    document.getElementById("desktopgrid").appendChild(newDiv);
}

function confirmResults() {
    if(document.getElementById("answer")){
        const element = document.getElementById('answer');
        element.remove();
        displayResults();
    } else {
        displayResults();
    }
}