'use strict' // BOM - Browser Objet Model
//*************** Variables ********************
var boton = document.querySelector('#boton');
var input = document.querySelector('#campNombre');
boton.style.padding = '20px';
//*************** Funciones **********************
function changeColor(){
	var but = boton.style.background;
	if (but == "green"){
		boton.style.background = 'red';
	}else{
		boton.style.background = 'green';
	}
	}

//***************** codigo **********************
// Evento Click
boton.addEventListener('click',function(){
		console.log('ok');
		changeColor();
});
// Evento Mouse Over
boton.addEventListener('mouseover',function(){
		console.log('ok1');
		boton.style.background = '#CCC';
	
});
//Focus 
input.addEventListener("focus",function(){
		console.log('estas dentro del input');
	
});

//Blur
input.addEventListener('blur',function(){
	console.log('estas fuera del input');
});
//Keydown
input.addEventListener('keydown',function(event){
	console.log('Pulsando esta tecla' +' '+ String.fromCharCode(event.keyCode));
});
//Keypress
input.addEventListener('keypress',function(event){
	console.log('Tecla pulsada' +' '+ String.fromCharCode(event.keyCode));
});

//Keyup
input.addEventListener('keyup',function(event){
	console.log('Tecla up' +' '+ String.fromCharCode(event.keyCode));
});







