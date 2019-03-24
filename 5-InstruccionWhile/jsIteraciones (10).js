/*Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. +
2-Suma de los positivos. +
3-Cantidad de positivos. +
4-Cantidad de negativos. +
5-Cantidad de ceros. +
6-Cantidad de números pares. +
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

function Mostrar()
{

	var sumaNegativos = 0; //LISTO
	var sumaPositivos = 0; //LISTO
	var contadorNegativo = 0; // LISTO
	var contadorPositivo = 0; //LISTO
	var contadorCeros = 0; //LISTO
	var contadorNumPares = 0; // LISTO
	var calculoPares; //LISTO
	var promedioPos;
	var promedioNeg;
	var diferenciaPosNeg;
	var numero; //LISTO
	var respuesta; //LISTO

	do
	{
		numero = parseInt(prompt("Ingrese número: "));

		if ( numero > 0 )
		{
			sumaPositivos = sumaPositivos + numero;
			contadorPositivo++ ;
		}
		else if ( numero < 0 )
		{
			sumaNegativos = sumaNegativos + numero;
			contadorNegativo++ ;
		}
		else 
		{
			contadorCeros++
		}
		
		calculoPares = numero % 2;
		if (calculoPares == 0 )
			{
			contadorNumPares++;
			}
	
	respuesta = prompt("Desea seguir? s/n");

	} while( respuesta == "s");

	if (contadorPositivo != 0)
	{
	promedioPos = sumaPositivos / contadorPositivo;
	}

	if (contadorNegativo !=0)
	{
	promedioNeg = sumaNegativos / contadorNegativo;	
	}

	diferenciaPosNeg = sumaPositivos - sumaNegativos;

	document.write("Cantidad de positivos: " + contadorPositivo + "<br/>");
	document.write("Cantidad de negativos: " + contadorNegativo + "<br/>");
	document.write("Cantidad de números pares: " + contadorNumPares + "<br/>");
	document.write("Cantidad de ceros: " + contadorCeros + "<br/>");
	document.write("Suma de negativos: " + sumaNegativos + "<br/>");
	document.write("Suma de positivos: " + sumaPositivos + "<br/>");
	document.write("Promedio positivo: " + promedioPos + "<br/>");
	document.write("Promedio negativo: " + promedioNeg + "<br/>");
	document.write("Diferencia entre positivos y negativos: " + diferenciaPosNeg + "<br/>");



}//FIN DE LA FUNCIÓN