class Solution {
    public boolean isHappy(int n) {
        // initialize a variable called counter at zero
        int counter = 0;

        // iterate until n is not equal to 1 
        while(n != 1){
            // if counter == 10000 then return false
            if(counter == 10000){
                return false;
            }
            // convert n to string called nString
            String nString = String.valueOf(n);
            // split the nString to array
            String[] nStringArr = nString.split("");
            // intialize a variable called sumOfSquares as zero
            int sumOfSquares = 0;
            // iterate through nString
            for(int i = 0; i < nStringArr.length; i++){
                // convert the charcater to digit 
                int digit = Integer.parseInt(nStringArr[i]);
                // get the square of the digit and add it to sumOfSquares
                sumOfSquares += digit*digit;
            }
            n = sumOfSquares;
            counter ++;
        }
        return true;
        
    }
}