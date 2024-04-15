var s = "abc"
var t = "cba"
var isAnagram = function (s, t) {
  var x = sort(s);
  var y = sort(t);
  if (x !== y) {
    return false;
  }
  return true;
};

var sort = (s) => {
  return s.split('').sort().join('');
}

if(isAnagram(s, t)){
  console.log("true");
} else{
  console.log("false");
}