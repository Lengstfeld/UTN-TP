/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let f_c;
    
    f_c = (temperatura - 32) * (5/9);
    temperatura = parseInt(txtIdTemperatura.value);

    alert(f_c + " Centigrados");
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let c_f;
    
    temperatura = parseInt(txtIdTemperatura.value);    
    c_f = (temperatura*(9/5))+32;
    
    alert(c_f + " Fahrenheit");
}
