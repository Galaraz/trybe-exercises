/* 3- A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item, caso ele exista no array
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */ 


const myRemoveWithoutCopy = (arr, item) =>
  arr.forEach((element, index, array) =>
    element === item ? array.splice(index, 1) : undefined
  );

module.exports = myRemoveWithoutCopy;