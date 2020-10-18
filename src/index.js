module.exports = function reverse (str) {
  if (str < 0) str *= -1;
  str = String(str);

  return Number(str.split('').reverse().join(''));
}
