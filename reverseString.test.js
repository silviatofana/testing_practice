const reverseString = require('./src/reverseString.js');

test('to check if string is reverssed', () => {
  const str = 'gender';
  expect(reverseString(str)).toBe('redneg');
});