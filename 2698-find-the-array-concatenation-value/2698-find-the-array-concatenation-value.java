class Solution {
    public long findTheArrayConcVal(int[] nums) {
        // if size of nums is equal to 1 then return the value in nums
        if (nums.length == 1) {
            return (long)nums[0];
        }

        // Initialize a long variable called concatValue as 0
        long concatValue = 0L;

        // convert nums into a list called numsList
        List<Integer> numsList = Arrays.stream(nums).boxed().collect(Collectors.toList());

        // iterate until size of numsList is greater than 0
        while (numsList.size() > 0) {
            // if size of numsList is greater than 1
            if (numsList.size() > 1) {
                // intialize a string temp and conctenate the string versions of first and last
                String temp = Integer.toString(numsList.get(0)) + Integer.toString(numsList.get(numsList.size() - 1));
                // elements of numsList
                // remove the fist element in numsList
                numsList.remove(0);
                // remove the last element in numsList
                numsList.remove(numsList.size() - 1);
                // convert the temp to long and add it to concatValue
                concatValue += (long) Integer.parseInt(temp);
            } else {
                // else
                // add the value in numsList to concatValue
                concatValue += (long) numsList.get(0);
                numsList.remove(0);
            }
        }
        // return concatValue
        return concatValue;
    }
}