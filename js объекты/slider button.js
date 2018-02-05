var posC = 0;

function back() {
    var line = document.getElementById('line');
    posC += 256;
    if(posC > 0){
        posC = -1024;
    }
    line.style.left = posC + 'px';
}﻿	
function next(){
	var line = document.getElementById('line');
	posC -=  256;
	if (posC < -1024) {
		posC = 0;
	}
	line.style.left = posC +'px';
}