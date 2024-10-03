import java.util.*;

class Solution {
    public boolean wordPattern(String pattern, String s) {
        // Initialize a Map
        Map<String, String> map = new HashMap<>();
        List<String> sArray = new ArrayList<>();

        // Use string tokenizer to convert s to an array of words
        StringTokenizer st = new StringTokenizer(s, " ");
        while(st.hasMoreTokens()){
            sArray.add(st.nextToken());
        }
        // if the length of pattern is not equal to the length of sArray then return false.
        if(pattern.length() != sArray.size()){
            return false;
        }else{            
            for(int i = 0; i < pattern.length(); i++){
                // System.out.println(map.get(Character.toString(pattern.charAt(i))));
                if(!map.containsKey(Character.toString(pattern.charAt(i))) && !map.containsValue(sArray.get(i))){
                    // map(pattern.charAt(i)) = sArray.get(i);
                    map.put(Character.toString(pattern.charAt(i)), sArray.get(i));
                    // System.out.println(Character.toString(pattern.charAt(i)));
                    // System.out.println(map.get(Character.toString(pattern.charAt(i))));
                }else{                    
                    for(Map.Entry<String, String> entry: map.entrySet()){
                        if(entry.getValue().equals(sArray.get(i)) && entry.getKey().equals(Character.toString(pattern.charAt(i)))){
                            continue;
                        }else if(entry.getValue().equals(sArray.get(i)) && !entry.getKey().equals(Character.toString(pattern.charAt(i)))){
                            return false;
                        }else if(!entry.getValue().equals(sArray.get(i)) && entry.getKey().equals(Character.toString(pattern.charAt(i)))){
                            return false;
                        }
                    }
                }
            }

            // if(map.keySet().size() == map.values().size()){
            //     return true;
            // }
        }
        // Map each letter in pattern to every word in sArray.
            // if key is repeating then check if the value is same else return false

        // return true
        return true;
    }
}