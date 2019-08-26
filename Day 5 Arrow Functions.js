function modifyArray(nums) {

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            nums[i] = nums[i] * 2;
        }
        else
            nums[i] = nums[i] * 3;
    }
    return nums;
    /return nums.map(n => n = (n%2==0) ? n*2: n*3);/
}