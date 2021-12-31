var a = document.getElementById("block1");
var b = document.getElementById("block2");
var c = document.getElementById("block3");


function closeBlockColumnB() {
	if (a.classList[2] == 'closeColumnB' | a.classList[2] == undefined) {
		a.classList.add('openColumnB');
		a.classList.remove('closeColumnB');
	}
	else if (a.classList[2] == 'openColumnB') {
		a.classList.add('closeColumnB');
		a.classList.remove('openColumnB');
	}  
}

function closeBlockRowB() {
	if (b.classList[2] == 'closeRowB' | b.classList[2] == undefined) {
		b.classList.add('openRowB');
		b.classList.remove('closeRowB');
	}
	else if (b.classList[2] == 'openRowB') {
		b.classList.add('closeRowB');
		b.classList.remove('openRowB');
	}
}

function closeBlockRowB2() {
	if (c.classList[2] == 'closeRowB' | c.classList[2] == undefined) {
		c.classList.add('openRowB');
		c.classList.remove('closeRowB');
	}
	else if (c.classList[2] == 'openRowB') {
		c.classList.add('closeRowB');
		c.classList.remove('openRowB');
	}
}