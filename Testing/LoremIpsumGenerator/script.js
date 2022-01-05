var sentencesArray = ["Etiam ut velit velit, aliquam eu augue.", 
					"Proin id ex magna, curabitur dolor lectus, rhoncus sit.", 
					"Nulla facilisi, curabitur sodales enim eget sem vehicula vulputate sed et lorem.", 
					"Cras a cursus tellus, donec faucibus turpis nec.", 
					"Vestibulum commodo, erat eget gravida condimentum, augue tortor congue mi.", 
					"Aenean sed arcu et diam convallis bibendum, nulla at.", 
					"Nullam vel lacus vitae libero scelerisque blandit, phasellus maximus pretium magna."]

function printShit() {
	document.getElementById('loremIpsum').innerHTML = '';
	var number = document.getElementById('sentencesInput').value;
	for (var i = 0; i < number; i++) {
		var x = Math.floor(Math.random()*sentencesArray.length)
		document.getElementById('loremIpsum').innerHTML += ' ' + sentencesArray[x];
	}

	// document.getElementById('loremIpsum').innerHTML += sentencesArray[x];	
}
