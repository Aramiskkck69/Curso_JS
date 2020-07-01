'use strict' // BOM - Browser Objet Model
//*************** Variables ********************


//*************** Funciones **********************
function getboom(){
	console.log (window.innerWidth);
	console.log (window.innerHeight);
	console.log('****************************');
	console.log(screen.width);
	console.log(screen.height);
	console.log('****************************');
	console.log(window.location.href); // URL y localcion
}
function abrirVentana(url){
	window.open(url,"","width = 400,height=300");

}
//***************** codigo **********************
getboom();