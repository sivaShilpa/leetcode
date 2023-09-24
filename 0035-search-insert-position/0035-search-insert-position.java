class Solution {
    public int searchInsert(int[] nums, int target) {
        List<Integer> numList = new ArrayList<Integer>(nums.length+1);
        for(int i=0; i<nums.length; i++){
            numList.add(nums[i]);
        }
        numList.add(target);
        Collections.sort(numList);
        return numList.indexOf(target);
    }
}