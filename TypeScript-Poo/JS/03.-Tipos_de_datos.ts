// ********** Tipos de datos personalizados **********
type alfanumerico = string | number;

//********** string **********
let cadena: alfanumerico = "Aramis Ramirez";
cadena =  "El kks";
// ********** Number**********

let numero: number = 12;

//********** Any **********
let cualquiera: any = "Hola";
cualquiera = 66;

//********** Arrays **********
var languajes: Array<string> = ['php','js','ruby'];

let years: any[] = ["doce",12,13,14];
//************************************************************
console.log(cadena,numero,cualquiera,languajes,years);