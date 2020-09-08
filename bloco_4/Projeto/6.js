function highestCount(arry) {
  let maiorN = 0;
  let contador = 0;
  for (key in arry) {
    if (arry[key] > maiorN) {
      maiorN = arry[key];
    }
  }
  for (key in arry) {
    if (arry[key] == maiorN) {
      contador += 1;
    }
  }
  return contador;
}
