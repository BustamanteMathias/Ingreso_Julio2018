//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var meses = prompt("Ingrese mes: ");

    /*  var enero;
        var febrero;
    */

    switch (meses)
    {
        case "enero":
        case "febrero":
            alert ("Veranito!!!");
        break;
        case "marzo":
        case "abril":
        case "mayo":
        case "junio":
        case "julio":
        case "agosto":
        case "septiembre":
        case "octubre":
        case "noviembre":
        case "diciembre":
            alert("extraño enero y febrero!!!");
        break;
        default:
            alert("No es un mes del año");
        break;
    }
}

