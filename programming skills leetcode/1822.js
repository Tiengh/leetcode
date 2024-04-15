//option 1
var arraySign = function(nums) {
    let num = nums.reduce((previous, current) => {
        return previous*current;
    }, 1)

    if(num < 0) return -1;
    if(num > 0) return 1;
    return 0;
};
//option 2
var arraySign2 = function(nums) {
    let len = nums.length;
    let nev = 0;
    let zero = 0;
    for(let i = 0;i<len;i++){
        if(nums[i] < 0) nev++;
        if(nums[i] === 0) return 0;
    }
    if(nev%2===0) return 1;
    return -1;

};

console.log(arraySign2([-1,-2,-3,-4,3,2,0]))

