//ДВИЖЕНИЕ БЛОКА С РЕКЛАМОЙ В САЙДБАРЕ
window.onload = function() {
	var pos = 0;
	var reklama = document.getElementById('reklama');
	var t = setInterval (move , 100);
	
	function move () {
		if(pos < 40) {
			pos +=1;
			reklama.style.left = pos + '%';
		}
		else if(pos == 40) {
			pos = 0;
		}
	}
//ВЫПАДАЮЩЕЕ МЕНЮ
	document.getElementById('spisokMenu').onmouseenter = function menuSpisok() {
	document.getElementById('spisok');
	spisok.style.display = 'inline';
}
    document.getElementById('spisokMenu').onmouseleave = function menuSpisok() {
	document.getElementById('spisok');
	spisok.style.display = 'none';
}
    document.getElementById('spisok').onmouseenter = function menuSpisok() {
	document.getElementById('spisok');
	spisok.style.display = 'inline';
}
    document.getElementById('spisok').onmouseleave = function menuSpisok() {
	document.getElementById('spisok');
	spisok.style.display = 'none';
}
};

//АНИМАЦИЯ СЛАЙДЕРА С СОБАКАМИ

var posC = 0;
function back() {
    var line = document.getElementById('line');
    posC += 256;
    if(posC > 0){
        posC = -1024;
    }
    line.style.left = posC + 'px';
}﻿	
setInterval (next , 4000);
function next(){
	var line = document.getElementById('line');
	posC -=  256;
	if (posC < -1024) {
		posC = 0;
	}
	line.style.left = posC +'px';
}

//АНИМАЦИЯ СЛАЙДЕРА С ПРОДУКТАМИ

var posC1 = 0;
setInterval(food , 4000);

function food() {
	var line1 = document.getElementById('line1');
	posC1 -= 68;
	if(posC1 < -408){
		posC1 = 0;
	}
    line1.style.left = posC1 + 'px';	
}












