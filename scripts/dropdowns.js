for(var i=0; i<=38; i++){
    var select = document.getElementById("catYears");
    var option = document.createElement("option");
	select.options.add(option);
	option.text = i;
	option.value = i;
}

for(var i=0; i<=11; i++){
    var select = document.getElementById("catMonths");
    var option = document.createElement("option");
	select.options.add(option);
	option.text = i;
	option.value = i;
}