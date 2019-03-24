//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe = parseInt(prompt("Inserte importe:"));
    var importeIVA = importe * 1.21;
    document.getElementById("importe").value = importeIVA;
}

