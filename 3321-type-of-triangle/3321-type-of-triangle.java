class Solution {
    public String triangleType(int[] nums) {
        // check if equilateral
        if(nums[0] == nums[1] && nums[1] == nums[2]){
            return "equilateral";
        }

        // check if isosceles
        if((nums[0] == nums[1] && (nums[0] + nums[1]) > nums[2]) || (nums[1] == nums[2] && (nums[1] + nums[2]) > nums[0]) || (nums[2] == nums[0] && (nums[2] + nums[0] > nums[1]))){
            return "isosceles";
        }

        // check if scalene
        if((nums[0] + nums[1]) > nums[2] && (nums[1] + nums[2]) > nums[0] && (nums[2] + nums[0]) > nums[1]){
            return "scalene";
        }

        // return "none"
        return "none";        
    }
}