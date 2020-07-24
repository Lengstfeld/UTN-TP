/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{
    let largo;
    let ancho;  
    let sumar;
    let idLargo;
    let idAncho;
    
    idAncho = document.getElementById("txtIdAncho").value;
    idLargo = document.getElementById("txtIdLargo").value;
    largo = parseInt(txtIdLargo.value);
    ancho = parseInt(txtIdAncho.value);
    sumar = ((largo + ancho)* 2 )* 3;

    alert(`Se necesita ${sumar}m. de alambre`);

}
function Circulo () 
{
    let radio;
    let pi;
    let areaCirculo;
    let idRadio

    idRadio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(idRadio);
    pi = 3.14;
    areaCirculo = ((radio * radio)*pi) *3;

    alert(`Se necesita ${areaCirculo.toFixed(2)}m. de alambre`);
	
}
function Materiales () 
{
    let largo;
    let ancho;
    let cemento;
    let cal;
    let idLargo;
    let idAncho;
    
    idAncho = document.getElementById("txtIdAncho").value;
    idLargo = document.getElementById("txtIdLargo").value;
    largo = parseInt(idLargo); 
    ancho = parseInt(idAncho);
    cemento = (largo * ancho) * 2;
    cal = (largo * ancho) * 3;
    
    alert(`Se necesita ${cemento} bolsas de cemento y ${cal} de cal`);
}