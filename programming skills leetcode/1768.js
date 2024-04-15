
var word1 = "abc";
var word2 = "defg";

var mergeAlternately = function(word1, word2) {
    let merge = '';
    const maxLength = Math.max(word1.length, word2.length);
    for(let i = 0;i<maxLength;i++){
        if(i < word1.length){
            merge+=word1[i];
        }
        if(i < word2.length){
            merge+=word2[i];
        }
    }
    return merge;
};
