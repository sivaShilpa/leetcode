class Solution {
    public int minimumOperations(int[][] grid) {
        // initialize a variable called retVal
        int retVal = 0;

        // iterate through columns of the grid
        for (int col = 0; col < grid[0].length; col++) {
            // iterate through the rows of the grid starting from index 1
            for (int row = 1; row < grid.length; row++) {
                if (grid[row - 1][col] >= grid[row][col]) {
                    // initialize a variable called prev and assign the grid value on previous row
                    int prev = grid[row - 1][col];
                    int newVal = Math.abs(prev - grid[row][col]) + 1;
                    // add the absolute difference between prev and current grid value plus one to
                    // retVal
                    retVal += newVal;
                    // assign the current cell in grid the current value plus absolute difference
                    // between prev and current grid value plus one
                    grid[row][col] = grid[row][col] + newVal;
                }
            }
        }
        // return retVal
        return retVal;

    }
}