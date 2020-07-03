'use strict'
var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    VelocidadMax : '60Km',
        cambiarColor: function ( nuevo_color) {
            this.color = nuevo_color;
            console.log(this);
        }
}
bicicleta.cambiarColor("Azul");