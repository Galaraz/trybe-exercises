function techList(tech, name) {
  let arrayObjeto = [];
  tech.sort();
  for (key in tech) {
    arrayObjeto.push({ tech: tech[key], name: name });
  }
  if (tech.length == 0) {
    return "Vazio!";
  }
  return arrayObjeto;
}
