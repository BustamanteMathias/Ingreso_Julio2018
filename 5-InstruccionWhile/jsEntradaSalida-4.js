/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var Nombre;
		Nombre = prompt("Inserte NOMBRE: ");

		document.getElementById("elNombre").value=Nombre;
}

