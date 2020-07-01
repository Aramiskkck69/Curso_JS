'use strict'
//*************** cada 3 segundos se ejecuta la accion **********************
/*
window.addEventListener('load',function(){
	// Timers 
	var tiempo = setInterval(function(){
		console.log('set Interval en acccion');

	},3000);

});
*/
//*************** cada 3 segundos se ejecuta la accion **********************
window.addEventListener('load',function(){
	// Timers 
	function intervalo (){
		var tiempo = setInterval(function(){Antonio Tello - NTV manejo
			var tit = document.querySelector('h1')
			if(tit.style.fontSize == '50px'){
				tit.style.fontSize = '10px';
		    }else{
				tit.style.fontSize = '50px';
				}
		},1000);
	return tiempo
	}

var tiempo = intervalo ();
	
var stop = document.querySelector('#boton');
stop.addEventListener('click',function(){
		clearInterval(tiempo);
		alert('haz parado el tiempo de parpadeo');
});
var start = document.querySelector('#start');
start.addEventListener('click',function(){
		alert('haz reiniciado el tiempo de parpadeo');
		intervalo();

});
});

