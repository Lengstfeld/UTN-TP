/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    let suma;
    let uno;
    let dos;
    let tres;
    let idPrecioUno;
    let idPrecioDos;
    let idPrecioTres;
    
    idPrecioUno = document.getElementById("txtIdPrecioUno").value;
    idPrecioDos = document.getElementById("txtIdPrecioDos").value;
    idPrecioTres = document.getElementById("txtIdPrecioTres").value;
    uno = parseInt(idPrecioUno);    
    dos = parseInt(idPrecioDos);    
    tres = parseInt(idPrecioTres);   
    suma = uno + dos + tres;

    alert(suma);
}
function Promedio () 
{
    let promediar;
    let uno;
    let dos;
    let tres;
    let idPrecioUno;
    let idPrecioDos;
    let idPrecioTres;
    
    idPrecioUno = document.getElementById("txtIdPrecioUno").value;
    idPrecioDos = document.getElementById("txtIdPrecioDos").value;
    idPrecioTres = document.getElementById("txtIdPrecioTres").value;
    uno = parseFloat(idPrecioUno);    
    dos = parseFloat(idPrecioDos);    
    tres = parseFloat(idPrecioTres); 
    promediar = (uno + dos + tres)/3;
    
    alert(promediar.toFixed(2));	
}
function PrecioFinal () 
{
    let sumaConIVA;
    let uno;
    let dos;
    let tres;
    let idPrecioUno;
    let idPrecioDos;
    let idPrecioTres;
    
    idPrecioUno = document.getElementById("txtIdPrecioUno").value;
    idPrecioDos = document.getElementById("txtIdPrecioDos").value;
    idPrecioTres = document.getElementById("txtIdPrecioTres").value;
    uno = parseInt(idPrecioUno);    
    dos = parseInt(idPrecioDos);    
    tres = parseInt(idPrecioTres); 
    sumaConIVA = (uno + dos + tres)*1.21;
    
    alert(sumaConIVA);
}