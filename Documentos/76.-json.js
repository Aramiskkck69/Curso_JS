'use stric'
var pelicula = {
	titulo: 'Batman',
	year: 1997,
	pais:'usa',

}

var peliculas = [
	{titulo: 'El guason',year:'2019',pais:'usa'},
	pelicula
]

var caja_peliculas = document.querySelector("#Peliculas_caja");

var index;

for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - "+peliculas[index].year);
	caja_peliculas.append(p);
}

