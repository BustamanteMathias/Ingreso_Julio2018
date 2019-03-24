function Mostrar()
{

var clave = prompt("Ingrese el número clave.");

/*while   (clave != "utn750")   // Mientras- Clave- no sea igual a-...

{
    clave = prompt("Error. Ingrese clave nuevamente");
}

alert("La clave es correcta");
*/

while ( !(clave == "utn750"))   //Mientras-No sea- clave- igual a-...

{
    clave = prompt("Error. Ingrese clave nuevamente");
}
alert("La clave es correcta");
}//FIN DE LA FUNCIÓN
