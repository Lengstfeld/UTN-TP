/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
//Con IF
/*function CalcularPrecio() 
{
    let valorLampara;
    let cantidadDeLamparas;
    let marca;
    valorLampara = 35;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if(cantidadDeLamparas >= 6){
        document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)/2}
    else if(cantidadDeLamparas == 5){
        if(marca == "ArgentinaLuz"){document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.6}
        else{document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.7}
        }
    else if(cantidadDeLamparas == 4){
        if(marca == "ArgentinaLuz" || marca =="FelipeLamparas"){document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.75}        
        else{document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.8} 
    }
    else if(cantidadDeLamparas == 3){
        if(marca == "ArgentinaLuz"){document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.85}        
        if(marca == "FelipeLamparas"){document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.9}
        else{document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.95}
    }
}*/
//Con Switch
function CalcularPrecio()
{
    let valorLampara;
    let cantidadDeLamparas;
    let marca;
    valorLampara = 35;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch(cantidadDeLamparas)
	{
		case (cantidadDeLamparas >= 6):
			document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)/2;
			break;

		case cantidadDeLamparas == 5:
            switch(marca)
            {
                case "Argentina":
                    document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.6;
                    break;
                default: 
                    document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.7;
                    break;
            }            
			break;

		case cantidadDeLamparas == 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.75;
                    break;
                default:
                    document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.8;
                    break;
            }

		case cantidadDeLamparas == 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.85;
                    break;
                case "FelipeLamparas":
                    document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.9;
                    break;
                default:
                    document.getElementById("txtIdprecioDescuento").value = (valorLampara * cantidadDeLamparas)*0.95;
                    break;
            }
		default:
            break;
	}
 	
}
