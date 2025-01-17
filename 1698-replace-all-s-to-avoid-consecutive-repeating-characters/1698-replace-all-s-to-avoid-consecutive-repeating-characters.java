class Solution {
    public String modifyString(String s) {
        if(s.length() == 1 && s.equals("?")){
            return "a";
        }

        // split the string s to an array
        String[] sArray = s.split("");

        // iterate through string s
        for(int i = 0; i < sArray.length-1; i++){
            // if the current character is a ? 
            if(sArray[i].equals("?")){
                if(i > 0){
                    if(!sArray[i-1].equals("a") && !sArray[i+1].equals("a")){
                        sArray[i] = "a";
                    }else if(!sArray[i-1].equals("b") && !sArray[i+1].equals("b")){
                        sArray[i] = "b";
                    }else{
                        sArray[i] = "c";
                    }
                }else{
                    if(!sArray[i+1].equals("a")){
                        sArray[i] = "a";
                    }else if(!sArray[i+1].equals("b")){
                        sArray[i] = "b";
                    }
                }
            }
        }

        if(sArray[sArray.length - 1].equals("?")){
            if(!sArray[sArray.length-2].equals("a")){
                sArray[sArray.length - 1] = "a";
            }else{
                 sArray[sArray.length - 1] = "b";
            }
        }

        return String.join("", sArray);
    }
}