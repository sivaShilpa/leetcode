class Solution {
    public int maximumDifference(int[] nums) {
        int maxDiff = 0;

        for(int i = 0; i < nums.length-1; i++){
            for(int j = i+1; j < nums.length; j++){
                int temp = nums[j] - nums[i];
                if(temp > maxDiff){
                    maxDiff = temp;
                }
            }
        }

        if(maxDiff <= 0){
            return -1;
        }

        return maxDiff;
        
    }
}