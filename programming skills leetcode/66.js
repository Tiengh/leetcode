var plusOne = function (digits) {
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      break;
    }
  }
  if (digits[0] !== 0) return digits;
  let array = [1];
  for (let i = 0; i < len; i++) {
    array.push(digits[i]);
  }
  return array;
};

console.log(plusOne([9, 9, 9, 9]));
