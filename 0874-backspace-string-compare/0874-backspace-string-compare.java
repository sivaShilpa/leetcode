class Solution {
    public boolean backspaceCompare(String s, String t) {
        // initialize a variable called editedS
        String editedS = "";
        String editedT = "";

        // iterate through s 
        for(int i = 0; i < s.length(); i++){
            // if the alphabet is '#' then assign the substring from index 0 to editedS.length-1 to editedS
            if(s.charAt(i) == '#'){
                if(editedS.length() > 0){
                    editedS = editedS.substring(0, editedS.length()-1);
                }
            }else{
                editedS += s.charAt(i);
            }
        }

        // Repeat the same process for t

        for(int j = 0; j < t.length(); j++){
            if(t.charAt(j) == '#'){
                if(editedT.length() > 0){
                    editedT = editedT.substring(0, editedT.length()-1);
                }
            }else{
                editedT += t.charAt(j);
            }
        }

        // Compare editedS and editedT and return the result
        return editedS.equals(editedT);
    }
}