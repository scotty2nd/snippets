/*Um im Javascript den ersten Buchstaben eines */
/*Strings gro� zu schreiben egal ob dieser klein oder gro�geschrieben ist*/
/*Ben�tigt wird jQuery muss ich noch pr�fen*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Benutzung
capitalizeFirstLetter(string)