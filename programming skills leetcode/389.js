


var findTheDifference = function(s, t) {
    let result = '';
    for(let char of s) result^=char.charCodeAt(0);
    for(let char of t) result^=char.charCodeAt(0);
    return String.fromCharCode(result);
};

const s = "abc";
const t = "abcd";
console.log(findTheDifference(s, t));