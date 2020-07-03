//*************** Decorador ***************
function estampar(logo: string) {
    return function (target: Function){
        target.prototype.estampacion = function ():void {
            console.log("camiseta con el logo " + logo);
        }
    }
}

//*************** Objeto ***************
@estampar('Guchi')

class Camiseta {

    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio: number;


//*********** Constructor *************
    constructor (color,modelo,marca,talla,precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
//************* Metodos (Funciones) *************
    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

var camiseta = new Camiseta("azul","Air","Nike","S",1500);
camiseta.estampacion();
//******************* Herencia ********************************
class Sudadera extends Camiseta{
    public capucha: boolean;
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var sudadera = new Sudadera("azul","Air","Nike","S",1500);
sudadera.setCapucha(true);
sudadera.setColor("Amarillo patito");

//***********************************************************
console.log(camiseta);
console.log(sudadera);