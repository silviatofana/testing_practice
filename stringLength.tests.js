const strLength = require('./src/stringLength.js');

test('character count is greater than 0', () => {
  const str = 'tim';
  expect(strLength(str)).toBeGreaterThan(0);
});

test('character count is less than or equal to 10', () => {
  const str = 'tim';
  expect(strLength(str)).toBeLessThanOrEqual(10);
});