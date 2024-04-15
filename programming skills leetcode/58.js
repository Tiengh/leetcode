//option 1
var lengthOfLastWord = function (s) {
  let str = s.trim();
  const len = str.length;
  let dem = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      dem++;
    }
    if (str[i] === " ") break;
  }
  return dem;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
