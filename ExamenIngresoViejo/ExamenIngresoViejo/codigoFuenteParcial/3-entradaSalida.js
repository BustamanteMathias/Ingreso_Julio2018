//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho = parseFloat(document.getElementById("ancho").value);
    var largo = parseFloat(document.getElementById("largo").value);
    var perimetro = largo * 2 + ancho * 2;
    var alambre = perimetro * 6;

    alert ("La cantidad de alambre necesario son: "+ alambre);

}

