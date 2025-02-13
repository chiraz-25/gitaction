// test/sum.test.js

const sum = require('../index');

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

