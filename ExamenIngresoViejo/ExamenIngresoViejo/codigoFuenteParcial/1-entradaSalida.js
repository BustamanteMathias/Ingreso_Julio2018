//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var lado = parseFloat(document.getElementById("lado").value);
    var perimetroDelTriangulo = lado * 3;
    
    alert("El perimetro del triangulo equilateo es: "+ perimetroDelTriangulo);

	
}

