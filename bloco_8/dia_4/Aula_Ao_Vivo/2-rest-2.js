const assert = require('assert');

const formatDate = (year, month, day, ...rest) => {
  return `${day}/${month}/${year}`;
};

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

assert.strictEqual(formatDate(...dateInfo), '31/7/1981');
