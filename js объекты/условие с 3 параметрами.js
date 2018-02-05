var pogoda , veter , dozd ;
 pogoda=prompt("сейчас холодно или  тепло?" , pogoda);
 veter=prompt("сейчас есть ветер или нет?" , veter);
 dozd=prompt("сейчас есть дождь или нет?" , dozd);
 
 if (pogoda == "холодно" && veter == "да" && dozd == "да") {
	document.write("Хуже время для прогулки не найти");
 }
 else if (pogoda =="тепло" && veter == "да" && dozd == "нет" ) {
	document.write("Можно идти на улицу но погода не идеальная");
 }
  else if (pogoda =="тепло" && veter == "нет" && dozd == "да" ) {
	document.write("Можно идти на улицу но погода не идеальная");
 }
 else if (pogoda =="тепло" && veter == "нет" && dozd == "нет" ) {
	document.write("Идеальное время для прогулки!");
 }
 else if (pogoda == "холодно" && veter == "нет" && dozd == "да") {
	document.write("Можно идти на улицу но погода не идеальная");
 }
  else if (pogoda == "холодно" && veter == "да" && dozd == "нет") {
	document.write("Можно идти на улицу но погода не идеальная");
 }
 else {
	document.write("Выходить на улицу , желательно , только при крайней необходимости")
 }