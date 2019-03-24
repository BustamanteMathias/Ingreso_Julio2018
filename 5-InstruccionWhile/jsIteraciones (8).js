function Mostrar()
{


	var positivo=0;
	var negativo=1;
	var respuesta;
	var flag=0; 		//Bandera, cuenta cuando pasa por un evento/bloque de codigo
	//var contador=0;

	do
	{
		numero = parseInt(prompt("Ingrese numero: "));
		if (numero > 0)
		{
			positivo= positivo+numero;
		}
		else 
		{
			negativo = negativo * numero;
			flag = 1;
			//contador++;
		}
		
		respuesta = prompt("Desea seguir? si/no: ");

	} while (respuesta == "si");

	if ( flag == 0)
	{
		negativo=0;
	}
	
	/*
	if ( contador == 0)
	{
		negativo=0;
	}
	*/


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN