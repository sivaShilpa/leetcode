class Solution {
    public int[] findEvenNumbers(int[] digits) {
        List<Integer> retVal = new ArrayList<>();
    Set<Integer> uniqueNumbers = new HashSet<>();

    // Iterate over all possible i, j, k combinations
    for (int i = 0; i < digits.length; i++) {
        if (digits[i] == 0) continue; // The first digit cannot be zero

        for (int j = 0; j < digits.length; j++) {
            if (i == j) continue; // Skip if i and j are the same

            for (int k = 0; k < digits.length; k++) {
                if (i == k || j == k) continue; // Skip if k is same as i or j

                if (digits[k] % 2 == 0) { // Only consider even numbers
                    int number = digits[i] * 100 + digits[j] * 10 + digits[k];
                    if (uniqueNumbers.add(number)) { // Avoid duplicates
                        retVal.add(number);
                    }
                }
            }
        }
    }

    // Sort the result list
    Collections.sort(retVal);
    return retVal.stream().mapToInt(Integer::intValue).toArray();
    }
}