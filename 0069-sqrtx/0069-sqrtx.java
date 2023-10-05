class Solution {
    public int mySqrt(int x) {
        
       int odd = 1;
       int count = 1;
       if(x == 0) return x;
       while((x-odd) > 0){
           x = x - odd;
           odd = odd + 2;
           if((x-odd)>=0){
               count++;
           }           
       }
       return count;
    }
}