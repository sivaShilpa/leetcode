class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        // convert the arr into list called arrList
        Integer[] integerArray = Arrays.stream(arr).boxed().toArray(Integer[]::new);
        List<Integer> arrList = Arrays.asList(integerArray);
        // sort the arrList
        Collections.sort(arrList);
        // initialize a list for differences
        List<Integer> differences = new ArrayList<>();
        // initialize a List of List of Integers as retVal
        List<List<Integer>> retVal = new ArrayList<>();

        // iterate through arrList
        for (int i = 1; i < arrList.size(); i++) {
            // get the absolute difference of the adjacent elements and add it to the
            // differences list
            differences.add((arrList.get(i) - arrList.get(i - 1)));
        }
        // Find the Min of differences and assign it to the minDiff
        int minDiff = Collections.min(differences);

        // iterate untill differences contains minDiff
        for (int j = 0; j < differences.size(); j++) {
            // find the index of the first minDiff and assign it to indexOfMinDiff
            if (differences.get(j) == minDiff) {
                // Create a list of arrList of indexOfMinDiff and arrList of indexOFMinDiff + 1
                List<Integer> tempList = Arrays.asList(arrList.get(j), arrList.get(j + 1));
                // Add it to retVal
                retVal.add(tempList);
            }
        }
        // return retVal
        return retVal;
    }
}