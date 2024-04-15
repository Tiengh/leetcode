var test = "abaaba";

var repeatedSubstringPattern = function (s) {
  const len = s.length;
  let subString = "";
  for (let i = 1; i <= len / 2; i++) {
    if (len % i === 0) {
      subString = s.substring(0, i);
      if (s === subString.repeat(len / i)) return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern(test));
