function getSecondLargest(nums) {
    let largetNum = Math.max(...nums);
    let secondLargest;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== largetNum) {
            if (secondLargest == undefined || nums[i] > secondLargest) {
                secondLargest = nums[i];
            } else if ((i = nums.length - 1)) {
                if (secondLargest == undefined || nums[i] > secondLargest) {
                    secondLargest = nums[i];
                }
            }
        }
    }
    return secondLargest;
}