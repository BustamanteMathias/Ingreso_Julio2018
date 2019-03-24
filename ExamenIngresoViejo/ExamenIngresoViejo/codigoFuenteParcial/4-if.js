//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numeroUno = parseInt(prompt("Ingrese 1er número:"));
    var numeroDos = parseInt(prompt("Ingrese 2do número"));
    var multiplicacion;
    var resta;
    var suma;

    if (numeroUno == numeroDos)
    {
        multiplicacion = numeroUno * numeroDos;
        document.write("El primer numero es igual al segundo" +"<br>" + "Su producto es: " + multiplicacion);
    }
    else if (numeroUno > numeroDos)
    {
        resta = numeroUno - numeroDos;
        document.write("El primer numero es mayor al segundo" +"<br>" + "Su resta es: " + resta);
    }
    else
    {
        suma = numeroUno + numeroDos;
        document.write("El primer numero es menor al segundo" +"<br>" + "Su suma es: " + suma);
    }
}

