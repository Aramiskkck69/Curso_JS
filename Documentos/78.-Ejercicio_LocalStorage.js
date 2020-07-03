'use strict'

var formulario= document.querySelector('#formulario');

formulario.addEventListener('submit',function(){
	var titulo = document.querySelector('#agregar').value;
	
	if (titulo.length >= 1 ){
		localStorage.setItem(titulo,titulo);
	}
});
var ul = document.querySelector('#ordenar')

var index;
for(index in localStorage){
	if (typeof localStorage[index] == 'string' && localStorage != 0){
		var li = document.createElement('li');
		li.append(localStorage[index]);
		ul.append(li);
	}
}

var formulario1= document.querySelector('#borrar');

formulario1.addEventListener('submit',function(){
	var titulo = document.querySelector('#borrar1').value;
	
	if (titulo.length >= 1 ){
		localStorage.removeItem(titulo,titulo);
	}
});