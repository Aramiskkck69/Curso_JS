'use strict'


//*************** Variables ********************
	// Obtener por id por

//var caja = document.getElementById("micaja");
var caja = document.querySelector('#micaja');
	//conseguir elementos por su etiqueta 
var todos_los_div = document.getElementsByTagName('div');


//*************** Funciones **********************

function cambiarcolor(color){
	caja.style.background= color;

}

//***************** codigo **********************
/*
var color1 = prompt("Dime un color");
//cambair elemento dell html 
caja.innerHTML= 'que ha habido racita';
//cabiar color de fondo 
caja.style.background = 'gray';
//cambiar el padding (grosor de la caja)
caja.style.padding = "50px";
// cambiar color de letra
caja.style.color= 'white';
cambiarcolor(color1);
*/

//********************************************************

// Ver el contenido de el tag
	// var contenidoTxt = todos_los_div[2].textContent;

var seccion = document.querySelector('#miseccion');
var valor;
var hr = document.createElement('hr');

for(valor in todos_los_div){
	if (typeof todos_los_div[valor].textContent == 'string') {
	var parrafo = document.createElement("p"); // Crea una etiqueta 
	var texto = document.createTextNode(todos_los_div[valor].textContent); // recore el html array en todo el documento
	parrafo.appendChild(texto); // cierra la etiqueta 
	document.querySelector('#miseccion').appendChild(parrafo); // la agrega a la seccion con id mi seccion
	parrafo.append(texto); 
	seccion.append(parrafo);
	// se cierran todas las etiquetas 
}
}

seccion.append(hr); // añade una separacion

// ***********************************************************
// obtener objeto por su class 
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
//cambiar el color individualmente
divsAmarillos[0].style.background = '#FFFF00'

//recorrer el array parra mostrar el cambio de color en el documento
var div;
for(div in divsRojos){
	if (divsRojos[div].className == "rojo"){
		divsRojos[div].style.background = 'red';
		//console.log('estyo dentro');
	}
}

var id = document.querySelectorAll(".verde"); // solo un elemnto 
console.log(id);
