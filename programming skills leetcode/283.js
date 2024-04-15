var moveZeroes = function(nums) {
    let index = 0;
    const len = nums.length;
    for(let i = 0;i<len;i++){
        if(nums[i]!==0){
            nums[index]=nums[i];
            index++;
        }
    }
    for(let i = index;i<len;i++){
        nums[index] = 0;
        index++; 
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,2]));