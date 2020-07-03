'use stric'

// comprobar del LocalStorage
if(typeof(Storage)!== 'undfined')
	console.log('Storage disponible');
else{
	console.log('Storage no disponible');
}
//Guardar datos en el LocalStorage 
localStorage.setItem('titulo','el kks');
// Recuperar elemento
document.querySelector('#ejemplo').innerHTML = localStorage.getItem('titulo');
//guardar objetos
var usuario = {
	nombre: 'Aramis',
	email:  'joluramirezdi',
	facebook: 'Aramis Ramirez'
}


localStorage.setItem('usuario',JSON.stringify(usuario)); // JSON.stringify sirve para convertir en sting
// recuperar objetos

var objeto_recuperado = JSON.parse(localStorage.getItem('usuario'));
console.log(objeto_recuperado);

document.querySelector('#ejemplo').append( objeto_recuperado.facebook);

// quitar 
	//localStorage.removeItem('usuario');
//quitar todo alv
	//localStorage.clear();