class Solution {
    public List<String> removeAnagrams(String[] words) {
        
        // convert words to list
        List<String> wordsList =  Arrays.stream(words)
                                  .collect(Collectors.toList());

        // iterate through the words array from 1 index
        for(int i = 1; i < wordsList.size();){
            char[] word1Array = wordsList.get(i-1).toCharArray();
            char[] word2Array = wordsList.get(i).toCharArray();

            Arrays.sort(word1Array);
            Arrays.sort(word2Array);

            String sortedWord1 = new String(word1Array);
            String sortedWord2 = new String(word2Array);


            // check if words[i-1] is and anagram of words[i], 
            if(sortedWord1.equals(sortedWord2)){
                // if yes then remove element at i index from wordsList
                wordsList.remove(i);
            }else{
                i++;
            }
        }

        // return wordsList
        return wordsList;
    }
}