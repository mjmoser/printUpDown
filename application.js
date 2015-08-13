function printNumbers() {
	var numberOne = document.getElementById ("numberOne");
	var numberTwo = document.getElementById ("numberTwo");
	var output = document.getElementById ("output");
	
	for(var i = numberOne.value; i <= numberTwo.value; i++) { 
		output.innerHTML += "<div>" + i + "</div>";		
	}
	for(var j = numberTwo.value; j <= numberOne.value; i--) { 
		output.innerHTML += "<div>" + j + "</div>";		
	}
	output.innerHTML += j;
}