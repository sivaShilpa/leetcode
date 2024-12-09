class Solution {
    public boolean checkAlmostEquivalent(String word1, String word2) {

        // Find all unique letters in word1 and create a list called uniqueLettersInWord1
        List<Character> uniqueLettersInWord1 = word1.chars().filter(Character :: isLetter).mapToObj(c -> (char) c).distinct()
        .collect(Collectors.toList());

        // Find all unique letters in word2 and create a list called uniqueLettersInWord2
         List<Character> uniqueLettersInWord2 = word2.chars().filter(Character :: isLetter).mapToObj(c -> (char) c).distinct()
        .collect(Collectors.toList());

        // iterate through uniqueLettersInWord1
        for(int i = 0; i < uniqueLettersInWord1.size(); i++){
            //Get the count of the letter in word1 and word2 and assign them to countInWord1 and countInWord2 respectively
            Character ch = uniqueLettersInWord1.get(i);
            long countInWord1 = word1.chars().filter(c -> c == ch).count();
            long countInWord2 = word2.chars().filter(c -> c == ch).count();
            // get the absolute difference between countInWord1 and countInWord2 and assign it to diff
            long diff = Math.abs(countInWord1 - countInWord2);
            // if diff is greater than 3 then return false
            if(diff > 3){
                return false;
            }
        }
        // iterate through uniqueLettersInWord2
        for(int j = 0; j < uniqueLettersInWord2.size(); j++){
            // if the character is not in uniqueLettersInWord1
            if(!uniqueLettersInWord1.contains(uniqueLettersInWord2.get(j))){
                // get the count of the letter in word 2
                Character ch = uniqueLettersInWord2.get(j);
                long countInWord2 = word2.chars().filter(c -> c == ch).count();
                // if the count is greater than 3 then return false
                if(countInWord2 > 3){
                    return false;
                }
            }
        }

        return true;        
    }
}