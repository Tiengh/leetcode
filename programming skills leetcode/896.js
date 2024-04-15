//option 1
var isMonotonic = function(nums) {
    let len = nums.length;
    let incre = 0;
    let decre = 0;
    for(let i = 1;i<len;i++){
        if(nums[i] > nums[i-1]) incre++;
        if(nums[i] < nums[i-1]) decre++;
    }
    if(incre!==0 && decre!==0) return false;
    if(incre===0 && decre===0) return true;
    return true;
};

console.log(isMonotonic([3,2,1]));