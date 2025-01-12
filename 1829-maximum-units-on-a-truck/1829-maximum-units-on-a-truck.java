class Solution {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        // initialize a variable called truckfilled as 0 to track how much is the truck filled so far
        int truckFilled = 0;
        int retVal = 0;

        // sort the boxTypes according to the numberOfUnitsPerBox
        int[][] sortedBoxTypes = Arrays.stream(boxTypes)
                .sorted((a, b) -> Integer.compare(b[1], a[1])) // Sort by nums[i][1] in descending order
                .toArray(int[][]::new);
        
        for(int[] el : sortedBoxTypes){
            if(truckFilled < truckSize){
                if(el[0] < truckSize - truckFilled){
                    retVal += el[0] * el[1];
                    truckFilled += el[0];
                }else{
                    int diff = truckSize - truckFilled;
                    retVal += diff * el[1];
                    truckFilled += diff;
                }

            }else{
                break;
            }
        }

        return retVal;
        
    }
}