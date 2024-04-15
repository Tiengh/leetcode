//option 1
var canMakeArithmeticProgression = function (arr) {
  let arrSort = arr.sort((a, b) => a - b);
  const len = arrSort.length;
  if (len <= 1) return false;
  let difference = Math.abs(arrSort[1] - arrSort[0]);
  for (let i = 1; i < len - 1; i++) {
    if (Math.abs(arrSort[i + 1] - arrSort[i]) !== difference) return false;
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
