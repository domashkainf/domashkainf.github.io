window.onload = function () {
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
