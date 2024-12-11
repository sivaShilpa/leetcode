class Solution {
    public boolean digitCount(String num) {
        // convert num into an arr called numArr
        String[] numArr = num.split("");
        // convert the numArr to a list called numList
        List<String> numList = Arrays.asList(numArr);

        // iterate through the numList
        for(int i = 0; i < numList.size(); i++){
            String iString = String.valueOf(i);
            // get count of index i in numList
            long count = numList.stream().filter(iString::equals).count();
            // if count is not equals to numList.get(i)
            if(!String.valueOf(count).equals(numList.get(i))){
                // then return false
                return false;
            }
        }
        // return true
        return true;        
    }
}