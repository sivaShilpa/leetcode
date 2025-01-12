class Solution {
    public int diagonalPrime(int[][] nums) {
        // initialize a variable called retVal to store the return value to 0
        int retVal = 0;

        // initialize a variable for row pointer called row to 0
        int row = 0;
        // initialize a variable for column pointer called col to 0
        int col = 0;
        // top left to bottom right pointer navigation
        while(col < nums[0].length){
            if(isPrime(nums[row][col])){
                if(retVal < nums[row][col]){
                    retVal = nums[row][col];
                }
            }
            row++;
            col++;
        }

        // assign row to nums.length-1
        row = nums.length-1;
        // assign col to 0
        col = 0;
        // bottom left to top right pointer navigation
        while(col < nums[0].length){
            if(isPrime(nums[row][col])){
                if(retVal < nums[row][col]){
                    retVal = nums[row][col];
                }
            }
            row--;
            col++;
        }

        // return retVal
        return retVal;
    }
    // create a function called isPrime to check which returns a boolean according to whether the number being passed in is prime or not

    public static boolean isPrime(int num) {
        // 1 is not a prime number
        if (num <= 1) {
            return false;
        }

        // Check divisors from 2 to sqrt(num)
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false; // If divisible, not a prime number
            }
        }

        return true; // Prime number
    }
}