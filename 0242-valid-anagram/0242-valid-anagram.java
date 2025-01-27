class Solution {
    public boolean isAnagram(String s, String t) {
        String sSorted = s.chars().sorted().mapToObj(c -> String.valueOf((char) c)).collect(Collectors.joining());
        String tSorted = t.chars().sorted().mapToObj(c -> String.valueOf((char) c)).collect(Collectors.joining());

        return sSorted.equals(tSorted);        
    }
}