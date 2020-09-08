function catAndMouse(mouse, cat1, cat2) {
  //--buscador-- //
  //do cat1 ate o mouse  distacia vai para o contador cat1
  let contadorCat1 = cat1 - mouse;
  //do cat ate o mouse distacia vai  para o contador cat2
  let contadorCat2 = cat2 - mouse;
  if (contadorCat1 < 0) {
    contadorCat1 = contadorCat1 * -1;
  }
  if (contadorCat2 < 0) {
    contadorCat2 = contadorCat2 * -1;
  }
  //condiçao para checar distancia menor entre o cat1 e cat2
  // condiçao contraria
  if (contadorCat1 < contadorCat2 && contadorCat1 > 0 && contadorCat2 > 0) {
    return "cat1";
  } else if (
    contadorCat1 > ContadorCat2 &&
    contadorCat1 > 0 &&
    contadorCat2 > 0
  ) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(-10, 2, 3));
