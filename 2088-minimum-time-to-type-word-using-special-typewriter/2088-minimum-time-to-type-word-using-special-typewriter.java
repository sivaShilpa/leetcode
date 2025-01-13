class Solution {
    public int minTimeToType(String word) {
        int time = 0;

        time += word.length();

        time += Math.min(Math.abs(word.charAt(0) - 'a'), (26 - Math.abs(word.charAt(0) - 'a')));

        for(int i = 1; i < word.length(); i++){
            time +=  Math.min(Math.abs(word.charAt(i) - word.charAt(i-1)), (26 - Math.abs(word.charAt(i) - word.charAt(i-1))));
        }

        return time;
    }
}