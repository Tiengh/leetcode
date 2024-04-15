//option 1
var romanToInt = function (s) {
    const len = s.length;
    let total = 0;
    for (let i = 0; i < len - 1; i++) {
      if (convertCharToNumber(s[i]) < convertCharToNumber(s[i + 1])) {
        total -= convertCharToNumber(s[i]);
      } else {
        total += convertCharToNumber(s[i]);
      }
    }
    total += convertCharToNumber(s[len - 1]);
    return total;
  };

  var convertCharToNumber = (char) => {
    switch (char.toUpperCase()) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  };
console.log(romanToInt("MCMXCIV"));
