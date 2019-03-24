function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do
	{
		numero = parseInt(prompt("Ingrese numero: "));
		acumulador = acumulador + numero;
		contador = contador+1;

		respuesta = prompt("Desea seguir? si/no: ");
	} while (respuesta == "si");
	

	/*	while (respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese numero: "));
		acumulador = acumulador + numero;
		contador = contador+1;

		respuesta = prompt("Desea seguir? si/no: ");
	}

*/

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN