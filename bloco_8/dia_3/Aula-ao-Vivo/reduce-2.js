const assert = require('assert');

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const reduceFunction = (accumulator, currentValue) => `${accumulator} ${currentValue}`;

const epicPhrase = epic.reduce(reduceFunction, "!");


// Testes

const expectedValue = "! a long time ago in a galaxy far far away";

assert.strictEqual(epicPhrase, expectedValue);