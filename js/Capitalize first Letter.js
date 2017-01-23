/*Um im Javascript den ersten Buchstaben eines */
/*Strings groß zu schreiben egal ob dieser klein oder großgeschrieben ist*/
/*Benötigt wird jQuery muss ich noch prüfen*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Benutzung
capitalizeFirstLetter(string)