function footballPoints(wins, ties) {
  // seu código aqui
  let pontV = wins*3;
  let pontE =ties;
  let vitorias = pontV + pontE;
  return vitorias;
}
console.log(footballPoints());
