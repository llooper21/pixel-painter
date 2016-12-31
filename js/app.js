function getBackgroundColor(idName) {
	var element = document.getElementById(idName);
	console.log(element);
	var style = window.getComputedStyle(element,null).getPropertyValue("background-color");
	document.getElementById("selectedColorName").style.backgroundColor = style;
	//console.log(element.id)
}

function changeColorOnClick(idName) {
	var originalElementColor = document.getElementById("selectedColorName").style.backgroundColor;
	document.getElementById(idName).style.backgroundColor = originalElementColor;
	//idName = originalElementColor;
	//console.log(element.id)
}