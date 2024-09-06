class Solution {
    public String mergeAlternately(String word1, String word2) {
    // Intialize a variable called retVal which is equal to ""
    String retVal = "";
    int shortLength = 0;
    // compare the length of the word1 and word2
    if(word1.length() >= word2.length()){
        // assign the the shorter length to a variable named shortLength
        shortLength = word2.length();
    }else{
        shortLength = word1.length();
    }    

    // Loop through the words from index 0 to the shortLength
        // add the word1[i] to retVal 
        // add the word2[i] to retVal
    for(int i = 0; i < shortLength; i++){
        retVal += word1.charAt(i);
        retVal += word2.charAt(i);
    }

    // use substring method to get the remaining charcters of the longer word and add it to retVal at the end. 
    if(word1.length() > shortLength){
        retVal += word1.substring(shortLength, word1.length());
    }else{
        retVal += word2.substring(shortLength, word2.length());
    }

    // return retVal
    return retVal;
 
    }
}