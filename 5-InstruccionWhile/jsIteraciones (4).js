function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while	(!(numero>0 && numero<=10) || isNaN(numero))

	{
		numero = parseInt(prompt("Error, su número no esta entre + y 10"));	
	}

	document.getElementById("Numero").value= "El numero es correcto. Validado: "+numero;
	

}//FIN DE LA FUNCIÓN