function concatName() {
  // seu código aqui

  let lastItem ;
  let firstItem;
  let array = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];

  firstItem = array[0];
  lastItem = array[array.length - 1];

  // for (const key in array) {lastItem = array[key];}
  array = lastItem+" "+firstItem ;
 // array.push(lastItem);
 
  return array;
}
console.log(concatName());
