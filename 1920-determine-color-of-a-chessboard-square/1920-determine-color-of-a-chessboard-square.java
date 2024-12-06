class Solution {
    public boolean squareIsWhite(String coordinates) {
        String[] coordinateArray = coordinates.split("");
        String alphabets = "abcdefgh";

       
        int index = alphabets.indexOf(coordinateArray[0]);
        index ++;
        if(index % 2 == 0 && Integer.parseInt(coordinateArray[1]) % 2 == 0){
            return false;
        }else if(index % 2 != 0 && Integer.parseInt(coordinateArray[1]) % 2 != 0){
            return false;
        }else{
            return true;
        }    
    }
}