//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

    var importe;
    var contador = 0;
    var acumuladorMayor = 0;
    var acumuladorMenor = 0;

    while (contador < 7);
    {
        importe = parseFloat(prompt("Ingrese importe"));
        if (importe <=0)
        {
            importe = parseFloat(prompt("Ingrese numero mayor de 0"));
        }
        else if (importe > 0)
        {
            
        }
        contador ++;
    }
}

