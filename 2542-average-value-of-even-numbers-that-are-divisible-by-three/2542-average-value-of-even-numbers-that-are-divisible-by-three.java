class Solution {
    public int averageValue(int[] nums) {
        // Initialize a variable called sum as an int as 0 
        int sum = 0;
        // Initialize a variable called count as 0
        int count = 0;

        // Iterate through the nums 
        for(int n : nums){
            // if nums is even and is divisible by 3 then add it to the retVal, then add one to count
            if(n % 2 == 0 && n % 3 == 0){
                sum += n;
                count++;
            }
        }

        // return retVal divided by count
        if(count == 0){
            return 0;
        }
        return sum / count;
    }
}