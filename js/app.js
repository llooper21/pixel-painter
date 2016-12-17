function getBackgroundColor(idName) {
	var element = document.getElementById(idName);
	var style = window.getComputedStyle(element,null).getPropertyValue("background-color");
	document.getElementById(selectedColorName) = style;
	//console.log(element.id)
}

function changeColorOnClick(idName) {
	var originalElementColor = document.getElementById(selectedColorName);
	idName = originalElementColor;
	//console.log(element.id)
}