var btn = document.getElementById('btn');





function addition(recup1, recup2) {
	var resultat = parseFloat(recup1) + parseFloat(recup2);
	return resultat;
}

function division(recup1, recup2) {
	var resultat = parseFloat(recup1) / parseFloat(recup2);
	return resultat;
}

function soustraction(recup1,recup2) {
	var resultat = parseFloat(recup1) - parseFloat(recup2);
	return resultat;
}

function multiplication(recup1, recup2) {
	var resultat = parseFloat(recup1) * parseFloat(recup2);
	return resultat;
}


btn.addEventListener('click',function() {
	var selectVal = document.querySelector('select').value;
	var recup1 = document.querySelectorAll('input[type="text"]')[0].value;
	var recup2 = document.querySelectorAll('input[type="text"]')[1].value;

	switch (selectVal) {
		case '+': 
			var resultat = addition(recup1, recup2);
			break;

		case '-':
			var resultat = soustraction(recup1,recup2);
			break;

		case '*':
			var resultat = multiplication(recup1, recup2);
			break;

		case '/':
			var resultat = division(recup1, recup2);
			break;

		default:
		
				
		
	}

	document.getElementById('ici').innerHTML= resultat;
});






