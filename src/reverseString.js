const reverseString = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr;
};

module.exports = reverseString;