// Implemente uma função `summationOf(number)` que recebe um número inteiro
// e retorna o seu somatório.

// Por exemplo:
// - `summationOf(1)` retorna 1: de 1 até 1 = 1
// - `summationOf(3)` retorna 6: de 1 até 3 = 1 + 2 + 3 = 6
// - `summationOf(5)` retorna 15: de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15

// TDD

const assert = require("assert");

const summationOf = (number) => {
  if (typeof(number) !== "number") {
    throw Error("Essa função só funciona com números!");
  }

  let summation = 0;

  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }

  return summation;
}

assert.strictEqual(typeof(summationOf), "function", "Deu ruim. O resultado esperado era function");
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);

assert.throws(() => {
  // algum codigo que deve levantar exceção. Ou seja, que deve dar erro
  summationOf("3");
});