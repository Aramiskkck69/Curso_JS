'use stric'
/* 
1. Formulario de campos: Nombre, apellido y edad
2. Boton de enviar el formulrio eventos submit 
3. Mostrar datos por pantalla 
4. Tener un boton que al dar click nos muestra los datos actuales del formulario 
*/

var box_dashed = document.querySelector('.dashed');
var formulario = document.querySelector('#formulario');
	box_dashed.style.display = 'none';

formulario.addEventListener('submit',function(){
	console.log('evento capturado submit');
	var nombre= document.querySelector('#nombre').value;
	var apellido = document.querySelector('#apellido').value;
	var edad = document.querySelector('#edad').value;

	var datos_usuarios=[nombre,apellido,edad];
	

		if (nombre.trim() == null || nombre.trim().length == 0){
			alert('El nombre no es valido')
		}
		if (apellido.trim() == null || apellido.trim().length == 0){
			alert('El apellido no es valido')
		}
	if (edad == null || edad <= 0|| isNaN(edad)){
			alert('La edad no es valida')
			}



	var indice;
	for(indice in datos_usuarios){
		var parrafo = document.createElement('p');
		parrafo.append(datos_usuarios[indice]);
		box_dashed.append(parrafo);
	}

	box_dashed.style.display ='Block'; 
	console.log( nombre,edad,apellido);
});

